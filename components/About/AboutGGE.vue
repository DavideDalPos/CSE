<script setup>
const memberGGE = [
  {
    name: "Sandor Kelly",
    role: "Chair, FSCA Representative",
    period: "2020-2024",
    imageUrl: "/images/DavideDalPos.jpg",
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ",
  },
  {
    name: "Felipe Soto-Adames",
    role: "CSE Board Member",
    period: "2018-2022",
    imageUrl: "/images/DavideDalPos.jpg",
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ",
  },
  {
    name: "Davide Dal Pos",
    role: "CSE Board Member",
    period: "2019-2023",
    imageUrl: "/images/DavideDalPos.jpg",
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ",
  },
];
</script>


<template>
    <section class="bg-gray-100 py-4 border-t border-b border-gray-300 px-24">
      <div id="GGECommittee" class="container mx-auto px-12 py-5">
      <!-- Outer wrapper with vertical lines -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          
          <!-- Board Members Section -->
          <div>
            <h2 class="text-2xl font-bold mb-4">Gifts, Grants and Endowment (GGE) Committee</h2>
            <div v-for="(member, index) in memberGGE" :key="member.name" class="flex items-center gap-6 mb-6">
              <img :src="member.imageUrl" alt="Image of {{ member.name }}" class="w-24 h-24 object-cover" />
              <div>
                <h3 class="text-xl font-semibold">
                  <a :href="member.profileUrl" class="text-gray-700 hover:underline">{{ member.name }}</a>
                </h3>
                <p class="text-gray-500">{{ member.role }} ({{ member.period }})</p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  

<style scoped>
/* You can add custom styling here */
</style>
