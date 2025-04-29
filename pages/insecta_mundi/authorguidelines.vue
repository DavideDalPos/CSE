<template>
  <div>
    <InsectaMundiAuthorGuide />
    <InsectaMundiPubRequirement />

    <section class="bg-secondary/30 border-t border-b border-primary">
      <InsectaMundiChecklist />
    </section>
  </div>
  <InsectaMundiBottomButtons />
</template>

<script setup lang="ts">
import InsectaMundiAuthorGuide from '~/components/InsectaMundi/InsectaMundiAuthorGuide.vue'
import InsectaMundiChecklist from '~/components/InsectaMundi/InsectaMundiChecklist.vue'
import InsectaMundiPubRequirement from '~/components/InsectaMundi/InsectaMundiPubRequirement.vue'
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue'
</script>
