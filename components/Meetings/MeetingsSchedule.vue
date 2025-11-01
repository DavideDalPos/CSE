<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Meeting Schedule</h1>

    <div v-for="(meeting, index) in meetings" :key="index" 
         class="bg-gray-100 p-5 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-200">
      <p class="text-gray-600 font-semibold">{{ meeting.time }}</p>
      <h2 class="text-xl font-bold mt-1">{{ meeting.title }}</h2>
      <p class="italic text-gray-800 mt-1">{{ meeting.author }} - <span class="not-italic text-gray-700">{{ meeting.affiliation }}</span></p>
      <p class="text-gray-700 mt-2">{{ meeting.abstract }}</p>
    </div>
  </div>
</template>

<script>
import { meetings } from "./MeetingsScheduleData.js"; // <-- relative path

export default {
  name: "MeetingSchedule",
  data() {
    return {
      meetings
    };
  }
};
</script>
