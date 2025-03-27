<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <Template v-for="member in members" :key="member.name" :member="member" />
    </div>
  </template>
  
  <script setup>
  import Template from "~/components/BoardStaffTemplate/Template.vue";
  
  defineProps({
    title: String,
    members: Array
  });
  </script>
  