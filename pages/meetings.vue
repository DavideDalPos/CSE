<script setup lang="ts">
import CounterMeeting from '~/components/Meetings/CounterMeeting.vue';
import IntroMeeting from '~/components/Meetings/IntroMeeting.vue';
import MeetingSlider from '~/components/Meetings/MeetingSlider.vue';
import TitleMeeting from '~/components/Meetings/TitleMeeting.vue';

</script>

<template>
    <TitleMeeting />
    <IntroMeeting />
<section class="bg-gray-100 border-t border-b border-gray-300">
    <CounterMeeting />
</section>
    <MeetingSlider />
</template>
