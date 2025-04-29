<script setup lang="ts">
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue';
import InsectaMundiEditorImage from '~/components/InsectaMundi/InsectaMundiEditorImage.vue';
import InsectaMundiEditorInfo from '~/components/InsectaMundi/InsectaMundiEditorInfo.vue';

</script>

<template>
  <InsectaMundiEditorInfo />
  <section class="bg-quaternary/30 border-b border-t border-quaternary">
  <InsectaMundiEditorImage />
</section>
  <InsectaMundiBottomButtons />
</template>
