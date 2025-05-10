<script setup>
import AboutData from '@/components/About/AboutData.js';
import { computed } from 'vue';

const { officers, insectamundiTeam, boardMembers, grantCommittee } = AboutData;

const groupedMembers = computed(() => {
  return boardMembers.reduce((groups, member) => {
    if (!groups[member.period]) {
      groups[member.period] = [];
    }
    groups[member.period].push(member);
    return groups;
  }, {});
});


</script>


<template>
  <section class="bg-gradient-to-br from-gray-100 to-primary/30 py-12 border-t border-b border-quinary px-6 sm:px-12 lg:px-24 font-serif">
    <div class="container mx-auto space-y-12">

      <!-- Officers Section -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Officers</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="member in officers"
            :key="member.name"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex items-center gap-6"
          >
            <div class="flex-shrink-0">
              <img
                v-if="member.imageUrl"
                :src="member.imageUrl"
                :alt="`Image of ${member.name}`"
                class="w-20 h-20 object-cover rounded-full"
              />
              <div
                v-else
                class="w-20 h-20 rounded-full bg-gray-300 text-white flex items-center justify-center text-xl font-bold"
              >
                {{ member.name.split(' ').map(n => n[0]).join('') }}
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">
  <a
    v-if="member.profileUrl"
    :href="member.profileUrl"
    class="text-senary hover:underline hover:text-senary/60"
    target="_blank"
  >
    {{ member.name }}
  </a>
  <span v-else>
    {{ member.name }}
  </span>
</h4>
              <p class="text-sm text-gray-600">
                <i>{{ member.role }}</i> ({{ member.period }})
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <!-- Board Members -->
      <div class="border-t border-primary">
  <h2 class="text-3xl font-bold text-gray-800 mb-6 mt-8">Current Board Members</h2>
  <div v-for="(members, period) in groupedMembers" :key="period" class="mb-10">
    <h3 class="text-xl font-bold text-gray-700 mb-4">{{ period }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div
  v-for="member in members.slice().sort((a, b) => a.name.localeCompare(b.name))"
  :key="member.name"
  class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex items-center gap-4"
>
  <div class="flex-shrink-0">
    <img
      v-if="member.imageUrl"
      :src="member.imageUrl"
      :alt="`Image of ${member.name}`"
      class="w-20 h-20 object-cover rounded-full"
    />
    <div
      v-else
      class="w-20 h-20 rounded-full bg-gray-300 text-white flex items-center justify-center text-xl font-bold"
    >
      {{ member.name.split(' ').map(n => n[0]).join('') }}
    </div>
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="text-lg font-semibold text-gray-900">
  <a
    v-if="member.profileUrl"
    :href="member.profileUrl"
    class="text-senary hover:underline hover:text-senary/60"
    target="_blank"
  >
    {{ member.name }}
  </a>
  <span v-else>
    {{ member.name }}
  </span>
</h4>

    <p class="text-sm text-gray-500 italic mb-1">{{ member.period }}</p>
    <p class="text-sm text-gray-700">{{ member.comment }}</p>
  </div>
</div>

    </div>
  </div>
</div>


      <!-- Insecta Mundi Editorial Team Section -->
      <div id="editorialstaff" class="border-t border-primary">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 mt-8"><i>Insecta Mundi</i> Editorial Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in insectamundiTeam"
            :key="member.name"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex items-center gap-6"
          >
            <div class="flex-shrink-0">
              <img
                v-if="member.imageUrl"
                :src="member.imageUrl"
                :alt="`Image of ${member.name}`"
                class="w-20 h-20 object-cover rounded-full"
              />
              <div
                v-else
                class="w-20 h-20 rounded-full bg-gray-300 text-white flex items-center justify-center text-xl font-bold"
              >
                {{ member.name.split(' ').map(n => n[0]).join('') }}
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">
  <a
    v-if="member.profileUrl"
    :href="member.profileUrl"
    class="text-senary hover:underline hover:text-senary/60"
    target="_blank"
  >
    {{ member.name }}
  </a>
  <span v-else>
    {{ member.name }}
  </span>
</h4>
              <p class="text-sm text-gray-600">
                <i>{{ member.role }}</i> ({{ member.period }})
              </p>
            </div>
          </div>
        </div>
      </div>


<!-- GGE Section -->

      <div id="gge" class="border-t border-primary">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 mt-8">Gift, Grants & Endowment (GGE) Committee</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="member in grantCommittee"
            :key="member.name"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex items-center gap-6"
          >
            <div class="flex-shrink-0">
              <img
                v-if="member.imageUrl"
                :src="member.imageUrl"
                :alt="`Image of ${member.name}`"
                class="w-20 h-20 object-cover rounded-full"
              />
              <div
                v-else
                class="w-20 h-20 rounded-full bg-gray-300 text-white flex items-center justify-center text-xl font-bold"
              >
                {{ member.name.split(' ').map(n => n[0]).join('') }}
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">
  <a
    v-if="member.profileUrl"
    :href="member.profileUrl"
    class="text-senary hover:underline hover:text-senary/60"
    target="_blank"
  >
    {{ member.name }}
  </a>
  <span v-else>
    {{ member.name }}
  </span>
</h4>
              <p class="text-sm text-gray-600">
                <i>{{ member.role }}</i> ({{ member.period }})
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
