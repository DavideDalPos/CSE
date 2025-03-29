<script setup lang="ts">
import PreviousProposalIntro from '~/components/Proposal/PreviousProposalIntro.vue';
import ProposalData from '~/components/Proposal/ProposalData';
</script>

<template>
  <PreviousProposalIntro />
  <VCard class="m-8">
    <ProposalDataTable :items="ProposalData" />
  </VCard>
</template>