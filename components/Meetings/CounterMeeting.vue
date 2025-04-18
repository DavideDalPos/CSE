<template>
  <section id="datemeeting" class=" pt-10 pb-3">
    <div class="fade-in">
      <div class="text-center ">
        <div class="bg-secondary border border-primary date-box shadow-lg" v-if="timeRemaining.Days > 0 || timeRemaining.Hours > 0 || timeRemaining.Minutes > 0 || timeRemaining.Seconds > 0">
          <b><span class="text-black-500">February 15, 2026</span></b> | 09:00 AM - Gainesville
        </div>
        <!-- "Coming Soon" Section -->
        <div v-else class="coming-soon text-center">
          <div class="text-primary text-4xl font-semibold">Coming Soon!</div>
          <div class="text-xl py-5">Stay tuned for updates!</div>
        </div>
      </div>
      <div class="text-center text-2xl pt-3 pb-4 deadline-text" v-if="timeRemaining.Days > 0 || timeRemaining.Hours > 0 || timeRemaining.Minutes > 0 || timeRemaining.Seconds > 0">
        Begins in...
      </div>
      <!-- Show countdown if timeRemaining is greater than zero -->
      <div v-if="timeRemaining.Days > 0 || timeRemaining.Hours > 0 || timeRemaining.Minutes > 0 || timeRemaining.Seconds > 0" class="mt-6 gap-5 md:gap-16 text-center text-xl relative mb-6 countdown-container">
        <div class="countdown-item" v-for="(value, label) in timeRemaining" :key="label">
          <div class="circle-container">
            <svg class="circle-progress" width="90" height="90" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="60" class="bg-circle"></circle>
              <circle cx="70" cy="70" r="60" class="progress"
                :stroke-dasharray="376.99"
                :stroke-dashoffset="getProgress(value, label)">
              </circle>
              <text x="70" y="75" class="number">{{ value }}</text>
            </svg>
          </div>
          <span class="label">{{ label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Countdown Container */
.countdown-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Countdown Items */
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 110px;
  height: 140px;
}

/* SVG Circle Wrapper */
.circle-container {
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))
}

/* Background Circle */
.bg-circle {
  fill: none;
  stroke: rgba(139, 34, 60, 0.2);
  stroke-width: 5;
  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.2));
}

/* Progress Circle */
.progress {
  fill: none;
  stroke-width: 7;
  stroke:  rgba(211, 129, 53, 0.85);
  stroke-linecap: round;
  transition: stroke-dashoffset 1s linear;
}

/* Number Inside the Circle */
.number {
  font-size: 2.0em;
  font-weight: bold;
  fill: rgb(54, 90, 44);
  text-anchor: middle;
  dominant-baseline: middle;
  transform: rotate(0deg); /* Ensure number stays upright */
}

/* Label Below the Circle */
.label {
  font-size: 1.2em;
  margin-top: 10px;
  text-align: center;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.3));
}

/* Date Box */
.date-box {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.5rem;
  color: #000;
  backdrop-filter: blur(4px);
  margin-bottom: 50px; /* Adjust this value as needed */
}

/* Fade-in Animation */
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Coming Soon Styling */
.coming-soon .text-4xl {
  font-size: 3rem;
  font-weight: bold;
}

.coming-soon .text-xl {
  color: rgba(0, 0, 0, 0.7);
}

/* Adjust "Begins in..." positioning */
.deadline-text {
  padding-top: 0.5rem; /* Reduced padding */
  padding-bottom: 0.5rem; /* Reduced padding */
  margin-top: -10px; /* Pull up a little */
  margin-bottom: 10px; /* Space between the text and countdown */
}
</style>

<script>
export default {
  data() {
    return {
      deadline: new Date('2025-02-15T00:00:00Z'), // Update to actual deadline
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
        return;
      }

      this.timeRemaining = {
        Days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        Seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      };
    },

    getProgress(value, label) {
      const maxValues = {
        Days: 30,
        Hours: 24,
        Minutes: 60,
        Seconds: 60,
      };
      return 376.99 - (value / maxValues[label]) * 376.99;
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
