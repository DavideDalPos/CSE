<script setup>
import { formerBoardMembers } from './AboutFormerMembersData.js';
const formerMembers = formerBoardMembers;
</script>

<template>
    <section class="bg-white py-12 px-6 sm:px-12 lg:px-24 border-t border-gray-200 font-serif">
      <div class="container mx-auto space-y-12">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Former Board Members</h2>
          <!-- Turn this into a grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              v-for="entry in formerMembers"
              :key="entry.period"
              class="bg-gray-200 border border-senary/20 rounded-xl shadow-lg shadow-sm hover:shadow-lg transition-shadow p-6"
            >
              <h3 class="text-2xl text-quaternary mb-2">{{ entry.period }}</h3>
              <ul class="list-disc list-inside text-gray-700">
                <li v-for="name in entry.members" :key="name">{{ name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </template>
    
    

<style scoped>
/* Optional: Add fade or slide transitions */
</style>
