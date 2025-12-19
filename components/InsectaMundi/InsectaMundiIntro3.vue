<template>
  <div class="container mx-auto px-6 sm:px-10 py-12 space-y-12 font-serif">
    <EditorSingleLineSection title="Chief Editor" :item="chiefEditor" />
    <EditorListSection title="Editorial Board" :items="sortedEditorialBoard" />
    <EditorListSection title="Digital Registration Editoris" :items="digitalRegistration" />
    <EditorListSection title="Founding Editors" :items="sortedFoundingEditors" />
    <EditorListSection id="revieweditors" class="scroll-mt-28" title="Review Editors" :items="sortedReviewEditors" />
    <EditorSingleLineSection title="Layout Editors" :item="layoutEditors" />
    <EditorSingleLineSection title="Post Production" :item="postProduction" />

    <section>
      <p class="text-gray-600 italic text-sm">
        All editors are active members of the Center for Systematic Entomology, unless indicated otherwise with an asterisk (*).
      </p>
    </section>
  </div>
</template>

<script setup>
import {
  chiefEditor,
  digitalRegistration,
  layoutEditors,
  postProduction,
  sortedEditorialBoard,
  sortedFoundingEditors,
  sortedReviewEditors
} from './InsectaMundiIntro3Data';

import EditorListSection from './EditorListSection.vue';
import EditorSingleLineSection from './EditorSingleLineSection.vue';
</script>
