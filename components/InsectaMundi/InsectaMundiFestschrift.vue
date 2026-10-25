<template>
  <div>
    <InsectaMundiHeader
      kicker="Festschrift"
      :title="title"
      :lede="`A special series of Insecta Mundi (nos. ${range}), published ${published}.`"
    />

    <section class="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div class="flex-1 min-w-0">
        <div class="flex flex-col sm:flex-row gap-6 items-start p-5 rounded-xl border border-rule bg-paper">
          <img
            v-if="cover"
            :src="cover"
            :alt="`Cover of the ${title}`"
            loading="lazy"
            class="w-32 rounded shadow-md border border-rule bg-white"
          />
          <div>
            <p class="font-serif text-xl font-semibold text-ink">{{ list.length }} articles in honour of {{ honoree }}</p>
            <p class="mt-1 text-ink-soft">
              <i>Insecta Mundi</i> {{ range }} · {{ published }}
            </p>
            <a
              v-if="pdf"
              :href="pdf"
              target="_blank"
              rel="noopener"
              class="mt-4 inline-block px-5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-senary transition-colors"
              >Cover &amp; table of contents</a
            >
          </div>
        </div>

        <ul class="mt-8 divide-y divide-rule">
          <li
            v-for="item in sorted"
            :key="item._path"
            class="py-5 first:pt-0"
          >
            <TablePublicationRow :publication="item" />
          </li>
        </ul>
        <p
          v-if="!list.length"
          class="text-ink-soft"
        >
          No articles found.
        </p>
      </div>

      <InsectaMundiSidebar />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { IM_LIST_FIELDS } from '~/helpers/contentFields'
import InsectaMundiHeader from './InsectaMundiHeader.vue'
import InsectaMundiSidebar from './InsectaMundiSidebar.vue'
import TablePublicationRow from '~/components/Table/TablePublicationRow.vue'

const props = defineProps({
  title: { type: String, required: true },
  honoree: { type: String, required: true },
  // Insecta Mundi numbers in the series, e.g. ['0829', …]
  issues: { type: Array, required: true },
  published: { type: String, default: '' },
  cover: { type: String, default: '' },
  pdf: { type: String, default: '' }
})

const range = computed(() => `${props.issues[0]}–${props.issues[props.issues.length - 1]}`)

const { data } = await useAsyncData(`festschrift-${props.issues[0]}`, () =>
  queryContent('insecta_mundi').where({ issue: { $in: props.issues } }).only(IM_LIST_FIELDS).find()
)
const list = computed(() => data.value || [])
const sorted = computed(() => [...list.value].sort((a, b) => parseInt(a.issue) - parseInt(b.issue)))
</script>
