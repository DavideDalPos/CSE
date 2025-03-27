<template>
    <div class="flex items-center gap-6 mb-6">
      <img :src="member.imageUrl" :alt="'Image of ' + member.name" class="w-24 h-24 object-cover" />
      <div>
        <h3 class="text-xl font-semibold">
          <a :href="member.profileUrl" class="text-gray-700 hover:underline">{{ member.name }}</a>
        </h3>
        <p class="text-gray-500">{{ member.role }} ({{ member.period }})</p>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  defineProps({
    member: Object
  });
  </script>

  