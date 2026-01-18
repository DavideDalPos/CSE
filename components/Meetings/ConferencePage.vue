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
        <h2 class="text-xl text-gray-600 mb-2">
          January 17, 2026 · Gainesville, FL
        </h2>

<!-- Countdown / Status -->
<div class="flex justify-center gap-4 mb-6 mt-2">
  <!-- Show circles only if countdown exists -->
  <template v-if="countdownDays">
    <div class="flex flex-col items-center bg-gray-100 rounded-full w-20 h-20 justify-center shadow">
      <span class="text-quaternary font-bold text-xl">{{ countdownDays }}</span>
      <span class="text-gray-500 text-sm">days</span>
    </div>
    <div class="flex flex-col items-center bg-gray-100 rounded-full w-20 h-20 justify-center shadow">
      <span class="text-quaternary font-bold text-xl">{{ countdownHours }}</span>
      <span class="text-gray-500 text-sm">hours</span>
    </div>
    <div class="flex flex-col items-center bg-gray-100 rounded-full w-20 h-20 justify-center shadow">
      <span class="text-quaternary font-bold text-xl">{{ countdownMinutes }}</span>
      <span class="text-gray-500 text-sm">minutes</span>
    </div>
    <div class="flex flex-col items-center bg-gray-100 rounded-full w-20 h-20 justify-center shadow">
      <span class="text-quaternary font-bold text-xl">{{ countdownSeconds }}</span>
      <span class="text-gray-500 text-sm">seconds</span>
    </div>
  </template>

  <!-- Show status message if during/after conference -->
  <template v-else>
    <span class="text-quaternary font-bold text-xl">{{ statusMessage }}</span>
  </template>
</div>


        <!-- Short description -->
        <p class="text-gray-600 mb-6">
          The 2026 Center for Systematic Entomology Annual Conference will be held
          at the Florida State Collection of Arthropods.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/PDF/conference/CSE2026_Program.pdf"
            target="_blank"
            class="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/70 transition shadow-lg"
          >
            Download Program (PDF)
          </a>
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
        <client-only>
          <iframe
            src="/PDF/conference/CSE2026_Program.pdf"
            class="w-full h-full"
            frameborder="0"
          ></iframe>
        </client-only>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Countdown unit refs
const countdownDays = ref('0');
const countdownHours = ref('0');
const countdownMinutes = ref('0');
const countdownSeconds = ref('0');
const statusMessage = ref(''); // For during/after conference

// Conference start & end times
const conferenceStart = new Date('2026-01-17T09:30:00-05:00'); // ET
const conferenceEnd = new Date('2026-01-17T18:30:00-05:00');

const updateCountdown = () => {
  const now = new Date();

  if (now < conferenceStart) {
    const diff = conferenceStart.getTime() - now.getTime();
    countdownDays.value = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    countdownHours.value = Math.floor((diff / (1000 * 60 * 60)) % 24).toString();
    countdownMinutes.value = Math.floor((diff / (1000 * 60)) % 60).toString();
    countdownSeconds.value = Math.floor((diff / 1000) % 60).toString();
    statusMessage.value = ''; // show countdown circles
  } else if (now >= conferenceStart && now <= conferenceEnd) {
    // During conference
    countdownDays.value = countdownHours.value = countdownMinutes.value = countdownSeconds.value = '';
    statusMessage.value = 'Ongoing – Enjoy the Conference!';
  } else {
    // After conference
    countdownDays.value = countdownHours.value = countdownMinutes.value = countdownSeconds.value = '';
    statusMessage.value = 'Conference Ended';
  }
};

onMounted(() => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
</script>
