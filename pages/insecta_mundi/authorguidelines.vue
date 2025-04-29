<template>
  <div>
    <InsectaMundiAuthorGuide />
    <section class="bg-tertiary/30 border-t border-b border-quaternary">
    <InsectaMundiPubRequirement />
</section>
    <section class="bg-secondary/30 border-b border-primary">
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
