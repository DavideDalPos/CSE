// Works out what the conference page should show right now.
// All the settings live in data/conference.js — nothing to change here.
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import conference from '~/data/conference'

const TZ = 'America/New_York'

// "2027-01-16" + "09:30" in Eastern Time → Date (handles EST/EDT)
export function easternDate(day, time = '00:00') {
  if (!day) return null
  const guess = new Date(`${day}T${time}:00Z`)
  const offset = new Intl.DateTimeFormat('en-US', { timeZone: TZ, timeZoneName: 'shortOffset' })
    .formatToParts(guess)
    .find((p) => p.type === 'timeZoneName')
    .value.replace('GMT', '') // e.g. "-5"
  const h = Number(offset) || 0
  return new Date(guess.getTime() - h * 3600e3)
}

export function formatDay(d, opts = {}) {
  return d ? d.toLocaleDateString('en-US', { timeZone: TZ, weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', ...opts }) : ''
}

export function formatTime(d) {
  return d ? d.toLocaleTimeString('en-US', { timeZone: TZ, hour: 'numeric', minute: '2-digit' }) : ''
}

export function useConference({ tick = false } = {}) {
  const route = useRoute()

  // `now` is shared between server render and browser so the first paint matches;
  // the browser then switches to the real clock.
  const now = useState('conference-now', () => Date.now())

  // ?now=2027-01-16T10:00 lets you preview the page at any moment (Eastern Time)
  // (applied after the page has loaded, so the static HTML stays consistent)
  const mounted = ref(false)
  const previewNow = computed(() => {
    const q = mounted.value && route.query.now
    if (!q) return null
    const [d, t = '12:00'] = String(q).split('T')
    return easternDate(d, t.slice(0, 5))
  })

  let timer
  onMounted(() => {
    mounted.value = true
    now.value = Date.now()
    if (tick) timer = setInterval(() => (now.value = Date.now()), 1000)
  })
  onBeforeUnmount(() => clearInterval(timer))

  const current = computed(() => previewNow.value?.getTime() ?? now.value)

  const startAt = computed(() => easternDate(conference.date, conference.start))
  const endAt = computed(() => easternDate(conference.date, conference.end))

  const phase = computed(() => {
    if (!startAt.value) return 'planning'
    if (current.value < startAt.value) return 'upcoming'
    if (current.value <= endAt.value) return 'live'
    return 'finished'
  })

  const s = conference.submissions || {}
  const submissionsOpenAt = computed(() => easternDate(s.opens))
  const submissionsCloseAt = computed(() => easternDate(s.deadline, '23:59'))
  const submissions = computed(() => {
    if (!s.deadline || !startAt.value) return 'none'
    if (submissionsOpenAt.value && current.value < submissionsOpenAt.value) return 'soon'
    if (current.value <= submissionsCloseAt.value) return 'open'
    return 'closed'
  })

  const countdown = computed(() => {
    const diff = Math.max(0, (startAt.value?.getTime() || 0) - current.value)
    return [
      { label: 'Days', value: Math.floor(diff / 864e5) },
      { label: 'Hours', value: Math.floor(diff / 36e5) % 24 },
      { label: 'Minutes', value: Math.floor(diff / 6e4) % 60 },
      { label: 'Seconds', value: Math.floor(diff / 1e3) % 60 }
    ]
  })

  return {
    conf: conference,
    previewing: computed(() => !!previewNow.value),
    phase,
    startAt,
    endAt,
    submissions,
    submissionsOpenAt,
    submissionsCloseAt,
    countdown,
    dayLabel: computed(() => formatDay(startAt.value)),
    timeLabel: computed(() => (startAt.value ? `${formatTime(startAt.value)} – ${formatTime(endAt.value)} ET` : '')),
    deadlineLabel: computed(() => formatDay(submissionsCloseAt.value, { weekday: undefined })),
    opensLabel: computed(() => formatDay(submissionsOpenAt.value, { weekday: undefined }))
  }
}
