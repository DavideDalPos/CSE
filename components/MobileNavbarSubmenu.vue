<template>
  <div>
    <div
      v-for="(item, index) in menu"
      :key="index"
    >
      <MobileNavbarSubmenuItem
        v-if="item.submenu"
        class="bg-setenary"
        :menu="item"
        @close="() => emit('close')"
      />

      <template v-else>
        <NuxtLink
          :to="item.link"
          class="block px-4 py-3 hover:bg-quaternary bg-primary border-b"
          @click="() => emit('close')"
        >
          {{ item.label }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])
</script>
