<!-- Phone / tablet menu: full-screen panel under the header. Menu entries come from LayoutHeader.vue -->
<template>
  <div class="flex items-center gap-1 lg:hidden">
    <button
      type="button"
      class="p-2 rounded-lg text-ink hover:bg-paper"
      aria-label="Search the website"
      @click="searchOpen = true"
    >
      <svg
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="7"
        />
        <path
          stroke-linecap="round"
          d="m20 20-3.5-3.5"
        />
      </svg>
    </button>
    <button
      type="button"
      class="p-2 rounded-lg text-ink hover:bg-paper"
      aria-controls="mobile-menu"
      :aria-expanded="isOpen"
      :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      @click="isOpen = !isOpen"
    >
      <svg
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path
          v-if="isOpen"
          d="M6 6l12 12M18 6 6 18"
        />
        <path
          v-else
          d="M4 7h16M4 12h16M4 17h16"
        />
      </svg>
    </button>
  </div>

  <!-- Teleported: the header's blur effect would otherwise trap this fixed panel -->
  <Teleport to="body">
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="isOpen"
      id="mobile-menu"
      class="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink text-white overflow-y-auto lg:hidden"
    >
      <nav
        class="container mx-auto px-6 py-6"
        aria-label="Main"
      >
        <ul class="divide-y divide-white/10">
          <li
            v-for="item in menu"
            :key="item.label"
          >
            <template v-if="item.submenu">
              <button
                type="button"
                class="w-full flex items-center justify-between py-4 font-serif text-2xl text-left"
                :class="isActive(item) ? 'text-quaternary' : ''"
                :aria-expanded="openItem === item.label"
                @click="openItem = openItem === item.label ? null : item.label"
              >
                {{ item.label }}
                <svg
                  class="w-5 h-5 transition-transform"
                  :class="openItem === item.label ? 'rotate-180' : ''"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <ul
                v-show="openItem === item.label"
                class="pb-4 -mt-1 space-y-1"
              >
                <li
                  v-for="sub in item.submenu"
                  :key="sub.label"
                >
                  <NuxtLink
                    :to="sub.link"
                    class="block rounded-lg px-3 py-2 text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    {{ sub.label }}
                    <span
                      v-if="sub.note"
                      class="block text-xs text-white/50"
                      >{{ sub.note }}</span
                    >
                  </NuxtLink>
                </li>
              </ul>
            </template>
            <NuxtLink
              v-else
              :to="item.link"
              class="block py-4 font-serif text-2xl"
              :class="route.path === item.link ? 'text-quaternary' : ''"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          to="/membership"
          class="mt-8 flex items-center justify-center w-full px-5 py-3 rounded-full bg-quaternary text-white font-semibold hover:bg-senary"
        >
          Join the CSE
        </NuxtLink>
        <p class="mt-6 text-center text-sm text-white/50">
          <a
            href="mailto:insectamundi@gmail.com"
            class="hover:text-white"
            >insectamundi@gmail.com</a
          >
        </p>
      </nav>
    </div>
  </Transition>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

defineProps({
  menu: { type: Array, default: () => [] }
})

const route = useRoute()
const isOpen = ref(false)
const openItem = ref(null)
const searchOpen = useState('site-search-open', () => false)

function isActive(item) {
  return [item.base, ...(item.bases || [])].some((b) => b && route.path.startsWith(b))
}

// Close on navigation, lock page scroll while open
watch(() => route.fullPath, () => (isOpen.value = false))
watch(isOpen, (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
  if (v) openItem.value = null
})
const onKey = (e) => e.key === 'Escape' && (isOpen.value = false)
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
})
</script>
