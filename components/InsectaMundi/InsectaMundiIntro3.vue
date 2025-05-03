<template>
    <div class="container mx-auto px-8 py-10 text-justify space-y-8">
      <!-- Editorial Board Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Editorial Board</h2>
        <ul class="list-disc pl-6">
          <li v-for="(editor, index) in sortedEditorialBoard" :key="index" class="text-gray-700">
            {{ editor }}
          </li>
        </ul>
      </section>
  
      <!-- Chief Editor Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Chief Editor</h2>
        <p class="text-gray-700">{{ chiefEditor }}</p>
      </section>
  
      <!-- Founding Editors Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Founding Editors</h2>
        <ul class="list-disc pl-6">
          <li v-for="(editor, index) in sortedFoundingEditors" :key="index" class="text-gray-700">
            {{ editor }}
          </li>
        </ul>
      </section>
  
      <!-- Review Editors Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Review Editors</h2>
        <ul class="list-disc pl-6">
          <li v-for="(editor, index) in sortedReviewEditors" :key="index" class="text-gray-700">
            {{ editor }}
          </li>
        </ul>
      </section>
  
      <!-- Layout Editors Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Layout Editors</h2>
        <p class="text-gray-700">{{ layoutEditors }}</p>
      </section>
  
      <!-- Webmaster Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Webmaster</h2>
        <p class="text-gray-700">{{ webmaster }}</p>
      </section>
  
      <!-- Post Production Section -->
      <section>
        <h2 class="text-xl font-semibold text-gray-900">Post Production</h2>
        <p class="text-gray-700">{{ postProduction }}</p>
      </section>
  
      <!-- Membership Info Section -->
      <section>
        <p class="text-gray-700">
          All editors are active members of the Center for Systematic Entomology, unless indicated otherwise with an asterisk (*)
        </p>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the data for each section
  const editorialBoard = ref([
    'Davide Dal Pos (University of Central Florida, USA)',
    'M.J. Paulsen (University of Nebraska, USA)',
    'David Plotkin (University of Florida, USA)',
    'Paul E. Skelley (Florida Department of Agriculture and Consumer Services, USA)',
    'Felipe Soto-Adames (Florida Department of Agriculture and Consumer Services, USA)',
  ]);
  
  const chiefEditor = ref('David Plotkin (University of Florida, USA)');
  
  const foundingEditors = ref([
    'Ross H. Arnett, Jr.* (deceased)',
    'J. Howard Frank* (deceased)',
    'Virendra Gupta* (deceased)',
    'John B. Heppner (University of Florida, USA)',
    'Lionel A. Stange* (deceased)',
    'Michael C. Thomas* (deceased)',
    'Robert E. Woodruff* (deceased)',
  ]);
  
  const reviewEditors = ref([
    'Angélico Asenjo* (Instituto Tecnológico Vale, Brazil)',
    'Aline Barcellos (Museu de Ciências Naturais da Fundação Zoobotânica do Rio Grande do Sul, Brazil)',
    'David Bowles (Missouri State University, USA)',
    'Julieta Brambila (USDA-APHIS-PPQ, USA)',
    'Adam Brunke* (Canadian National Collection of Insects, Arachnids and Nematodes, Canada)',
    'Joe Eger (Florida State Collection of Arthropods, USA)',
    'Mike Ferro (Clemson University, USA)',
    'Patrick Gorring* (Florida Department of Agriculture and Consumer Services, USA)',
    'Bill Grogan (Florida State Collection of Arthropods, USA)',
    'Kevin Hinson (EpiLogic GmbH Agrarbiologische Forschung und Beratung, Germany)',
    'Larry Hribar (Florida Keys Mosquito Control District, USA)',
    'Oliver Keller (Florida State Collection of Arthropods, USA)',
    'José Martínez (Florida Department of Agriculture and Consumer Services, USA)',
    'Elena Ortiz-Acevedo* (Universidad del Norte, Colombia)',
    'Alessandra Pandolfi (University of Central Florida, USA)',
    'M.J. Paulsen (University of Nebraska, USA)',
    'David Plotkin (University of Florida, USA)',
    'Andy Rasmussen* (Florida A&M University, USA)',
    'Erin C. Powell (Florida Department of Agriculture and Consumer Services, USA)',
    'Kyle Schnepp (North Carolina State University, USA)',
    'Paul E. Skelley (Florida Department of Agriculture and Consumer Services, USA)',
    'Felipe Soto-Adames (Florida Department of Agriculture and Consumer Services, USA)',
    'Ryan St Laurent* (University of Colorado, USA)',
    'Gary Steck (Florida Department of Agriculture and Consumer Services, USA)',
    'Elijah Talamas* (Florida Department of Agriculture and Consumer Services, USA)',
    'Kevin Williams* (California Department of Food and Agriculture, USA)',
  ]);
  
  const layoutEditors = ref('Robert Forsyth (Royal British Columbia Museum, Canada)');
  const webmaster = ref('Eugenio H. Nearns (USDA-APHIS-PPQ, USA)');
  const postProduction = ref('Paul E. Skelley (Florida Department of Agriculture and Consumer Services, USA)');
  
  // Sorting each section alphabetically
  const sortedEditorialBoard = computed(() => editorialBoard.value.sort());
  const sortedFoundingEditors = computed(() => foundingEditors.value.sort());
  const sortedReviewEditors = computed(() => reviewEditors.value.sort());
  </script>
  
  <style scoped>
  /* You can add custom styles here */
  </style>
  