<template>
  <div>
 
    <GrantTitle />
    <GrantIntroduction />
    <GuidelinesGrant />
    <section class="bg-gradient-to-br from-gray-100 to-quaternary/20 border-b border-gray-300">
      <PreviousProposalIntro />
      <VCard
        class="container mx-auto px-12 py-5 bg-white text-gray-900 shadow-md rounded-lg mb-8"
      >
        <ProposalDataTable :items="ProposalData" />
      </VCard>
      <GrantCitation />
    </section> 
    <GrantArchive />
    <section class="bg-gradient-to-br from-gray-100 to-quinary/30 border-t border-b border-gray-300">
      <GrantGuatemala />
      <GrantButton />
      <GrantGuatemalaSlider />
    </section>

  </div>
</template>

<script setup lang="ts">
import GrantArchive from '~/components/Grants/GrantArchive.vue'
import GrantButton from '~/components/Grants/GrantButton.vue'
import GrantCitation from '~/components/Grants/GrantCitation.vue'
import GrantGuatemala from '~/components/Grants/GrantGuatemala.vue'
import GrantGuatemalaSlider from '~/components/Grants/GrantGuatemalaSlider.vue'
import GrantIntroduction from '~/components/Grants/GrantIntroduction.vue'
import GrantTitle from '~/components/Grants/GrantTitle.vue'
import GuidelinesGrant from '~/components/Grants/GuidelinesGrant.vue'
import PreviousProposalIntro from '~/components/Proposal/PreviousProposalIntro.vue'
import ProposalData from '~/components/Proposal/ProposalData'
</script>
