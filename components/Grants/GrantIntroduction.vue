<template>
    <section class="container mx-auto px-8 py-10">
      <h1 class="text-4xl">The Peck Collection Enhancement Endowment</h1>
      <div class="flex flex-col gap-4 my-8">
        <p class= "justify-text">
            In 2021, <b>Stewart</b> and <b>Jarmila Peck</b> established the <b>Stewart and Jarmila Peck Collection Enhancement Endowment</b> (aka the <b>Peck Fund</b>) 
            with the Center for Systematic Entomology (CSE). 
            The primary purpose of the <b>Peck Fund</b> is to facilitate research travels to 
            the <a
            href="https://thefsca.org"
            target="_blank"
            class="external-link"
            >Florida State Collection of Arthropods (FSCA)</a
          > to work with and ultimately improve the collections.
        </p>
      </div>
      <div class="flex flex-col gap-3 my-8">
        Enhanced curation could include:
        <ul class="list-disc list-inside pl-7">
          <li><b>Specimen sorting and identification</b></li>
           <li><b>Designation of types</b></li>
            <li><b>Updated taxonomy</b></li>
        </ul>
      </div>
      <div class="flex flex-col gap-4 my-8">
        <p>Grant awards are limited, and proposals will be evaluated by the <a href="about#GGECommittee" target="_blank" class="internal-link">Gifts, Grants and Endowment (GGE) Committee</a> 
        semiannually (<b>January 15th</b> and <b>July 15th</b>) 
        and approved by the <a href="about#board" target="_blank" class="internal-link">CSE Board of Directors</a>. Applicants must be CSE members and should contact the appropriate curator at the FSCA to inquire about potential work.</p>
    </div>
    <div class="flex flex-col gap-3 my-8">
      Applicants should submit a short (1–2 pages) formal proposal composed of the following:
        <ul class="roman-list list-inside pl-7">
          <li><b>Title</b></li>
          <li><b>Author(s)</b></li>
          <li><b>Author’s Affiliation & Contact Information</b></li>
          <li><b>FSCA Contact/Collaborator</b></li>
          <li><b>Contribution to FSCA Improvement</b></li>
          <li><b>Budget and justification (itemized)</b></li>
          <li><b>References</b></li>
          </ul>
    </div>
        </section>
  </template>

<style scoped>
.roman-list {
  list-style-type: none; /* Removes default bullets */
  counter-reset: roman-counter; /* Initialize the counter */
  padding-left: 4em;
}

.roman-list li {
  counter-increment: roman-counter; /* Increment the counter for each item */
  position: relative;
}

.roman-list li::before {
  content: counter(roman-counter, upper-roman) ". "; /* Use Roman numerals */
  position: absolute;
  left: -2em; /* Adjust the position as needed */
}
</style>


<script></script>