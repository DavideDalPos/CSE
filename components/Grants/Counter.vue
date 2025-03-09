<template>
    <!-- Countdown Section -->
    <section>
      <div class="text-center">
        <h3 class="text-3xl">Next Deadline:</h3>
      </div>
      <div class="mt-4 font-bold text-lg text-center">
        <h2 class="text-5xl" style="color: #2E8B57;">July 15, 2025</h2>
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
  .countdown-item {
    position: relative; /* For positioning the number absolutely */
    display: inline-block; /* Keep items in a row */
    margin: 0 15px; /* Adjust spacing between items */
  }
  
  .number {
    color: rgb(145, 40, 40);
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
  