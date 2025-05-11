<template>
    <section id="meetingarchive" class="container mx-auto px-12 py-11 font-serif">
      <!-- Meeting Archive Section -->
      <div>
        <h1 class="text-4xl font-extrabold text-gray-800 mb-8"> Conference Archive</h1>
        <MeetingArchive :meetings="meetings" />
      </div>

    </section>
  </template>
  
<script>
import MeetingArchive from './MeetingArchive.vue';
import { meetings } from './MeetingArchiveData.js';

export default {
  components: { MeetingArchive },
  data() {
    return {
      meetings,
    };
  },
};
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
  