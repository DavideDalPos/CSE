<template>
    <div class="container mx-auto px-8">
      <div class="prose max-w-full pb-4">
        <h1 class="text-4xl">Previous Proposal</h1>
  
        <p>
          This is a list of previous proposals funded by the Peck Travel Grant:
        </p>
  
        <h3 class="mb-2">2024</h3>
  
  <div class="flex items-center">
    <strong>Author:</strong> Doris Lagos-Kutz.
    <strong>Title:</strong> The genus <i>Aphis</i>
    <!-- PDF Icon next to the proposal -->
    <a
      href="/PDF/DorisLagos-Kutz_CSE2024report.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="ml-1"
    >
      <img
        src="/images/PDF_file_icon.svg"
        alt="PDF Icon"
        class="w-5 h-5 inline-block align-middle"
      />
    </a>
  </div>
  
  
        <div class="flex items-center mt-0">
          <strong>Grants Committee</strong>
        </div>
        <div class="flex items-center mt-0">
          <strong>Center for Systematic Entomology</strong>
        </div>
        <div class="flex items-center mt-0">
          <strong>P.O. Box 141874</strong>
        </div>
        <div class="flex items-center mt-0">
          <strong>Gainesville, FL 32614-1874</strong>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PreviousProposal',
  };
  </script>
  
  <style scoped>
  /* Remove margin-top */
  .mt-0 {
    margin-top: 0 !important;
  }
  
  /* Add minimal spacing for icon to text */
  .ml-1 {
    margin-left: 0.25rem;
  }
  
  .flex {
    display: flex;
    align-items: center;
    gap: 0.2rem; /* Small gap between items */
  }
  
  .prose {
    margin-top: 0; /* Remove any top margin */
  }
  
  /* Reset any list padding or margins */
  ul, ol {
    padding-left: 0;
    margin: 0;
  }
  </style>
  