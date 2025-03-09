<template>
<!-- Countdown Section -->
<section class="container mx-auto px-12 py-12">
          <h3 class="text-2xl">Next Deadline: July 15, 2025</h3>
          <p class="text-xl font-semibold mt-2">
            ({{ daysRemaining }} days, {{ hoursRemaining }} hours, {{ minutesRemaining }} minutes, {{ secondsRemaining }} seconds remaining)
          </p>
</section>
</template>

<script>

export default {
  data() {
    return {
      deadline: new Date('2025-07-15T00:00:00Z'), // Set the next deadline
      timer: null, // Store the interval ID for the countdown timer
      timeRemaining: { days: 0, hours: 0, minutes: 0, seconds: 0 }, // Store time remaining in a structured way
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

      // If the deadline has passed, stop the countdown
      if (timeDiff <= 0) {
        clearInterval(this.timer);
        return;
      }

      // Calculate the remaining time
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Update the time remaining
      this.timeRemaining = { days, hours, minutes, seconds };
    },
  },
  mounted() {
    // Start the countdown when the component is mounted
    this.calculateTimeRemaining();
    this.timer = setInterval(this.calculateTimeRemaining, 1000); // Update every second
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.timer);
  },
};
</script>
