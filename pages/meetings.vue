<script setup lang="ts">
import ArchivePoster from '~/components/Meetings/ArchivePoster.vue';
import InfoMeetingBanner from '~/components/Meetings/InfoMeetingBanner.vue';
import IntroMeeting from '~/components/Meetings/IntroMeeting.vue';
import MeetingsSlider from '~/components/Meetings/MeetingsSlider.vue';
import SectionArchive from '~/components/Meetings/SectionArchive.vue';
import TitleMeeting from '~/components/Meetings/TitleMeeting.vue';

</script>

<template>
  <div>
    <section class="bg-foreground">
      <TitleMeeting />
      <IntroMeeting />
      <InfoMeetingBanner />
    </section>
    <section
      class="bg-gradient-to-br from-gray-100 to-tertiary/30 border-t border-b border-yellow-600"
    >
      <SectionArchive />
    </section>
    <section class="bg-gradient-to-br from-gray-100 to-secondary/30"></section>
    <section
      class="bg-gradient-to-br from-gray-100 to-senary/20 border-t border-gray-300 mb-10"
    >
      <MeetingsSlider />
    </section>
    <ArchivePoster />
  </div>
</template>
