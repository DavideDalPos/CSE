<template>
  <!-- Sidebar Wrapper with Decorative Left Border -->
  <div class="flex w-full sm:max-w-[30%] lg:max-w-[25%] mt-3">
    <!-- Left Border Accent -->
    <div class="mr-5"></div>

    <!-- Content Boxes -->
    <div class="flex flex-col gap-6 w-full">
      <!-- Resource Box -->
      <div class="bg-quinary/30 border border-quinary rounded shadow-md p-5">
        <h3 class="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Resources
        </h3>
        <ul class="space-y-2">
  <li v-for="(item, index) in resources" :key="index">
    <!-- Resource Card Box -->
    <div class="group flex items-center gap-2 p-2 bg-setenary rounded-lg hover:bg-primary/70 transition duration-200 shadow-lg">
      <!-- Icon -->
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           class="w-5 h-5 text-foreground group-hover:text-senary transition duration-200 flex-shrink-0">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
      </svg>

      <!-- Text -->
      <a :href="item.link"
         target="_blank"
         class="text-sm font-medium text-quaternary group-hover:text-senary transition duration-200">
        {{ item.text }}
      </a>
    </div>
  </li>
</ul>

      </div>

      <!-- Contact Box -->
      <InsectaMundiContact />
    </div>
  </div>
</template>






  
  <script>
import InsectaMundiContact from './InsectaMundiContact.vue';

  export default {
    data() {
      return {
        resources: [
          {
            text: "Manuscript Preparation Rules & Guidelines (updated 2024)",
            link: "/PDF/insectamundi/InsectaMundi_FullGuidelines_2024.pdf",
          },
          {
            text: "Common Problems Checklist (Lista de Problemas Frecuentes)",
            link: "/PDF/insectamundi/InsectaMundi_CommonProblemsChecklist_2014.pdf"
          },
          {
            text: "Review Report Form",
            link: "/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2022.doc",
          },
          {
            text: "Informe Crítico del Revisor",
            link: "/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2021_Spanish.doc",
          },
          {
            text: "Submission Contract",
            link: "/PDF/insectamundi/InsectaMundi_SubmissionContract_2014.doc",
          },
          {
            text: "Carta de Compromiso",
            link: "/PDF/insectamundi/InsectaMundi_SubmissionContract_2014_Spanish.doc",
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add styles here if needed for specific adjustments */
  </style>
  