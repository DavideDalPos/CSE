<template>
  <section
    id="meetingarchive"
    class="scroll-mt-28 container mx-auto px-12 py-11 font-serif"
  >
    <!-- Meeting Archive Section -->
    <div>
      <h1 class="text-4xl font-extrabold text-gray-800 mb-2">Conference</h1>
      <h2 class="text-xl font-medium text-gray-500 -mt-2">Archive</h2>
      <MeetingsArchive :meetings="meetings" />
    </div>
  </section>
</template>

<script setup>
import { meetings } from './MeetingArchiveData.js'
</script>

<style scoped>
/* General Section Styles */

/* Section Title Style */
.section-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  font-weight: bold;
}

/* Make the section titles more prominent */
.archive-section h2 {
  font-size: 2rem;
}

/* Adjust space between sections */
.archive-section + .archive-section {
  margin-top: 50px;
}
</style>
