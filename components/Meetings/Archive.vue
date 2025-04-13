<template>
    <section class="container mx-auto px-12 py-11">
      <!-- Meeting Archive Section -->
      <div>
        <h1 class="text-4xl"> Meeting Archive</h1>
        <MeetingArchive :meetings="meetings" />
      </div>

    </section>
  </template>
  
  <script>
  import MeetingArchive from './MeetingArchive.vue';
  
  export default {
    components: { MeetingArchive },
    data() {
      return {
        meetings: [
          { year: 2025, title: "CSE Annual Meeting", link: "youtube_link_2024", pdfLink: "pdf_link_2024", isNew: true },
          { year: 2024, title: "CSE Annual Meeting", link: "https://www.youtube.com/watch?v=SnYFevIEq6o", pdfLink: "pdf_link_2024", secondPdfLink: "link_to_second_pdf_2.pdf"},
          { year: 2023, title: "CSE Annual Meeting", link: "https://www.youtube.com/watch?v=UEGFzNtekQM", pdfLink: "pdf_link_2023" },
          { year: 2021, title: "CSE Annual Meeting", link: "youtube_link_2021", pdfLink: "pdf_link_2021" },
          { year: 2020, title: "CSE Annual Meeting", link: "youtube_link_2020", pdfLink: "pdf_link_2020" },
          { year: 2019, title: "CSE Annual Meeting", link: "youtube_link_2019", pdfLink: "pdf_link_2019" },
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  /* General Section Styles */
  
  /* Section Title Style */
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #333;
    padding-bottom: 10px;
    font-weight: bold;
  }
  
  /* Make the section titles more prominent */
  .archive-section h2 {
    font-size: 2rem;

  }
  
  /* Adjust space between sections */
  .archive-section + .archive-section {
    margin-top: 50px;
  }
  </style>
  