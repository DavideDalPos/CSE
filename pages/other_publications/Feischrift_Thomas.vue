<template>
  <section class="container mx-auto px-8 my-10">
      <h1 class="text-4xl text-gray-700 font-bold mb-10">Michael C. Thomas Festschrift</h1>
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- LEFT COLUMN: Publications -->
        <div>
          <div
            class="flex items-center justify-between px-4 py-3 bg-quaternary/20 border-l-4 border-quaternary/80 cursor-pointer"
          >
            <h2 class="text-lg text-gray-800 font-medium"> Insecta Mundi Publications: 0829–0843 </h2>
           </div> 
          <!-- Table Component that accepts list data -->
          <TableFeischrift :list="list" class="my-2" />

          <!-- Fallback message when no articles are found -->
          <div class="px-4">
            <p v-if="list.length === 0">No articles found.</p>
          </div>
        </div>

        <!-- RIGHT COLUMN: Contact box or other sidebar -->
        <InsectaMundiRightColumn />
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
  const query = {
    path: '/insecta_mundi',  // Path of the content you want to query (update based on your content structure)
    where: [
      {
        issue: {  // Assuming 'issue' is a field in your content files
          $in: [
            '0829', '0830', '0831', '0832', '0833', '0834', '0835',
            '0836', '0837', '0838', '0839', '0840', '0841', '0842', '0843'
          ]
        }
      }
    ]
  };

  try {
    // Query the content directly without needing an API
    const response = await queryContent('insecta_mundi')  // Replace with your actual collection name
      .where(query.where)  // Apply the filtering criteria
      .find();

    list.value = response;  // Assign the response to the list
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>
