<template>
    <section>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-700" :class="{ 'italic': item.includes('*') }">{{ item }}</p>
    </section>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    item: String
  });
  </script>
  