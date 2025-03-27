<template>
    <section class="bg-gray-100 py-4 border-t border-b border-gray-300 px-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
        <TemplateSection title="Board Members" :members="boardMembers" />
        <TemplateSection title="Executive Members" :members="executiveMembers" />
      </div>
    </section>
</template>

<script setup lang="ts">
import { boardMembers, executiveMembers } from "~/components/About/AboutBoardData.js";
import TemplateSection from "~/components/BoardStaffTemplate/TemplateSection.vue";
</script>
