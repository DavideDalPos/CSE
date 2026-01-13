<script setup lang="ts">
import { onMounted, ref } from 'vue';

const pdfUrl = '/PDF/conference/CSE2026_Program.pdf';

const conferenceStart = new Date('2026-01-17T09:30:00-05:00'); // 9:30 AM ET
const conferenceEnd = new Date('2026-01-17T18:30:00-05:00');   // 6:30 PM ET

const countdown = ref('');

const updateCountdown = () => {
  const now = new Date();

  if (now < conferenceStart) {
    const diff = conferenceStart.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // HTML with colors for numbers vs labels
countdown.value = `
  <span class="text-gray-700 font-bold">Countdown:</span>
  <span class="text-quaternary font-bold">${days}</span> <span class="text-gray-700">days</span>,
  <span class="text-quaternary font-bold">${hours}</span> <span class="text-gray-700">hours</span>,
  <span class="text-quaternary font-bold">${minutes}</span> <span class="text-gray-700">minutes</span>,
  <span class="text-quaternary font-bold">${seconds}</span> <span class="text-gray-700">seconds</span>
`;


  } else if (now >= conferenceStart && now <= conferenceEnd) {
    countdown.value = `<span class="text-green-600 font-bold">Ongoing – Ends at 6:30 PM ET</span>`;
  } else {
    countdown.value = `<span class="text-gray-500 font-semibold">Conference Ended</span>`;
  }
};

onMounted(() => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
</script>

<template>
  <section class="container mx-auto px-12 py-10 -mt-15 -mb-8 font-serif">
    <div class="bg-gray-100 border-l-4 border-primary p-8 rounded-2xl shadow-md mb-10">
      <h2 class="text-4xl font-bold text-novenary mb-4 text-center">
        2026 Center for Systematic Entomology Annual Conference
      </h2>

      <!-- Colored Countdown -->
      <div class="text-center text-xl mb-6 " v-html="countdown"></div>

      <div class="text-lg text-gray-700 leading-relaxed text-center mb-6">
        <p><b>Date:</b> Saturday, January 17, 2026</p>
        <p><b>Time:</b> 9:30 a.m. – 6:30 p.m. ET</p>
        <p><b>Location:</b> Doyle Conner Building, Gainesville, FL</p>
      </div>

      <p class="text-gray-700 text-justify mb-8">
        The 2026 CSE Annual Conference will be held at the 
        <b>Florida State Collection of Arthropods (FSCA)</b>. 
        Attendees will have the opportunity to visit the collection during the meeting.
      </p>

      <!-- Program & Schedule -->
      <h3 class="text-3xl font-bold text-novenary mb-4 text-center">
        Conference Program &amp; Schedule
      </h3>

      <p class="text-gray-700 mb-4 text-justify">
        The full conference schedule, including presentation times, poster sessions,
        and breaks, is available below:
      </p>

      <div class="flex justify-center mb-4">
        <a
          :href="pdfUrl"
          target="_blank"
          class="inline-block bg-primary text-white py-1 px-3 rounded-md hover:bg-primary/70 transition shadow-md"
        >
          Download the Full Conference Program (PDF)
        </a>
      </div>

      <div class="mx-auto w-full max-w-4xl h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-xl border-2 border-primary mb-8">
        <client-only>
          <iframe :src="pdfUrl" class="w-full h-full" frameborder="0"></iframe>
        </client-only>
      </div>

      <h4 class="text-2xl font-semibold text-gray-800 mb-3">
        Logistics &amp; Additional Information
      </h4>

      <p class="text-gray-700 mb-4 text-justify">
        The meeting is free to attend. Lunch will be provided for in-person participants.
        Virtual attendance is available via Zoom (link provided to registered attendees).
      </p>

      <p class="text-gray-700 text-justify">
        For questions regarding the meeting, logistics, or virtual access, please contact
        <a
          href="mailto:conference@csentomology.com"
          class="external-link font-semibold hover:underline"
        >
          conference@csentomology.com
        </a>
      </p>
    </div>
  </section>
</template>
