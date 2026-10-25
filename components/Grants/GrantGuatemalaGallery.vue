<template>
  <PhotoGallery :photos="photos">
    <slot />
  </PhotoGallery>
</template>

<script setup>
import PhotoGallery from '~/components/Gallery/PhotoGallery.vue'
import photos from '~/helpers/guatemalaPhotos'
</script>
