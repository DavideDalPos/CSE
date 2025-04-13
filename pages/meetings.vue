<template>
  <div>    
    <section class="bg-foreground">
    <TitleMeeting />
    <IntroMeeting />

      <CounterMeeting />
    </section>  
    
    <section class="bg-secondary">
    <Archive />
  </section>  
  <section class="bg-tertiary">
    <ArchivePoster />
  </section>
  <section class="bg-foreground">
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
