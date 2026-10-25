// Visit counter (GoatCounter). Switched on by setting `goatcounter` in data/site.js.
// Counts every page view, including navigation inside the site. No cookies.
import site from '~/data/site'

export default defineNuxtPlugin(() => {
  if (!site.goatcounter) return
  const endpoint = `https://${site.goatcounter}.goatcounter.com/count`
  const router = useRouter()

  const count = (path) => window.goatcounter?.count?.({ path })

  const s = document.createElement('script')
  s.async = true
  s.src = 'https://gc.zgo.at/count.js'
  s.dataset.goatcounter = endpoint
  s.dataset.goatcounterSettings = JSON.stringify({ no_onload: true })
  s.onload = () => count(router.currentRoute.value.path)
  document.head.appendChild(s)

  router.afterEach((to, from) => {
    if (to.path !== from.path) count(to.path)
  })
})
