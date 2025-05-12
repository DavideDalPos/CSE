<template>
  <h1 class="text-4xl font-extrabold text-gray-800 mb-2 mt-5">Insecta Mundi</h1>
  <h2 class="text-xl font-medium text-gray-500 -mt-2 mb-4">Our Journal</h2>

  <p class="text-base text-gray-700 mb-6">
    <strong>Insecta Mundi</strong> is our flagship peer-reviewed journal, dedicated to the world non-marine arthropod systematics. 
    Check below for our most recent publications and explore the full archive.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
    <!-- V-Card 1 -->
    <div class="border border-gray-300 rounded-xl p-4 shadow hover:shadow-lg transition bg-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-1">Latest Publications</h3>
      <p class="text-sm text-gray-600 mb-4">
        Stay updated with our newest peer-reviewed articles
      </p>
      <NuxtLink href="/insecta_mundi/current" 
      class="inline-block bg-quaternary/90 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-secondary-dark transition">
        View Latest Issues
      </NuxtLink>
    </div>

    <!-- V-Card 2 -->
    <div class="border border-gray-300 rounded-xl p-4 shadow hover:shadow-lg transition bg-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-1">Explore the Archive</h3>
      <p class="text-sm text-gray-600 mb-4">
        Check our full list of publicationse and browse by author, taxon, or keywords
      </p>
      <NuxtLink href="/insecta_mundi/current" 
      class="inline-block bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-secondary-dark transition">
        Browse Archive
      </NuxtLink>
    </div>
  </div>
</template>


  