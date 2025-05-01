<template>
  <section class="pt-10 pb-3 mb-6">
    <div class="fade-in">
      <div class="text-center text-xl pt-3 pb-4 font-semibold text-gray-700">Next Deadline</div>
      <div class="text-center">
        <div class="inline-block px-6 py-3 rounded-lg text-yellow-900 border 
        border-primary/80 text-2xl bg-primary/30 backdrop-blur-md mt-5 shadow-lg">
          <b><span>July 15, 2025</span> | 11:59 PM - Eastern Time</b>
        </div>
      </div>
      <div class="mt-6 gap-5 md:gap-16 text-center text-xl relative mb-6 countdown-container">
        <div v-for="(value, label) in timeRemaining" :key="label" class="countdown-item">
          <div class="digit-container">
            <div class="digit bg-quaternary/30  border border-quaternary/80
            w-12 h-18 flex justify-center items-center text-primary text-4xl font-bold rounded-lg shadow-md"
             v-for="(digit, index) in getDigits(value)" :key="index">
              <div class="digit-number" :class="{ 'fade-in': index === getDigits(value).length - 1 }">
                {{ digit }}
              </div>
            </div>
          </div>
          <div class="text-[1em] mt-2.5 text-center text-yellow-900">{{ label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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

    getDigits(value) {
      return String(value).padStart(2, '0').split('');
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
/* Global Styles */
body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--color-background);
}

/* Countdown Container */
.countdown-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

/* Countdown Item */
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 120px;
  height: 120px;
  font-family: 'Courier New', monospace;
}

/* Digit Container */
.digit-container {
  display: flex;
  gap: 8px;
}

/* Animation for Digit */
.digit-number {
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

/* Fade-in Animation */
.fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
