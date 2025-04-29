<template>
  <div class="flex flex-col gap-4 w-full sm:max-w-[30%] lg:max-w-[25%] mt-1">
    <!-- Resources box -->
    <div class="bg-quinary/30 border border-quinary rounded shadow-md p-5">
      <h3 class="text-2xl font-bold mb-4 text-gray-700 border-b pb-2">Resources</h3>
      <ul class="space-y-2">
        <li v-for="(item, index) in resources" :key="index">
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

    <!-- Contacts box -->
    <InsectaMundiContact />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InsectaMundiContact from './InsectaMundiContact.vue';

const resources = ref([
  {
    text: "2014 Manuscript Processing Flow",
    link: "/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf"
  },
  {
    text: "2014 Reorganization Proposal",
    link: "/PDF/insectamundi/InsectaMundi_ReorganizationDetails_2014.pdf"
  },
  {
    text: "Editor Guidelines",
    link: "/PDF/insectamundi/InsectaMundi_EditorGuidelines_2014.pdf"
  }
]);
</script>