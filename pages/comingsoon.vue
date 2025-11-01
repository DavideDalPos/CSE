<script setup lang="ts">
import Comingsoon from '~/components/Meetings/Comingsoon.vue';
import MeetingsSchedule from '~/components/Meetings/MeetingsSchedule.vue';
import { ref } from 'vue';

// Set to false initially to hide the schedule
const showSchedule = ref(false);

// Optional: Automatically show after a certain date
const releaseDate = new Date('2026-01-01T00:00:00'); // change to desired date
const now = new Date();
if (now >= releaseDate) {
  showSchedule.value = true;
}
</script>

<template>
  <Comingsoon />

  <!-- Only show MeetingsSchedule if showSchedule is true -->
  <MeetingsSchedule v-if="showSchedule" />
</template>
