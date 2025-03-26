<template>
    <div class="flex items-center justify-center h-[10vh]">
      <div class="flex gap-4">
        <NuxtLink 
          to="/howtoapply" 
          class="bg-green-transparent text-white px-4 py-2 no-underline text-lg  shadow-lg hover:bg-green-700 transition"
        >
          How to Apply
        </NuxtLink>
        
        <NuxtLink 
          to="/proposal" 
          class="bg-green-transparent text-white px-4 py-2 no-underline text-lg shadow-lg hover:bg-green-700 transition"
          >
          Previous proposal
        </NuxtLink>
      </div>
    </div>
  </template>

<style scoped>
  .bg-green-transparent {
    background:  rgba(88, 145, 218, 0.39);
    color: #000000; /* Match your existing green color */
  }
</style>
  