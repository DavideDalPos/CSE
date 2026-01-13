<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-secondary">
    <div class="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">

      <!-- Logo -->
      <img
        src="/public/images/Logo_CSE.png"
        alt="CSE Logo"
        class="mx-auto mb-6 w-70 h-70"
      />

      <!-- Title -->
      <h1 class="text-4xl font-bold text-gray-800 mb-2">
        CSE 2026 Conference
      </h1>
      <h2 class="text-xl text-gray-600 mb-6">
        January 17, 2026 · Gainesville, FL
      </h2>

      <!-- Short description -->
      <p class="text-gray-600 mb-6">
        The 2026 Center for Systematic Entomology Annual Conference will be held
        at the Florida State Collection of Arthropods.
      </p>

      <!-- Link to meeting page -->
      <p class="text-gray-500 mb-6">
        For full details, schedule, and logistics,
<NuxtLink
  to="/meetings"
  class="text-novenary font-semibold hover:text-novenary/70 hover:underline"
>
  click here
</NuxtLink>

      </p>

      <!-- Program download -->
      <div class="mt-4">
        <a
          href="/PDF/conference/CSE2026_Program.pdf"
          target="_blank"
          class="inline-block w-full bg-primary text-white py-2 rounded-md hover:bg-primary/70 transition shadow-lg"
        >
          Download Conference Program (PDF)
        </a>
      </div>

      <!-- Abstracts download (optional but recommended) -->

      <!-- Contact -->
      <div class="mt-6">
        <a
          href="mailto:conference@csentomology.com"
          class="inline-block w-full bg-quaternary text-white py-2 rounded-md hover:bg-novenary/70 transition shadow-lg"
        >
          Contact Us
        </a>
      </div>

    </div>
  </div>
</template>
