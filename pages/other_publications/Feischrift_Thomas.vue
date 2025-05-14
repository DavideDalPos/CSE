<template>
  <section class="container mx-auto px-8 my-10 font-serif">

<div class="mb-8">
  <h1 class="text-4xl font-bold text-gray-800">Insecta Mundi</h1>
  <h2 class="text-xl text-gray-600 mt-1 tracking-wide italic">Special Publications</h2>
</div>

<div class="mb-10">
  <h3 class="text-2xl font-semibold text-gray-700 tracking-tight">Michael C. Thomas Festschrift</h3>
</div>

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
import InsectaMundiRightColumn from '~/components/InsectaMundi/InsectaMundiRightColumn.vue'
import TableFeischrift from '~/components/Table/TableFeischrift.vue'

const { data: listData } = await useAsyncData('festschrift-thomas', async () => {
  return await queryContent('insecta_mundi')
    .where({
      issue: {
        $in: [
          '0829', '0830', '0831', '0832', '0833', '0834', '0835',
          '0836', '0837', '0838', '0839', '0840', '0841', '0842', '0843'
        ]
      }
    })
    .find()
})

const list = computed(() => listData.value || [])
</script>

