<template>
  <div>    
    <section class="bg-foreground">
    <TitleMeeting />
    <IntroMeeting />
    </section>
    <section class="bg-gradient-to-br from-gray-100 to-quaternary/30 border-t border-b border-yellow-600">
    <Archive />
  </section>  
  <section class="bg-gradient-to-br from-gray-100 to-secondary">
    <ArchivePoster />
  </section>
  <section class="bg-gradient-to-br from-gray-100 to-senary/20 border-t border-gray-300">
  <MeetingSlider />
  </section>
  </div>

</template>

<script setup>
import Archive from '~/components/Meetings/Archive.vue'
import ArchivePoster from '~/components/Meetings/ArchivePoster.vue'
import IntroMeeting from '~/components/Meetings/IntroMeeting.vue'
import MeetingSlider from '~/components/Meetings/MeetingSlider.vue'
import TitleMeeting from '~/components/Meetings/TitleMeeting.vue'
</script>
