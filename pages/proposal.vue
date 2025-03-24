<script setup lang="ts">
import ProposalData from '~/components/Grants/ProposalData';
import ProposalDataTable from '~/components/Grants/ProposalDataTable.vue';

</script>

<template>
  <VCard class="m-8">
    <ProposalDataTable :items="ProposalData" />
  </VCard>
</template>