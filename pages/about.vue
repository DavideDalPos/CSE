<template>
  <div>
    <AboutIntroduction />
    <AboutBoard />
    <AboutFormerMembers />
  </div>
</template>

<script setup>
import AboutBoard from '~/components/About/AboutBoard.vue'
import AboutFormerMembers from '~/components/About/AboutFormerMembers.vue'
import AboutIntroduction from '~/components/About/AboutIntroduction.vue'

useHead({ title: 'About us' })
</script>
