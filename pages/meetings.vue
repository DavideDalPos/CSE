<template>
  <div>    
    <section class="bg-foreground">
    <TitleMeeting />
    <IntroMeeting />
    </section>
    <section class="bg-gray-100 border-t border-gray-300">
      <CounterMeeting />
    </section>  
    
    <section class="bg-tertiary border-t border-b border-yellow-600">
    <Archive />
  </section>  
  <section class="bg-foreground">
    <ArchivePoster />
  </section>
  <section class="bg-gray-100 border-t border-gray-300">
  <MeetingSlider />
  </section>
  </div>

</template>

<script setup>
import Archive from '~/components/Meetings/Archive.vue'
import ArchivePoster from '~/components/Meetings/ArchivePoster.vue'
import CounterMeeting from '~/components/Meetings/CounterMeeting.vue'
import IntroMeeting from '~/components/Meetings/IntroMeeting.vue'
import MeetingSlider from '~/components/Meetings/MeetingSlider.vue'
import TitleMeeting from '~/components/Meetings/TitleMeeting.vue'
</script>
