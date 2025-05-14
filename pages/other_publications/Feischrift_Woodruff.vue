<template>
  <section class="container mx-auto px-8 my-10 font-serif">
    <div class="mb-8">
  <h1 class="text-4xl font-bold text-gray-800">Insecta Mundi</h1>
  <h2 class="text-xl text-gray-600 mt-1 tracking-wide italic">Special Publications</h2>
</div>

<div class="mb-10">
  <h3 class="text-2xl font-semibold text-gray-700 tracking-tight">Robert E. Woodruff Festschrift</h3>
</div>
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- LEFT COLUMN: Publications -->
        <div>
          <div
            class="flex items-center justify-between px-4 py-3 bg-quaternary/20 border-l-4 border-quaternary/80 cursor-pointer"
          >
            <h2 class="text-lg text-gray-800 font-medium"> Insecta Mundi Issues: 0908–0919 </h2>
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

const { data: listData } = await useAsyncData('festschrift-issues', async () => {
  const response = await queryContent('insecta_mundi')
    .where({
      issue: {
        $in: [
          '0908', '0909', '0910', '0911', '0912', '0913',
          '0914', '0915', '0916', '0917', '0918', '0919'
        ]
      }
    })
    .find()
  return response
})

const list = computed(() => listData.value || [])
</script>

