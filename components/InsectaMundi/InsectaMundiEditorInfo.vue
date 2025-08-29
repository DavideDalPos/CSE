<template>
  <section class="container mx-auto px-8 my-15 font-serif">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-2">Editor Guidelines</h1>
    <h2 class="text-xl font-medium text-gray-500 -mt-2">Insecta Mundi</h2>

    <div class="flex justify-between gap-x-4 my-6">
      <!-- Left-side content for the text -->
      <div class="flex flex-col gap-6 text-lg text-gray-700 text-justify leading-relaxed w-full sm:max-w-[60%] lg:max-w-[70%] mt-2">
        <p>
          In 2014, several core members of our small editorial team experienced major life changes and had to step away from their roles. 
          With fewer hands on deck, the remaining editors faced an overwhelming manuscript load. To move forward, the Editorial Board 
          initiated a complete overhaul of our workflow and began expanding our team of dedicated volunteers. These improvements are outlined in 
          our <a href="/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf" target="_blank" class="internal-link">
            2014 Manuscript Processing Flow
          </a>
          and the <a href="/PDF/insectamundi/InsectaMundi_ReorganizationDetails_2014.pdf" target="_blank" class="internal-link">2014 Reorganization Proposal</a>.
        </p>

        <div class="mt-4">
          The two most impactful changes we implemented were:
          <ul class="list-decimal pl-10 mt-2">
            <li>
              <b>Author Participation</b> – Authors now play a more active role in preparing their submissions. 
              See our <NuxtLink to="/insecta_mundi/authorguidelines" class="internal-link">Author Instructions</NuxtLink> for full details.
            </li>
            <li>
              <b>Review Editors</b> – We expanded the number and responsibilities of our <NuxtLink href="/insecta_mundi/journal#revieweditors" class="internal-link">Review Editors</NuxtLink> 
              (formerly Subject Editors) to ensure quality and consistency throughout the publication process.
            </li>
          </ul>
        </div>

        <p class="mt-4">
          Review Editors work closely with authors—not only to evaluate the scientific quality of submissions, but also to ensure each 
          manuscript meets high standards in formatting and electronic compatibility. These behind-the-scenes steps are essential for 
          smooth integration with our layout systems, and most editors learn this process through hands-on experience.
        </p>

        <p class="mt-4">
          To support both authors and editors, we provide detailed resources such as our 
          <a href="/PDF/insectamundi/InsectaMundi_FullGuidelines_2025.pdf" target="_blank" class="internal-link">Manuscript Preparation Rules & Guidelines</a> 
          and <a href="/PDF/insectamundi/InsectaMundi_EditorGuidelines_2014.pdf" target="_blank" class="internal-link">Editor Guidelines</a>. 
          We encourage everyone involved in the publication process to review these documents to better understand our expectations and workflow.
        </p>

        <p class="mt-4">
          If you're a Review Editor and have questions or would like to discuss our process further, please don't hesitate to reach out. 
          Below, you'll find a visual overview of the entire workflow.
        </p>
      </div>
      <div class="hidden lg:block w-[1px] bg-gray-300 self-stretch mx-6"></div>
      <!-- Right Sidebar component -->
      <InsectaMundiEditorRightSidebar />
    </div>
  </section>
</template>

<script setup>
import InsectaMundiEditorRightSidebar from './InsectaMundiEditorRightSidebar.vue';
</script>
