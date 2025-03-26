<template>
  <!-- Countdown Section -->
  <section class="pt-3 pb-3">
    <div class="text-center pt-3 pb-4 deadline-text">
      Next Deadline:
    </div>
    <div class="text-center top-[30px]">
      <!-- Date Box -->
      <div class="date-box shadow-lg">
        <b> <span style="color: #D65A5A;">July 15, 2025</span></b> | 11:59 PM - Eastern Time 
      </div>
    </div>
    <div class="mt--8 gap-5 md:gap-16 text-center text-xl relative top-[40px] mb-6">
      <div class="countdown-item">
        <span class="number green-number">{{ daysRemaining }}</span>
        <span class="label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="number green-number">{{ hoursRemaining }}</span>
        <span class="label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="number green-number">{{ minutesRemaining }}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="number green-number">{{ secondsRemaining }}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transparent Box for Date */
.date-box {
  display: inline-block;
  background: rgba(89, 145, 218, 0.39); /* Transparent background */
  padding: 12px 24px; /* Increased padding */
  border-radius: 15px; /* Slightly rounded corners */
  font-size: 1.2rem; /* Larger font size for content */
  color: #000000; /* Match your existing green color */
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px); /* Slight blur effect */
}

.deadline-text {
  font-size: 1.5rem; /* Larger font size for the 'Next Deadline' text */
  font-weight:; /* Bold text */
  color: #000; /* Change to black or your preferred color */
}

.countdown-item {
  position: relative; /* For positioning the number absolutely */
  display: inline-block; /* Keep items in a row */
  margin: 0 15px; /* Adjust spacing between items */
}

.number {
  color: rgba(236, 31, 31, 0.781);
  font-size: 1.7em; /* Larger number size */
  position: realtive;
  top: 100px; /* Position above the label */
  left: 30px;
  transform: translateX(-50%); /* Center horizontally */
  white-space: nowrap; /* Prevent wrapping */
  font-weight: bold;
}

.label {
  display: block; /* Make the label take up its own line */
  text-align:; /* Center the label */
  font-size: 1.2em; /* Larger font size for the label */
  margin-top: 5px;
}
</style>


<script>
export default {
  data() {
    return {
      deadline: new Date('2025-07-15T00:00:00Z'),
      timer: null,
      timeRemaining: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    };
  },
  computed: {
    daysRemaining() {
      return this.timeRemaining.days;
    },
    hoursRemaining() {
      return this.timeRemaining.hours;
    },
    minutesRemaining() {
      return this.timeRemaining.minutes;
    },
    secondsRemaining() {
      return this.timeRemaining.seconds;
    },
  },
  methods: {
    calculateTimeRemaining() {
      const now = new Date();
      const timeDiff = this.deadline - now;

      if (timeDiff <= 0) {
        clearInterval(this.timer);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      this.timeRemaining = { days, hours, minutes, seconds };
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
