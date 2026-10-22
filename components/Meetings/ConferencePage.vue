
<template>
  <section class="bg-gradient-to-br from-gray-100 to-secondary py-12">
    <div class="max-w-4xl mx-auto text-center px-6 md:px-12">

      <!-- Banner Card -->
      <div class="bg-white p-8 rounded-2xl shadow-xl mb-12">

        <!-- Logo -->
        <img
          src="/images/Logo_CSE.png"
          alt="Center for Systematic Entomology logo"
          class="mx-auto mb-6 w-40 h-40 md:w-56 md:h-56 object-contain"
        />

        <!-- Title -->
        <h1 class="text-4xl font-bold text-gray-800 mb-2">
          CSE 2027 Conference
        </h1>

        <h2 class="text-xl text-gray-600 mb-2">
          January 16, 2027 · Gainesville, FL
        </h2>

        <!-- Countdown / Status -->
        <div class="flex justify-center flex-wrap gap-3 sm:gap-4 mb-6 mt-4">

          <template v-if="countdownDays !== ''">
            <div class="flex flex-col items-center bg-gray-100 rounded-full w-[70px] h-[70px] sm:w-20 sm:h-20 justify-center shadow">
              <span class="text-quaternary font-bold text-xl">
                {{ countdownDays }}
              </span>
              <span class="text-gray-500 text-sm">days</span>
            </div>

            <div class="flex flex-col items-center bg-gray-100 rounded-full w-[70px] h-[70px] sm:w-20 sm:h-20 justify-center shadow">
              <span class="text-quaternary font-bold text-xl">
                {{ countdownHours }}
              </span>
              <span class="text-gray-500 text-sm">hours</span>
            </div>

            <div class="flex flex-col items-center bg-gray-100 rounded-full w-[70px] h-[70px] sm:w-20 sm:h-20 justify-center shadow">
              <span class="text-quaternary font-bold text-xl">
                {{ countdownMinutes }}
              </span>
              <span class="text-gray-500 text-sm">minutes</span>
            </div>

            <div class="flex flex-col items-center bg-gray-100 rounded-full w-[70px] h-[70px] sm:w-20 sm:h-20 justify-center shadow">
              <span class="text-quaternary font-bold text-xl">
                {{ countdownSeconds }}
              </span>
              <span class="text-gray-500 text-sm">seconds</span>
            </div>
          </template>

          <template v-else>
            <span class="text-quaternary font-bold text-xl">
              {{ statusMessage }}
            </span>
          </template>
        </div>

        <!-- Short description -->
        <p class="text-gray-600 leading-relaxed mb-6">
          Join the Center for Systematic Entomology for its 2027 Annual
          Conference at the Florida State Collection of Arthropods in
          Gainesville, Florida. Virtual participation will also be available.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:conference@csentomology.com"
            class="inline-block bg-quaternary text-white py-2 px-5 rounded-md hover:bg-novenary/70 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      <!-- Program Coming Soon -->
      <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <div class="text-4xl mb-4" aria-hidden="true">📋</div>

        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Conference Program Coming Soon
        </h2>

        <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          The full conference program, including presentation times,
          speaker information, and the meeting schedule, will be published
          here as soon as it becomes available. Please check back for updates!
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

// Countdown units
const countdownDays = ref('0');
const countdownHours = ref('0');
const countdownMinutes = ref('0');
const countdownSeconds = ref('0');
const statusMessage = ref('');

// Conference times: Eastern Standard Time (UTC-5)
const conferenceStart = new Date('2027-01-16T09:30:00-05:00');
const conferenceEnd = new Date('2027-01-16T18:30:00-05:00');

let timer: ReturnType<typeof setInterval> | undefined;

const updateCountdown = () => {
  const now = new Date();
  const diff = conferenceStart.getTime() - now.getTime();

  if (diff > 0) {
    countdownDays.value = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    ).toString();

    countdownHours.value = Math.floor(
      (diff / (1000 * 60 * 60)) % 24
    ).toString();

    countdownMinutes.value = Math.floor(
      (diff / (1000 * 60)) % 60
    ).toString();

    countdownSeconds.value = Math.floor(
      (diff / 1000) % 60
    ).toString();

    statusMessage.value = '';
  } else {
    countdownDays.value = '';
    countdownHours.value = '';
    countdownMinutes.value = '';
    countdownSeconds.value = '';

    statusMessage.value =
      now <= conferenceEnd
        ? 'Ongoing – Enjoy the Conference!'
        : 'Conference Ended';
  }
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
