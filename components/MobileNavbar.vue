<template>
  <button
    type="button"
    class="inline-flex items-center z-50 ml-3 text-sm text-primary-content rounded-lg lg:hidden"
    title="Menu"
    aria-controls="mobile-menu"
    :aria-expanded="isMenuVisible"
    @click="toggleMenu"
  >
    <span class="sr-only">Open main menu</span>
    <IconClose
      class="w-6 h-6"
      v-if="isMenuVisible"
    />
    <IconHamburger
      class="w-6 h-6"
      v-else
    />
  </button>

  <AnimationOpacity>
    <div
      v-if="isMenuVisible"
      class="absolute top-full left-0 w-full z-50 bg-white text-base-content block shadow-md lg:hidden"
    >
      <nav class="font-normal container mx-auto">
        <ul class="flex flex-col m-0 p-0 border-t border-base-border">
          <li
            v-for="{ label, link } in menu"
            :key="link"
            class="border-b border-base-border"
          >
            <a
              :href="link"
              class="text-base-content w-full p-4 pt-3 pb-3 block box-border"
              @click="isMenuVisible = false"
            >
              {{ label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </AnimationOpacity>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  menu: {
    type: Array,
    default: []
  }
})

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>
