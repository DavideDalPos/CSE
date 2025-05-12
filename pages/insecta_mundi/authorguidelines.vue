<template>
  <div>
    <InsectaMundiAuthorGuide />
    <section class="bg-gradient-to-br from-gray-100 to-tertiary/30 border-t border-b border-quaternary">
    <InsectaMundiPubRequirement />
</section>
    <section class="bg-gradient-to-br from-gray-100 to-secondary/30 border-b border-primary">
      <InsectaMundiChecklist />
    </section>
  </div>
  <InsectaMundiBottomButtons />
</template>

<script setup lang="ts">
import InsectaMundiAuthorGuide from '~/components/InsectaMundi/InsectaMundiAuthorGuide.vue'
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue'
import InsectaMundiChecklist from '~/components/InsectaMundi/InsectaMundiChecklist.vue'
import InsectaMundiPubRequirement from '~/components/InsectaMundi/InsectaMundiPubRequirement.vue'
</script>
