<script setup lang="ts">
import ProposalData from '~/components/Proposal/ProposalData';
import ProposalDataTable from '~/components/Proposal/ProposalDataTable.vue';

</script>

<template>
  <VCard class="m-8">
    <ProposalDataTable :items="ProposalData" />
  </VCard>
</template>