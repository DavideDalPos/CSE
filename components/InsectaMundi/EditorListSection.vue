<template>
    <section>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ title }}</h2>
      <ul class="list-disc pl-6 space-y-1 text-gray-700">
        <li v-for="(editor, index) in items" :key="index" :class="{'italic': editor.includes('*')}">
          {{ editor }}
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    items: Array
  });
  </script>
  