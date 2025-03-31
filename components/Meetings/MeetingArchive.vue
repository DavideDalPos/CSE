<template>
    <div class="meeting-list">
      <div v-for="meeting in meetings" :key="meeting.year" class="meeting-item">
        <div class="meeting-header">
          <h3>{{ meeting.year }} - {{ meeting.title }}</h3>
          <span v-if="meeting.isNew" class="new-tag">NEW</span>
        </div>
  
        <div class="meeting-footer">
          <!-- First PDF Link with Icon -->
          <a :href="meeting.pdfLink" target="_blank" class="pdf-link">
            <img src="/images/PDF_file_icon.svg" alt="PDF" class="icon" />
            <span>Program</span>
          </a>
  
          <!-- Second PDF Link with Icon -->
          <a v-if="meeting.secondPdfLink" :href="meeting.secondPdfLink" target="_blank" class="pdf-link">
            <img src="/images/PDF_file_icon.svg" alt="PDF" class="icon" />
            <span>Images</span>
          </a>
  
          <!-- YouTube Link -->
          <a v-if="meeting.link" :href="meeting.link" target="_blank" class="youtube-link">
            <img src="/images/youtube_icon_real.png" alt="YouTube" class="iconY" />
            <span>Video</span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['meetings']
  };
  </script>
  
  <style scoped>
  .meeting-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .meeting-item {
    background: white;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .meeting-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .new-tag {
    background: red;
    color: white;
    padding: 5px 8px;
    font-size: 0.8rem;
    border-radius: 5px;
  }
  
  .meeting-footer {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
  }
  
  .pdf-link,
  .youtube-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #007bff;
  }
  
  .pdf-link:hover,
  .youtube-link:hover {
    text-decoration: underline;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .iconY {
    width: 20px;
    height: 15px;
    margin-right: 8px;
  }
  </style>
  