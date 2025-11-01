<template>
  <div class="mb-6 text-center">
    <img
      src="/public/images/Logo_CSE.png"
      alt="Center for Systematic Entomology Logo"
      class="logo mx-auto"
    />
  </div>
</template>

<script setup lang="ts">
// No need for export default, this is handled by `<script setup>`
</script>

<style scoped>
.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05); /* Slight zoom effect */
   /* Stronger shadow on hover */
}
</style>



