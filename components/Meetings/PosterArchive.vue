<template>
    <div class="poster-list">
      <div v-for="poster in posters" :key="poster.authors" class="poster-item">
        <a :href="poster.pdf" target="_blank" class="poster-link">
          <img src="/images/PDF_file_icon.svg" alt="PDF" class="icon" />
          <span>{{ poster.authors }}</span>
        </a>
        <span v-if="poster.award" class="award-badge">{{ poster.award }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['posters']
  };
  </script>
  
  <style scoped>
  .poster-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .poster-item {
    background: white;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .poster-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .award-badge {
    background: gold;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
  </style>
  