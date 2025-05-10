<template>
  <section class="text-center font-serif">
    <div class=" bg-gray-200 border-2 border-gray-300 rounded-lg p-5 shadow-lg max-w-md mx-auto">
      <h2 class="text-lg font-serif text-gray-800 mb-2 border-b pb-2 text-center">Next Deadline</h2>
      <div class="text-xl font-serif text-senary mb-5">
        <div>July 15, 2025</div>
     
      <div class="text-lg font-normal text-gray-600 mt-1">
        11:59 PM – Eastern Time
      </div> 
    </div>
      <div class="flex justify-center gap-6 text-center font-mono text-2xl text-gray-800 tracking-widest">
        <div class="flex flex-col items-center">
          <span class="tabular-nums">{{ timeRemaining.Days }}</span>
          <span class="text-sm text-gray-500 mt-1 uppercase">Days</span>
        </div>
        <span class="text-xl text-gray-400">:</span>
        <div class="flex flex-col items-center">
          <span class="tabular-nums">{{ timeRemaining.Hours }}</span>
          <span class="text-sm text-gray-500 mt-1 uppercase">Hours</span>
        </div>
        <span class="text-xl text-gray-400">:</span>
        <div class="flex flex-col items-center">
          <span class="tabular-nums">{{ timeRemaining.Minutes }}</span>
          <span class="text-sm text-gray-500 mt-1 uppercase">Minutes</span>
        </div>
        <span class="text-xl text-gray-400">:</span>
        <div class="flex flex-col items-center">
          <span class="tabular-nums">{{ timeRemaining.Seconds }}</span>
          <span class="text-sm text-gray-500 mt-1 uppercase">Seconds</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      deadline: new Date('2025-07-15T04:00:00Z'), // midnight ET
      timer: null,
      timeRemaining: { Days: '00', Hours: '00', Minutes: '00', Seconds: '00' },
    };
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const diff = this.deadline - now;

      if (diff <= 0) {
        clearInterval(this.timer);
        return;
      }

      this.timeRemaining = {
        Days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        Hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        Minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
        Seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
      };
    },
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
