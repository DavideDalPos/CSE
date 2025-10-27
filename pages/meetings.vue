<script setup lang="ts">
import { MeetingsIntroMeeting, MeetingsMeetingInfoBanner } from '#components';

</script>

<template>
  <div>
    <section class="bg-foreground">
      <MeetingsTitleMeeting />
      <MeetingsIntroMeeting />
      <MeetingsMeetingInfoBanner />
    </section>
    <section
      class="bg-gradient-to-br from-gray-100 to-tertiary/30 border-t border-b border-yellow-600"
    >
      <MeetingsSectionArchive />
    </section>
    <section class="bg-gradient-to-br from-gray-100 to-secondary/30"></section>
    <section
      class="bg-gradient-to-br from-gray-100 to-senary/20 border-t border-gray-300 mb-10"
    >
      <MeetingsSlider />
    </section>
    <MeetingsArchivePoster />
  </div>
</template>
