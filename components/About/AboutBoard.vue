<script setup>
import AboutData from '@/components/About/AboutData.js';

const { officers, insectamundiTeam, boardMembers } = AboutData;
</script>

<template>
  <section class="bg-gray-50 py-12 border-t border-gray-200 px-6 sm:px-12 lg:px-24">
    <div class="container mx-auto space-y-12">

      <!-- Officers Section -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Officers</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h3 class="text-lg font-semibold text-gray-900">
                <a
                  :href="member.profileUrl"
                  class="hover:underline"
                  target="_blank"
                >
                  {{ member.name }}
                </a>
              </h3>
              <p class="text-sm text-gray-600">
                {{ member.role }} ({{ member.period }})
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <!-- Board Members -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Board Members</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="member in boardMembers"
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
              <h3 class="text-lg font-semibold text-gray-900">
                <a
                  :href="member.profileUrl"
                  class="hover:underline"
                  target="_blank"
                >
                  {{ member.name }}
                </a>
              </h3>
              <p class="text-sm text-gray-600">
                ({{ member.period }})
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Insecta Mundi Editorial Team Section -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Insecta Mundi Editorial Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h3 class="text-lg font-semibold text-gray-900">
                <a
                  :href="member.profileUrl"
                  class="hover:underline"
                  target="_blank"
                >
                  {{ member.name }}
                </a>
              </h3>
              <p class="text-sm text-gray-600">
                {{ member.role }} ({{ member.period }})
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
