<template>
    <!-- Countdown Section -->
    <section>
        <div class="text-center">
      <!-- Date Box -->
      <div class="date-box">
        February 15, 2026 | 9:00 AM - Gainesville (FL)
      </div>
    </div>
      <div class="text-center py-5">
        Begins in...
      </div>
      <div class="mt--8 gap-8 md:gap-16 text-center text-2xl relative top-[60px]">
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
  background: rgba(89, 145, 218, 0.822); /* Transparent background */
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff; /* Match your existing green color */
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px); /* Slight blur effect */
}

  .countdown-item {
    position: relative; /* For positioning the number absolutely */
    display: inline-block; /* Keep items in a row */
    margin: 0 15px; /* Adjust spacing between items */
  }
  
  .number {
    color: rgba(185, 83, 24, 0.781);
    font-size: 1.5em; /* Adjust number size as needed */
    position: absolute;
    top: -1em; /* Position above the label */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    white-space: nowrap; /* Prevent wrapping */
    font-weight: bold;
  }
  
  .label {
    display: block; /* Make the label take up its own line */
    text-align: center; /* Center the label */
    font-size: 1em; /* Adjust number size as needed */
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        deadline: new Date('2026-02-15T00:00:00Z'),
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
  