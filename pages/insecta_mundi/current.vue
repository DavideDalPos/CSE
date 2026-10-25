<template>
  <div>
    <InsectaMundiHeader
      kicker="Latest issue"
      :lede="formattedDate ? `${publications.length} new ${publications.length === 1 ? 'article' : 'articles'}, published ${formattedDate}.` : ''"
    >
      <template #title>New in <i>Insecta Mundi</i></template>
    </InsectaMundiHeader>

    <section class="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div class="flex-1 min-w-0">
        <ul
          v-if="publications.length"
          class="divide-y divide-rule"
        >
          <li
            v-for="item in sorted"
            :key="item._path"
            class="py-5 first:pt-0"
          >
            <TablePublicationRow :publication="item" />
          </li>
        </ul>
        <p
          v-else
          class="text-ink-soft"
        >
          No articles found.
        </p>

        <NuxtLink
          to="/insecta_mundi"
          class="mt-8 inline-block font-semibold text-senary hover:underline underline-offset-4"
          >Browse all earlier articles →</NuxtLink
        >
      </div>

      <InsectaMundiSidebar />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { IM_LIST_FIELDS } from '~/helpers/contentFields'
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import InsectaMundiSidebar from '~/components/InsectaMundi/InsectaMundiSidebar.vue'
import TablePublicationRow from '~/components/Table/TablePublicationRow.vue'

useHead({ title: 'Latest issue · Insecta Mundi' })

// Every article published on the most recent publication date
const { data: latest } = await useAsyncData('im-current-date', () =>
  queryContent('insecta_mundi').where({ date: { $ne: null } }).sort({ date: -1 }).limit(1).only(['date']).findOne()
)
const { data } = await useAsyncData('im-current', () =>
  latest.value?.date
    ? queryContent('insecta_mundi').where({ date: latest.value.date }).only(IM_LIST_FIELDS).find()
    : Promise.resolve([])
)

const publications = computed(() => data.value || [])
const sorted = computed(() => [...publications.value].sort((a, b) => parseInt(b.issue) - parseInt(a.issue)))
const formattedDate = computed(() =>
  publications.value[0]?.date
    ? new Date(`${publications.value[0].date}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''
)
</script>
