<template>
    <PosterArchive :posters="posters" />

  </template>
  
<script>
  import ArchivePosterData from './ArchivePosterData.js';
import PosterArchive from './PosterArchive.vue';
  
  export default {
    components: {
      PosterArchive
    },
    data() {
      return {
        posters: ArchivePosterData.posters
      };
    }
  };
</script>
