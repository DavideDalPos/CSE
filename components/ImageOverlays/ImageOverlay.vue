<template>
  <section class="image-overlay-container">
    <div
      class="image-overlay"
      :style="{ backgroundImage: `url(${imageSrc})` }"
    >
      <div class="overlay-bg"></div>
      <div class="text-content">
        <h1 class="text-4xl overlay-text">{{ title }}</h1>
        <p class="text-white my-8 text-lg max-w">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.image-overlay-container {
  position: relative;
  width: 100%;
  height: 80vh; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Ensure image is not repeated */
}

.overlay-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65); /* Semi-transparent dark overlay */
  z-index: 1;
}

.text-content {
  position: absolute;
  top: 80%;  /* Move the content down by 50% of the container */
  left: 50%; /* Move it to the center */
  transform: translate(-50%, -50%); /* Center it perfectly */
  z-index: 10;
  text-align: center;
  color: white;
  padding: 0 0px;
}

h1 {
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
  white-space: nowrap; /* Prevents text from breaking onto a new line */
  overflow: hidden; /* Hides any text that overflows the container */
  text-overflow: ellipsis; /* Adds "..." at the end if the text overflows */
}

p {
  font-size: 1.25rem;
  max-width: 2000px;
  line-height: 0.5;
}
</style>
