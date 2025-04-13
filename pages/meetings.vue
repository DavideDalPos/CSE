<template>
  <div>
    <TitleMeeting />
    <IntroMeeting />
      <CounterMeeting />
    
    <section class="bg-secondary border-t border-b border-gray-300">
    <Archive />
  </section>
  <MeetingSlider />
  </div>
</template>

<script setup>
import Archive from '~/components/Meetings/Archive.vue'
import CounterMeeting from '~/components/Meetings/CounterMeeting.vue'
import IntroMeeting from '~/components/Meetings/IntroMeeting.vue'
import MeetingSlider from '~/components/Meetings/MeetingSlider.vue'
import TitleMeeting from '~/components/Meetings/TitleMeeting.vue'
</script>
