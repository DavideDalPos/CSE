<!-- Membership & donations page. Fees, PayPal buttons and lifetime members: data/membership.js -->
<template>
  <div>
    <!-- Header -->
    <header class="relative isolate overflow-hidden bg-ink text-white">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,#2f3d42_0%,#1f2a2e_55%,#151d20_100%)]" />
      <img
        src="/images/web/hero-plate.webp"
        alt=""
        aria-hidden="true"
        class="hidden md:block absolute right-0 top-0 h-full w-auto opacity-15 invert mix-blend-screen pointer-events-none select-none"
      />
      <div class="relative container mx-auto px-6 pt-12 pb-8 lg:pt-16">
        <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">Support the CSE</p>
        <h1 class="mt-3 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
          {{ focus === 'donate' ? 'Support systematic entomology' : 'Become a member' }}
        </h1>
        <p class="mt-4 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl">
          Members and donors keep <i>Insecta Mundi</i> free to read, fund travel grants to the Florida State Collection of Arthropods and make our
          annual conference possible.
        </p>

        <dl class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <div class="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <dt class="text-[0.68rem] uppercase tracking-[0.14em] text-white/60">Membership</dt>
            <dd class="mt-0.5 font-serif text-lg font-semibold">${{ m.fee }} a year</dd>
          </div>
          <div class="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <dt class="text-[0.68rem] uppercase tracking-[0.14em] text-white/60">Members publish</dt>
            <dd class="mt-0.5 font-serif text-lg font-semibold">No page charges</dd>
          </div>
          <div class="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <dt class="text-[0.68rem] uppercase tracking-[0.14em] text-white/60">Donations</dt>
            <dd class="mt-0.5 font-serif text-lg font-semibold">Tax-deductible</dd>
          </div>
        </dl>

        <nav
          class="mt-8 -mx-1 flex gap-1 overflow-x-auto whitespace-nowrap text-sm"
          aria-label="On this page"
        >
          <a
            v-for="s in sections"
            :key="s.id"
            :href="`#${s.id}`"
            class="px-3.5 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/10"
            >{{ s.label }}</a
          >
        </nav>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12 flex flex-col gap-20">
      <!-- ============ Membership ============ -->
      <section
        id="membership"
        class="scroll-mt-24 grid lg:grid-cols-12 gap-10"
      >
        <div class="lg:col-span-7">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Membership</p>
          <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Join or renew</h2>
          <p class="im-text mt-4">
            Membership of the Center for Systematic Entomology directly supports research and publishing in arthropod systematics, including the
            journal <i>Insecta Mundi</i>. The annual fee is <b class="text-ink">${{ m.fee }}</b>, for individuals and institutions alike.
          </p>

          <ul class="mt-6 grid sm:grid-cols-3 gap-3">
            <li
              v-for="b in benefits"
              :key="b.title"
              class="rounded-xl border border-rule bg-paper p-4"
            >
              <span
                class="grid place-items-center w-9 h-9 rounded-full bg-quaternary/20 text-senary text-lg"
                aria-hidden="true"
                >{{ b.icon }}</span
              >
              <p class="mt-3 font-semibold text-ink leading-snug">{{ b.title }}</p>
              <p class="mt-1 text-sm text-ink-soft leading-snug">{{ b.text }}</p>
            </li>
          </ul>

          <div class="mt-8 rounded-xl border border-rule bg-white p-5">
            <h3 class="font-serif text-lg font-semibold text-ink">Prefer to pay by check?</h3>
            <p class="mt-1 text-sm text-ink-soft">
              Download the
              <a
                :href="m.form"
                target="_blank"
                rel="noopener"
                class="text-senary font-semibold hover:underline"
                >membership form (PDF)</a
              >
              and mail it with your payment to:
            </p>
            <address class="mt-2 not-italic text-sm text-ink leading-relaxed">
              <template
                v-for="(line, i) in m.address"
                :key="i"
                >{{ line }}<br
              /></template>
            </address>
          </div>
        </div>

        <!-- Pay online -->
        <aside class="lg:col-span-5">
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
            class="lg:sticky lg:top-20 rounded-2xl bg-ink text-white p-6"
          >
            <p class="text-xs uppercase tracking-[0.16em] font-semibold text-quaternary">Pay online</p>
            <p class="mt-1 font-serif text-3xl font-semibold">
              ${{ m.fee }}<span class="text-base font-sans font-normal text-white/60"> / year</span>
            </p>

            <input
              type="hidden"
              name="cmd"
              value="_s-xclick"
            />
            <input
              type="hidden"
              name="hosted_button_id"
              :value="m.paypalMembershipButton"
            />
            <input
              type="hidden"
              name="currency_code"
              value="USD"
            />

            <input
              type="hidden"
              name="on0"
              value="Select membership year"
            />
            <label class="mt-5 block text-sm text-white/80">
              Membership year
              <select
                v-model="year"
                name="os0"
                class="mt-1 w-full rounded-lg bg-white text-ink px-3 py-2"
              >
                <option
                  v-for="y in yearsDesc"
                  :key="y"
                  :value="`${y} Membership`"
                >
                  {{ y }} membership — ${{ m.fee }}.00
                </option>
              </select>
            </label>

            <input
              type="hidden"
              name="on1"
              value="New member?"
            />
            <fieldset class="mt-4">
              <legend class="text-sm text-white/80">Are you a new member?</legend>
              <div class="mt-1 grid grid-cols-2 gap-2">
                <label
                  v-for="o in ['yes', 'no']"
                  :key="o"
                  class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm"
                  :class="newMember === o ? 'border-quaternary bg-quaternary/15 text-white' : 'border-white/20 text-white/75'"
                >
                  <input
                    v-model="newMember"
                    type="radio"
                    name="os1"
                    :value="o"
                    class="sr-only"
                  />
                  {{ o === 'yes' ? 'Yes, joining' : 'No, renewing' }}
                </label>
              </div>
            </fieldset>

            <input
              type="hidden"
              name="on2"
              value="Optional invoice # or comments"
            />
            <label class="mt-4 block text-sm text-white/80">
              Invoice number or comments <span class="text-white/50">(optional)</span>
              <input
                type="text"
                name="os2"
                maxlength="60"
                class="mt-1 w-full rounded-lg bg-white text-ink px-3 py-2"
              />
            </label>

            <button
              type="submit"
              class="mt-6 w-full px-4 py-3 rounded-full bg-quaternary text-white font-semibold hover:bg-senary transition-colors"
            >
              Continue to PayPal
            </button>
            <p class="mt-2 text-center text-xs text-white/55">Pay with a PayPal account or a credit/debit card.</p>
          </form>
        </aside>
      </section>

      <!-- ============ Donations ============ -->
      <section
        id="donate"
        :class="focus === 'donate' ? 'order-first' : ''"
        class="scroll-mt-24 rounded-2xl bg-paper border border-rule p-6 sm:p-10 grid lg:grid-cols-12 gap-8"
      >
        <div class="lg:col-span-7">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Donations</p>
          <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Every gift makes a difference</h2>
          <p class="im-text mt-4">
            Donations fund research, publishing and outreach in systematic entomology. All donations are tax-deductible and go directly to our
            mission.
          </p>
          <p class="mt-4 text-sm text-ink-soft">
            You can also mail a check to the address on the right. For other payment methods, write to
            <a
              :href="`mailto:${m.contact}`"
              class="text-senary hover:underline"
              >{{ m.contact }}</a
            >.
          </p>
        </div>
        <div class="lg:col-span-5 rounded-xl bg-white border border-rule p-5 self-start">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              :value="m.paypalDonateButton"
            />
            <button
              type="submit"
              class="w-full px-4 py-3 rounded-full bg-ink text-white font-semibold hover:bg-senary transition-colors"
            >
              Donate with PayPal
            </button>
          </form>
          <p class="mt-4 text-xs uppercase tracking-wider text-ink-soft">Or by mail</p>
          <address class="mt-1 not-italic text-sm text-ink leading-relaxed">
            <template
              v-for="(line, i) in m.address"
              :key="i"
              >{{ line }}<br
            /></template>
          </address>
        </div>
      </section>

      <!-- ============ Lifetime members ============ -->
      <section
        id="lifetime"
        class="scroll-mt-24"
      >
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Honorary</p>
        <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Lifetime members</h2>
        <p class="mt-2 text-ink-soft">Awarded for outstanding contributions to entomology and to the Center.</p>
        <ul class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <li
            v-for="p in lifetime"
            :key="p.name"
            class="rounded-xl border border-rule bg-white p-5 text-center"
          >
            <img
              :src="p.image"
              :alt="p.name"
              loading="lazy"
              class="mx-auto w-28 h-28 rounded-full object-cover shadow-md"
            />
            <p class="mt-4 font-serif text-lg font-semibold text-ink">
              {{ p.name
              }}<span
                v-if="p.deceased"
                class="ml-1 text-ink-soft"
                title="Deceased"
                >†</span
              >
            </p>
            <p class="text-sm text-ink-soft">Since {{ p.since }}</p>
            <a
              v-if="p.award"
              :href="p.award"
              target="_blank"
              rel="noopener"
              class="mt-3 inline-block text-xs font-semibold text-senary hover:underline"
              >View the award ↗</a
            >
          </li>
        </ul>
      </section>
    </div>

    <!-- Legal statement -->
    <section class="border-t border-rule bg-paper">
      <div class="container mx-auto px-6 py-6 text-xs text-ink-soft leading-relaxed text-center space-y-1">
        <p
          v-for="(l, i) in m.registration"
          :key="i"
        >
          {{ l }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import m from '~/data/membership'

const props = defineProps({
  focus: { type: String, default: 'membership' } // 'membership' | 'donate'
})

const sections = [
  { id: 'membership', label: 'Become a member' },
  { id: 'donate', label: 'Donate' },
  { id: 'lifetime', label: 'Lifetime members' }
]

const benefits = [
  { icon: '✎', title: 'No page charges', text: 'Publish in Insecta Mundi without page charges.' },
  { icon: '✉', title: 'New articles by email', text: 'Regular notifications with direct links to new publications.' },
  { icon: '✈', title: 'Travel grants', text: 'Only members can apply for Peck Fund grants to visit the FSCA.' }
]

// Pre-select the current year when PayPal offers it
const yearsDesc = [...m.paypalYears].sort((a, b) => b - a)
const thisYear = new Date().getFullYear()
const year = ref(`${m.paypalYears.includes(thisYear) ? thisYear : yearsDesc[0]} Membership`)
const newMember = ref('no')

const lifetime = computed(() => [...m.lifetimeMembers].sort((a, b) => new Date(b.since) - new Date(a.since)))

useHead({ title: props.focus === 'donate' ? 'Donate' : 'Membership & donations' })
</script>
