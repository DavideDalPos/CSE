<template>
    <section class="container mx-auto px-12 py-12 -mt-60">
      <!-- Meeting Archive Section -->
      <div class="archive-section">
        <h1 class="text-4xl mb-10"> CSE Archive</h1>
        <MeetingArchive :meetings="meetings" />
      </div>
  
      <!-- Poster Archive Section -->
      <div class="archive-section">
        <h1 class="text-4xl"> Poster Archive</h1>
        <PosterArchive :posters="posters" />
      </div>
    </section>
  </template>
  
  <script>
  import MeetingArchive from './MeetingArchive.vue';
import PosterArchive from './PosterArchive.vue';
  
  export default {
    components: { MeetingArchive, PosterArchive },
    data() {
      return {
        meetings: [
          { year: 2025, title: "CSE Annual Meeting", link: "youtube_link_2024", pdfLink: "pdf_link_2024", isNew: true },
          { year: 2024, title: "CSE Annual Meeting and Conference", link: "https://www.youtube.com/watch?v=SnYFevIEq6o", pdfLink: "pdf_link_2024", secondPdfLink: "link_to_second_pdf_2.pdf"},
          { year: 2023, title: "CSE Annual Meeting and Conference", link: "https://www.youtube.com/watch?v=UEGFzNtekQM", pdfLink: "pdf_link_2023" },
          { year: 2023, title: "Annual Meeting Collages", pdfLink: "pdf_link_2023" },
          { year: 2021, title: "CSE Annual Meeting and Conference", link: "youtube_link_2021", pdfLink: "pdf_link_2021" },
          { year: 2020, title: "CSE Annual Meeting and Conference", link: "youtube_link_2020", pdfLink: "pdf_link_2020" },
          { year: 2019, title: "CSE Annual Meeting and Conference", link: "youtube_link_2019", pdfLink: "pdf_link_2019" },
        ],
        posters: [
          { authors: "2024 - Ivana Lorena Araujo, Juan Manuel Coronel, and Clara Etcheverry", pdf: "poster1.pdf" },
          { authors: "2024 - Florencia Monti Areco and Juan Manuel Coronel", pdf: "poster2.pdf" },
          { authors: "2024 - Guillermo Luis Avalos, Darío Daniel Larrea, and Juan Manuel Coronel", pdf: "poster3.pdf" },
          { authors: "2024 - Kaloyan Ivanov, Liberty Hightower, Jaclspm Means, and Nathan Jones", pdf: "poster4.pdf" },
          { authors: "2024 - Alex Rodriguez, David Serrano, and Sebastian Palmieri", pdf: "poster5.pdf" },
          { authors: "2024 - Jacqueline Y. Miller", pdf: "poster6.pdf", award: "CSE Lifetime Achievement Award" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* General Section Styles */
  .archive-section {
    margin-bottom: 80px;
  }
  
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
  