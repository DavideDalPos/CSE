<script setup>
const boardMembers = [
  {
    name: "Davide Dal Pos",
    role: "President",
    period: "2020-2024", // Added period
    imageUrl: "/images/DavideDalPos.jpg", // Replace with actual image URLs
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ", // Link to the individual's profile page
  },
  {
    name: "John Doe",
    role: "Vice President",
    period: "2018-2022", // Added period
    imageUrl: "/images/DavideDalPos.jpg", // Replace with actual image URLs
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ", // Link to the individual's profile page
  },
  {
    name: "Jane Smith",
    role: "Secretary",
    period: "2019-2023", // Added period
    imageUrl: "/images/DavideDalPos.jpg", // Replace with actual image URLs
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ", // Link to the individual's profile page
  },
];

const executiveMembers = [
  {
    name: "Sam Brown",
    role: "Treasurer",
    period: "2021-2025", // Added period
    imageUrl: "/images/DavideDalPos.jpg", // Replace with actual image URLs
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ", // Link to the individual's profile page
  },
  {
    name: "Emily White",
    role: "Board Member",
    period: "2020-2024", // Added period
    imageUrl: "/images/DavideDalPos.jpg", // Replace with actual image URLs
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ", // Link to the individual's profile page
  },
  {
    name: "James Green",
    role: "Board Member",
    period: "2022-2026", // Added period
    imageUrl: "/images/DavideDalPos.jpg", // Replace with actual image URLs
    profileUrl: "https://scholar.google.com/citations?user=wYj3d_oAAAAJ", // Link to the individual's profile page
  },
];
</script>

<template>
    <section class="bg-gray-100 py-4 border-t border-b border-gray-300 px-24">
      <div class="container mx-auto px-12 py-5">
      <!-- Outer wrapper with vertical lines -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          
          <!-- Board Members Section -->
          <div>
            <h2 class="text-2xl font-bold mb-4">Board Members</h2>
            <div v-for="(member, index) in boardMembers" :key="member.name" class="flex items-center gap-6 mb-6">
              <img :src="member.imageUrl" alt="Image of {{ member.name }}" class="w-24 h-24 object-cover" />
              <div>
                <h3 class="text-xl font-semibold">
                  <a :href="member.profileUrl" class="text-gray-700 hover:underline">{{ member.name }}</a>
                </h3>
                <p class="text-gray-500">{{ member.role }} ({{ member.period }})</p>
              </div>
            </div>
          </div>
  
          <!-- Executive Members Section -->
          <div>
            <h2 class="text-2xl font-bold mb-4">Executive Members</h2>
            <div v-for="(member, index) in executiveMembers" :key="member.name" class="flex items-center gap-6 mb-6">
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
