<template>
    <div class="w-full lg:basis-[35%] bg-white border border-gray-300 rounded-xl shadow-lg p-8 self-start hover:shadow-2xl transition duration-300">
      <h3 class="text-2xl font-semibold mb-4 border-b pb-2 border-gray-400 text-gray-800">Resources</h3>
      <ul class="text-sm text-gray-800 space-y-4">
        <li v-for="(item, index) in resources" :key="index" class="flex items-center space-x-4 hover:bg-gray-100 rounded-lg p-2 transition duration-300">
          <a :href="item.link" target="_blank" class="text-blue-700 hover:text-blue-900 font-medium">{{ item.text }}</a>
          <img :src="item.icon" :alt="item.iconAlt" class="w-5 h-5">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resources: [
          {
            text: "Manuscript Preparation Rules & Guidelines (updated 2024)",
            link: "/PDF/insectamundi/InsectaMundi_FullGuidelines_2024.pdf",
            icon: "/images/PDF_file_icon.svg",
            iconAlt: "PDF icon"
          },
          {
            text: "Common Problems Checklist (Lista de Problemas Frecuentes)",
            link: "/PDF/insectamundi/InsectaMundi_CommonProblemsChecklist_2014.pdf",
            icon: "/images/PDF_file_icon.svg",
            iconAlt: "PDF icon"
          },
          {
            text: "Review Report Form",
            link: "/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2022.doc",
            icon: "/images/docx_icon.png",
            iconAlt: "DOC icon"
          },
          {
            text: "Informe Crítico del Revisor",
            link: "/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2021_Spanish.doc",
            icon: "/images/docx_icon.png",
            iconAlt: "DOC icon"
          },
          {
            text: "Submission Contract",
            link: "/PDF/insectamundi/InsectaMundi_SubmissionContract_2014.doc",
            icon: "/images/docx_icon.png",
            iconAlt: "DOC icon"
          },
          {
            text: "Carta de Compromiso",
            link: "/PDF/insectamundi/InsectaMundi_SubmissionContract_2014_Spanish.doc",
            icon: "/images/docx_icon.png",
            iconAlt: "DOC icon"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add styles here if needed for specific adjustments */
  </style>
  