
<template>
  <section
    id="counter"
    class="bg-gray-50 py-12 sm:py-16 font-serif"
  >
    <div class="fade-in max-w-4xl mx-auto px-5 sm:px-8">
      <div
        class="relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-md"
      >
        <!-- Decorative accent -->
        <div class="h-1.5 bg-[#7ca2a1]"></div>

        <div class="px-6 py-9 sm:px-12 sm:py-12 text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f7a79] mb-3"
          >
            Save the Date
          </p>

          <h2
            class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            CSE Annual Conference 2027
          </h2>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 text-gray-700"
          >
            <div class="flex items-center gap-2">
              <span aria-hidden="true">📅</span>
              <span>Saturday, January 16, 2027</span>
            </div>

            <span
              class="hidden sm:block text-gray-300"
              aria-hidden="true"
            >
              |
            </span>

            <div class="flex items-center gap-2">
              <span aria-hidden="true">🕘</span>
              <span>9:30 AM – 6:30 PM Eastern</span>
            </div>
          </div>

          <p
            class="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 mb-8"
          >
            Join the Center for Systematic Entomology for its annual
            conference in Gainesville, Florida, with virtual participation
            also available.
          </p>

          <NuxtLink
            to="/conference"
            class="inline-flex items-center justify-center gap-2 px-6 py-3
                   bg-[#5f7f7e] text-white font-semibold rounded-lg
                   hover:bg-[#496766] transition-colors duration-200
                   shadow-sm focus:outline-none focus:ring-2
                   focus:ring-[#7ca2a1] focus:ring-offset-2"
          >
            Conference Details
            <span aria-hidden="true">→</span>
          </NuxtLink>

          <p class="mt-5 text-sm text-gray-500">
            Program and additional details coming soon.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: 'Helvetica Neue', sans-serif;
}

.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
  }
}
</style>
