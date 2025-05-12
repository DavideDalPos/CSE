<template>
  <div class="mb-6 text-center">
    <img
      src="/images/Logo_CSE.png"
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.logo:hover {
  transform: scale(1.05); /* Slight zoom effect */
  opacity: 0.9;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
}
</style>



