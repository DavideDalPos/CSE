<template>
   <section class="container mx-auto px-8 py-0 -mt-9">
      <div class="flex gap-3">
        <NuxtLink 
          to="/howtoapply" 
          class="bg-green-transparent text-black px-4 py-2 no-underline text-lg  shadow-lg hover:bg-green-700 transition"
        >
          Guidelines
        </NuxtLink>
        
        <NuxtLink 
          to="/proposal" 
          class="bg-green-transparent text-black px-4 py-2 no-underline text-lg shadow-lg hover:bg-green-700 transition"
          >
          Archive
        </NuxtLink>
      </div>
    </section>
  </template>

<style scoped>
  .bg-green-transparent {
    background: rgba(34, 139, 34, 0.85); /* Green background with transparency */
    color: #ffffff; /* White text for better contrast */
    padding: 10px 20px; /* Padding for better button shape */
    border-radius: 2px; /* Slightly rounded corners */
    font-size: 18px; /* A comfortable font size */
    cursor: pointer; /* Makes the button look clickable */
    transition: background 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  }

  .bg-green-transparent:hover {
    background: rgba(34, 139, 34, 0.8); /* Darker green background on hover */
    transform: translateY(-2px); /* Slight lift effect */
  }
</style>


  