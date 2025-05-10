<template>
  <section id="counter" class="pt-16 pb-8 bg-gray-50 font-serif">
    <div class="fade-in max-w-3xl mx-auto text-center">
      <!-- Show button if date is in the future -->
<div
  v-if="timeRemaining.Days > 0 || timeRemaining.Hours > 0 || timeRemaining.Minutes > 0 || timeRemaining.Seconds > 0"
  class="bg-gray-100 border-l-4 border-[#7ca2a1] p-8 rounded-lg max-w-3xl mx-auto shadow-lg transform transition-transform hover:scale-105"
>
  <div class="conference-date text-2xl font-semibold text-senary mb-2">
    📅 February 15, 2026 – 09:00 AM
  </div>
  <div class="text-lg text-[#5f7a79] mb-6">
    Join us in Gainesville, Florida for the annual CSE Conference!
  </div>
  <NuxtLink
    href="/comingsoon"
    target="_blank"
    rel="noopener"
    class="inline-block px-6 py-3 bg-quaternary/90 text-white rounded-lg hover:bg-tertiary transition duration-200 shadow"
  >
    Learn More
  </NuxtLink>
</div>


      <!-- "Coming Soon" Section -->
      <!-- "Coming Soon" Section -->
  <div v-else
 class="bg-gray-100 border-l-4 border-[#7ca2a1] p-8 rounded-lg max-w-3xl mx-auto shadow-lg transform transition-transform hover:scale-105"
>
  <div class="text-3xl font-semibold text-[#7ca2a1] mb-3">
    2026 Conference Date Coming Soon
  </div>
  <div class="text-lg text-[#5f7a79] mb-6">
    We're excited to announce that more details are coming soon. Stay tuned for
    updates!
  </div>
  <div class="text-[#dfa75a] text-sm font-medium italic">
    You won’t want to miss this event!
  </div>
</div>

    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      deadline: new Date('2026-02-15T14:00:00Z'), // 09:00 AM Gainesville (UTC-5) = 14:00 UTC
      timer: null,
      timeRemaining: { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 },
    };
  },
  methods: {
    calculateTimeRemaining() {
      const now = new Date();
      const timeDiff = this.deadline - now;

      if (timeDiff <= 0) {
        clearInterval(this.timer);
        this.timeRemaining = { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
        return;
      }

      this.timeRemaining = {
        Days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        Seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      };
    },
  },
  mounted() {
    this.calculateTimeRemaining();
    this.timer = setInterval(this.calculateTimeRemaining, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
/* Base Section Styles */
section {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f9f9f9;
}

/* Button Styling */
.register-button {
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.register-button:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #a83250, #b64460);
}

/* Fade-in Animation */
.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Wrapper Box for Button */
.register-wrapper {
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  max-width: 600px;
}

/* Date Styling */
.conference-date {
  font-size: 1.375rem;
  margin-bottom: 0.25rem;
}

/* Coming Soon Styling */
/* Coming Soon Styling */
.coming-soon {
  background: linear-gradient(135deg, #fdf2f5, #fce9ee);
  border: 2px solid #f5d0d6;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(139, 34, 60, 0.08);
  max-width: 600px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.coming-soon:hover {
  transform: scale(1.015);
}

.coming-soon .text-4xl {
  font-size: 2.5rem;
  font-weight: 800;
  color: #8b223c;
  margin-bottom: 0.75rem;
}

.coming-soon .text-lg {
  font-size: 1.125rem;
  color: #5c1a2e;
}

</style>

