<template>
  <div class="mb-8 text-center">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-1">Lifetime Members</h1>
    <h2 class="text-sm font-medium text-gray-500 mb-8">
      Members awarded for their contributions to Entomology and CSE
    </h2>
    
    <ul class="list-none space-y-1">
      <li
        v-for="(member, index) in sortedLifetimeMembers"
        :key="index"
        class="flex items-center justify-start px-4 py-4 border-b border-gray-200 last:border-0"
      >
        <!-- Member's Image -->
        <img :src="member.image" alt="Member Image" class="w-20 h-20 rounded-full mr-6 shadow-md" />
        
        <!-- Member's Details -->
        <div class="flex flex-col text-left">
          <span class="font-bold text-gray-800 text-lg">
            {{ member.name }}
            <span
              v-if="member.deceased"
              class="text-gray-500 text-sm"
              aria-label="Deceased Member"
              title="Deceased Member"
            >
              †
            </span>
          </span>
          <span class="text-gray-600 text-sm">{{ member.yearOfMembership }}</span>

          <!-- PDF Link Box -->
          <div v-if="member.awardPDF" class="mt-2">
            <a
              :href="member.awardPDF"
              target="_blank"
              class="inline-block bg-novenary text-white text-xs py-1 px-3 rounded-md border border-novenary hover:bg-novenary/70 mb-3 shadow-lg"
              title="View Award PDF"
            >
              View Award
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Import the lifetime members data from the JS file
import { lifetimeMembers } from './MembershipLifetimeMembersData.js';

// Sort lifetime members by yearOfMembership in descending order
const sortedLifetimeMembers = lifetimeMembers.sort((a, b) => {
  return new Date(b.yearOfMembership).getTime() - new Date(a.yearOfMembership).getTime();
});

</script>

<style scoped>
/* Optional styling for spacing and alignment */
img {
  object-fit: cover;
}
</style>
