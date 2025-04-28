<template>
  <section class="container mx-auto px-8 my-10">
    <h1 class="text-4xl">Editor Information</h1>
    <div class="flex justify-between gap-x-4 my-6">
      <!-- Left-side content for the text -->
      <div class="flex flex-col gap-4 w-full sm:max-w-[60%] lg:max-w-[70%] mt-2 text-justify">
          <p>
            In 2014, key members of our small Editorial staff had life-altering events and had to step back from assisting. 
            This put excessive strain on those that remained, who were unable to keep up with manuscript flow. 
            It was decided by the Editorial Board that a reorganization in manuscript flow and an expansion of 
            our volunteer base was required. These changes are discussed in the 
            <a href="/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf" target="_blank" class="internal-link">2014 Manuscript processing flow</a> 
            and in the 
            <a href="/PDF/insectamundi/InsectaMundi_ReorganizationDetails_2014.pdf" target="_blank" class="internal-link">2014 Reorganization proposal</a>.
          </p>
          <div class="mt-4">
            The two biggest changes are:
            <ul class="list-decimal pl-10">
              <li> 
                <b>Author Participation</b> – We require more author participation in manuscript preparation, 
                as discussed on <NuxtLink to="/authorguidelines" class="internal-link">Author Instructions</NuxtLink>
              </li>
              <li> 
                <b>Review Editors</b> – An increase in numbers and functions 
                of the <i>Review Editors</i> (previously called Subject Editors)
              </li>
            </ul>
          </div>
          <p class="mt-4">
            Our Review Editors work with authors to confirm the quality of the work as do other 
            journal's Subject Editors, but they also work to make sure the document is clean both in presentation and 
            electronic coding so that it will be compatible with layout programs. Most of this is a process learned by doing. 
            We provide 
            <a href="/PDF/insectamundi/InsectaMundi_FullGuidelines_2024.pdf" target="_blank" class="internal-link">Manuscript Preparation Rules & Guidelines</a>  
            and 
            <a href="/PDF/insectamundi/InsectaMundi_EditorGuidelines_2014.pdf" target="_blank" class="internal-link">Editor guidelines</a> 
            to assist in the process. Authors are welcome to look over the documents to better understand the full 
            publication process.
          </p>
          <p p class="text-justify mt-4">
            Review Editors are welcome to contact us to discuss the policies and procedures. Below you can visualize the whole process. 
          </p>
      </div>

      <!-- Right-side column containing the two boxes -->
      <div class="flex flex-col gap-4 w-full sm:max-w-[30%] lg:max-w-[25%] mt-3">
        <div class="border border-gray-300 px-6 py-4 rounded bg-white-200 shadow-lg">
          <h3 class="text-2xl font-bold mb-2 border-b border-black">Resources</h3>
          <ul class="text-base text-sm text-gray-800 space-y-2">
            <li class="flex items-center space-x-2">
              <a href="/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf" target="_blank" class="internal-link">
                2014 Manuscript Processing Flow
              </a>
               <img src="/images/PDF_file_icon.svg" alt="PDF icon" class="w-5 h-5">
            </li>
            <li class="flex items-center space-x-2">
              <a href="/PDF/insectamundi/InsectaMundi_ReorganizationDetails_2014.pdf" target="_blank" class="internal-link">2014 Reorganization Proposal</a>
              <img src="/images/PDF_file_icon.svg" alt="PDF icon" class="w-5 h-5">
            </li>
            <li class="flex items-center space-x-2">
              <a href="/PDF/insectamundi/InsectaMundi_EditorGuidelines_2014.pdf" target="_blank" class="internal-link">Editor Guidelines</a>
            <img src="/images/PDF_file_icon.svg" alt="PDF icon" class="w-5 h-5">
          </li>
          </ul>
        </div>
        <div class="border border-gray-300 px-6 py-4 rounded bg-white-200 shadow-lg">
          <h3 class="text-2xl font-bold mb-2 border-b border-black">Contacts</h3>
          <ul class="text-[15px] text-gray-800">
            <li> 
              <b>Chief Editor:</b> Davide Plotnik
            </li>
            <li> 
              <b>Assistant Editor:</b> Paul E. Skelley
            </li>
            <li> 
              <b>Email:</b><a href="mailto:insectamundi@gmail.com" class="text-blue-600 hover:underline transition ml-1">insectamundi@gmail.com</a>
            </li>
            <li> 
              <b>Address:</b> Center for Systematic Entomology, P.O. Box 141874, Gainesville, FL 32614-1874 USA
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-10">
  <figure>
    <img src="/images/Workflow_InsectaMundi.png" alt="Workflow" class="w-full max-w-5xl shadow-2xl border border-gray-300 rounded">
    <figcaption class="text-center text-base font-semibold mt-2">Insecta Mundi Manuscript Flow
      (more <a href="/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf" target="_blank" class="internal-link">here</a>)</figcaption>
  </figure>
</div>

  </section>
</template>
