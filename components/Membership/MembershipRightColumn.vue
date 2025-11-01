<script setup lang="ts">
import MembershipLifetimeMembers from './MembershipLifetimeMembers.vue';
import MembershipLogo from './MembershipLogo.vue';
</script>

<template>
  <div class="space-y-6">
    <div class="logo-container p-4 rounded-md">
      <MembershipLogo />
    </div>
    <hr class="border-gray-300" />
    <MembershipLifetimeMembers />
  </div>
</template>

<style scoped>

hr {
  margin-top: 0; /* To make sure the divider aligns well */
  margin-bottom: 24px; /* Adjust spacing below the divider */
  border-width: 1px;
}
</style>





