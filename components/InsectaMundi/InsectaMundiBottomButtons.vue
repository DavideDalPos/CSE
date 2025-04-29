<template>
    <section class="container mx-auto px-8 py-12 border-t border-gray-200">
      <div class="flex flex-col gap-6 my-8 text-center">
        <h2 class="text-2xl font-bold text-quaternary">Check Out Our Archive & New Publications</h2>
        <p class="text-gray-700 text-lg">
          Explore our list of publications and stay updated with our latest ones!
        </p>
  
        <div class="flex justify-center gap-6 flex-wrap">
          <!-- Archive -->
          <NuxtLink
            href="/insecta_mundi"
            class="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/70 transition duration-200 shadow"
          >
          📰 Visit Our Archive
        </NuxtLink>
  
          <!-- New Publications -->
          <NuxtLink
            href="/insecta_mundi/current_issue"
            class="inline-block px-6 py-3 bg-quaternary/90 text-white rounded-lg hover:bg-tertiary transition duration-200 shadow"
          >
            📢 View New Publications
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  