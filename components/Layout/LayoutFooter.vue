<template>
  <footer class="bg-slate-900 w-full">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-8 text-white">
      <!-- Left Side -->
      <div class="flex flex-col space-y-1">
        <span>© Copyright 1988–{{ currentYear }} Center for Systematic Entomology, Inc.</span>
        <span>PO Box 141874, Gainesville, FL 32614-1874 USA</span>
        <span>insectamundi@gmail.com</span>
      </div>

      <!-- Right Side -->
      <div class="mt-4 md:mt-0 text-sm text-slate-300 md:text-right">
        <span>Powered by <span class="font-semibold text-white">José Luis Pereira</span> & <span class="font-semibold text-white">Davide Dal Pos</span></span>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>