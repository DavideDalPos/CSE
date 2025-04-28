<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <h1 class="text-4xl text-gray-700 font-bold mb-10">Michael C. Thomas Festschrift: 0829–0843</h1>
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- LEFT COLUMN: Publications -->
        <div>
          <!-- Table Component that accepts list data -->
          <TableFeischrift :list="list" class="my-2" />

          <!-- Section for Insecta Mundi Issues -->
          <h2
            class="px-4 py-2 text-lg text-gray-800 font-medium bg-gray-100 border-l-4 border-primary/80"
          >
            <span class="text-sm text-gray-600">Insecta Mundi Issues: 0829–0843</span>
          </h2>

          <!-- Fallback message when no articles are found -->
          <div class="px-4">
            <p v-if="list.length === 0">No articles found.</p>
          </div>
        </div>

        <!-- RIGHT COLUMN: Contact box or other sidebar -->
        <InsectaMundiRightColumn />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TableFeischrift from '~/components/Table/TableFeischrift.vue';

// Define the ref variable to store the list of publications
const list = ref([]);

// Fetch data for publications when the component is mounted
onMounted(async () => {
  const response = await fetch('your_api_endpoint'); // Replace with actual API
  const data = await response.json();

  const allowedIssues = [
    '0829', '0830', '0831', '0832', '0833', '0834', '0835',
    '0836', '0837', '0838', '0839', '0840', '0841', '0842', '0843'
  ];

  list.value = data.filter(pub => allowedIssues.includes(pub.issue));
});
</script>
