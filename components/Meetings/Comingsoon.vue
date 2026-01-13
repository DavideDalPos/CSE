<template>
  <section class="bg-gradient-to-br from-gray-100 to-secondary py-12">
    <div class="max-w-4xl mx-auto text-center px-6 md:px-12">
      
      <!-- Banner Card -->
      <div class="bg-white p-8 rounded-2xl shadow-xl mb-12">
        <!-- Logo -->
        <img
          src="/public/images/Logo_CSE.png"
          alt="CSE Logo"
          class="mx-auto mb-6 w-40 h-40 md:w-56 md:h-56"
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
          </NuxtLink>.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <!-- PDF Download -->
          <a
            href="/PDF/conference/CSE2026_Program.pdf"
            target="_blank"
            class="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/70 transition shadow-lg"
          >
            Download Program (PDF)
          </a>

          <!-- Contact -->
          <a
            href="mailto:conference@csentomology.com"
            class="inline-block bg-quaternary text-white py-2 px-4 rounded-md hover:bg-novenary/70 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      <!-- PDF Preview -->
      <div class="w-full h-[80vh] rounded-xl overflow-hidden shadow-lg border border-gray-300">
        <iframe
          src="/PDF/conference/CSE2026_Program.pdf"
          class="w-full h-full"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>
