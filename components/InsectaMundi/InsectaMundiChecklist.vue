<template>
  <div class="max-w-2xl mx-auto px-6 py-12">
    <h2 class="text-3xl text-center mb-4 text-slate-800 font-bold">Manuscript Submission Checklist</h2>
    <p class="text-center text-slate-600 mb-10 text-sm">
      Each submitted manuscript must include the following documents
    </p>

    <div class="relative border-l-4 border-quaternary/60 pl-6 space-y-8">
      <div
        v-for="(item, index) in checklistItems"
        :key="item.id"
        class="relative group fade-in-up"
        :style="{ animationDelay: `${index * 120}ms` }"
      >
        <!-- Dot -->
        <span class="absolute -left-2 top-2 w-3 h-3 rounded-full bg-quaternary/80"></span>

        <!-- Content -->
        <div class="bg-slate-50 p-4 rounded-lg shadow-sm border border-slate-200 transition group-hover:shadow-md">
          <h3 class="font-semibold text-base text-senary/90 mb-1"> {{ item.id }}</h3>
          <p class="text-slate-700 text-sm leading-snug">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



  
  <script>
  export default {
    data() {
      return {
        checklistItems: [
          { id: "1. Manuscript", text: 'Manuscript and associated appendices or other files' },
          { id: "2. Images", text: 'Images arranged into plates, each plate submitted as a separate TIF, JPG, or PDF file' },
          { id: "3. Reviews", text: 'Copies of two critical reviews, showing reviewer comments' },
          { id: "4. Reviewer Report Forms", text: 'Copies of Reviewer Report forms, one for each reviewer in addition to the manuscript with comments' },
          { id: "5. Submission Contract", text: 'Copy of the signed Submission Contract, attesting that the manuscript is ready to go' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fade-in-up 1.6s ease forwards;
  opacity: 0;
  will-change: opacity, transform;
}


  </style>
  