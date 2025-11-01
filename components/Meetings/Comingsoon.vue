<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-secondary">
    <div class="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
      <img src="/public/images/Logo_CSE.png" alt="CSE Logo" class="mx-auto mb-6 w-70 h-70" />

      <h1 class="text-4xl font-bold text-gray-800 mb-2">CSE 2026 Conference</h1>
      <h2 class="text-xl text-gray-600 mb-4">January 17, 2026 · Gainesville, FL</h2>
<p class="text-gray-500">
  For more details, <NuxtLink
  to="/meetings"
  class="text-novenary hover:text-novenary/70 hover:underline hover:[text-decoration-novenary/70)]"
>
  click here
</NuxtLink>


</p>

      <!-- Contact Us button -->
      <div class="mt-6">
        <a
          href="mailto:conference@csentomology.com"
          class="inline-block w-full bg-novenary text-white py-2 rounded-md hover:bg-novenary/70 transition shadow-lg"
        >
          Contact Us
        </a>
      </div>

      <!-- Download Form button -->
      <div class="mt-4">
        <a
          href="/PDF/conference/CSE_SubmissionForm.docx"
          download
          class="inline-block w-full bg-quaternary text-white py-2 rounded-md hover:bg-quaternary/70 hover:text-white transition shadow-lg"
        >
          Download Submission Form
        </a>
      </div>
      <div class="mt-4">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeQTYjJtXy69-M8GzCHQ6Ap9ZcyjIidJ01-ASXcbKkFAYCgQ/viewform?usp=header" target="_blank" 
      class="inline-block w-full bg-primary text-white py-2 rounded-md hover:bg-primary/70 hover:text-white transition shadow-lg">Submit Google Form</a>
    </div>
  </div>
  </div>
</template>
