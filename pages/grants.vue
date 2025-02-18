<template>
  <div class="container mx-auto px-8">
    <div class="prose max-w-full pb-4 text-center">
      <h1 class="text-4xl">Travel grants</h1>
      <h2 class="text-3xl">
        Stewart and Jarmila Peck Collection Enhancement Endowment
      </h2>
      <p>
        In 2021, Stewart and Jarmila Peck established the Stewart and Jarmila
        Peck Collection Enhancement Endowment (the Peck Fund) with the Center
        for Systematic Entomology (CSE). The primary purpose of the endowment is
        to help students and researchers travel to the Florida State Collection
        of Arthropods (FSCA) to work with and ultimately improve the
        collections.
      </p>

       <!-- Countdown Section -->
 <div class="mt-6">
        <h3 class="text-2xl">Next Deadline: July 15, 2025</h3>
        <p class="text-xl font-semibold mt-2">
          ({{ daysRemaining }} days, {{ hoursRemaining }} hours, {{ minutesRemaining }} minutes, {{ secondsRemaining }} seconds remaining)
        </p>
      </div>


      
      
      <div class="mt-6">
        <a 
          href="/howtoapply" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block bg-green-600 text-white text-xl 
          font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 no-underline"
          > How to Apply
        </a>
        </div>
    </div>
  </div>
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

<style scoped>
/* Add any additional styles if needed */
</style>
