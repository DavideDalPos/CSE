<template>
  <div>
    <TitleMeeting />
    <IntroMeeting />
    <section class="bg-gray-100 border-t border-b border-gray-300">
      <CounterMeeting />
    </section>
    <MeetingSlider />
    <Archive />
  </div>
</template>

<script setup>
import Archive from '~/components/Meetings/Archive.vue'
import CounterMeeting from '~/components/Meetings/CounterMeeting.vue'
import IntroMeeting from '~/components/Meetings/IntroMeeting.vue'
import MeetingSlider from '~/components/Meetings/MeetingSlider.vue'
import TitleMeeting from '~/components/Meetings/TitleMeeting.vue'
</script>
