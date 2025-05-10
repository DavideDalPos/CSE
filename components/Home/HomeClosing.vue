<template>
  <section class="container mx-auto px-8 py-12 border-t border-gray-200 font-serif">
    <div class="flex flex-col gap-6 my-8 text-center">
      <h2 class="text-2xl font-bold text-quaternary">Want to Join or Get in Touch?</h2>
      <p class="text-gray-700 text-lg">
        We’re always excited to welcome new members, collaborators, and curious minds!
      </p>

      <div class="flex justify-center gap-6 flex-wrap">
        <!-- Contact Us -->
        <NuxtLink
          href="/about"
          class="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/70 transition duration-200 shadow"
        >
          📬 Contact Us
      </NuxtLink>

        <!-- Join Us -->
        <NuxtLink
          href="/membership"
          class="inline-block px-6 py-3 bg-quinary text-white rounded-lg hover:bg-quinary/60 transition duration-200 shadow"
        >
          🤝 Become a Member
      </NuxtLink>

        <!-- Newsletter or Follow Us (optional) -->
        <NuxtLink
          href="/insecta_mundi/journal"
          class="inline-block px-6 py-3 bg-quaternary text-white rounded-lg hover:bg-tertiary transition duration-200 shadow"
        >
          📰 Publish with Us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
