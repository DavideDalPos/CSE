<template>
  <section class="pt-10 pb-3 mb-6">
    <!-- Add ID to the container for targeting -->
    <div id="counter" class="text-center">
      <button class="toggle-btn" @click="showCountdown = !showCountdown">
        {{ showCountdown ? "Hide Countdown" : "See Next Deadline" }}
      </button>
    </div>

    <div v-if="showCountdown" class="fade-in">
      <div class="text-center pt-3 pb-4 deadline-text">Next Deadline:</div>
      <div class="text-center">
        <div class="date-box shadow-lg">
          <b><span style="color: #D65A5A;">July 15, 2025</span></b> | 11:59 PM - Eastern Time
        </div>
      </div>
      <div class="mt-6 gap-5 md:gap-16 text-center text-xl relative mb-6 countdown-container">
        <div class="countdown-item" v-for="(value, label) in timeRemaining" :key="label">
          <div class="circle-container">
            <svg class="circle-progress" width="120" height="120" viewBox="0 0 140 140">
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
/* Toggle Button */
.toggle-btn {
  background: rgba(202, 29, 29, 0.85);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.toggle-btn:hover {
  background: rgba(158, 23, 23, 0.85);
  transform: scale(1.05);
}

/* Countdown Container */
.countdown-container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

/* Countdown Items */
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 140px;
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

/* SVG Circle */
.circle-progress {
  /* Remove rotation */
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
  font-size: 2.2em;
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
  background: rgba(89, 145, 218, 0.39);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.5rem;
  color: #000;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
}

/* Fade-in Animation */
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<script>
export default {
  data() {
    return {
      showCountdown: false,
      deadline: new Date('2025-07-15T00:00:00Z'),
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

    // Method to check if hash is #counter and toggle countdown visibility
    checkHash() {
      if (window.location.hash === '#counter') {
        this.showCountdown = true; // Automatically open the countdown
      }
    }
  },
  mounted() {
    // Calculate time remaining initially
    this.calculateTimeRemaining();
    this.timer = setInterval(this.calculateTimeRemaining, 1000);

    // Check for the hash when the component mounts
    this.checkHash();

    // Listen for hash changes (in case the user navigates via hash links)
    window.addEventListener('hashchange', this.checkHash);
  },
  beforeDestroy() {
    // Clean up the timer and hashchange listener when component is destroyed
    clearInterval(this.timer);
    window.removeEventListener('hashchange', this.checkHash);
  },
};
</script>
