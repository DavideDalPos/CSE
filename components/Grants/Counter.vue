<template>
  <section class="pt-10 pb-3 mb-6">
    <div class="fade-in">
      <div class="text-center pt-3 pb-4 deadline-text">Next Deadline:</div>
      <div class="text-center">
        <div class="date-box">
          <b><span>July 15, 2025</span> | 11:59 PM - Eastern Time</b>
        </div>
      </div>
      <div class="mt-6 gap-5 md:gap-16 text-center text-xl relative mb-6 countdown-container">
        <div v-for="(value, label) in timeRemaining" :key="label" class="countdown-item">
          <div class="digit-container">
            <div class="digit" v-for="(digit, index) in getDigits(value)" :key="index">
              <div class="digit-number" :class="{ 'fade-in': index === getDigits(value).length - 1 }">
                {{ digit }}
              </div>
            </div>
          </div>
          <div class="label">{{ label }}</div>
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

/* Digit Styling */
.digit {
  width: 50px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-primary-content);
  font-size: 2.5rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Animation for Digit */
.digit-number {
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

/* Label Below the Digit */
.label {
  font-size: 1.2rem;
  margin-top: 10px;
  text-align: center;
  color: var(--color-setenary);
}

/* Date Box */
.date-box {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.5rem;
  color: white;
  background-color: var(--color-quinary);
  backdrop-filter: blur(4px);
  margin-top: 20px;
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
