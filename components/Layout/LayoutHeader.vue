<template>
  <header>
    <div class="fixed w-full z-50 bg-primary/80 backdrop-blur-xl shadow-xl">
      <div
        class="container mx-auto h-16 flex justify-between items-center px-8 z-10"
      >
        <a
          href="#"
          class="flex flex-row items-center gap-2 text-white"
        >
          Center for Systematic Entomology (CSE)
        </a>

        <div class="lg:flex flex-row gap-6 text-sm hidden text-white">
          <nav class="flex flex-row gap-8 items-center">
            <template v-for="{ label, link, submenu } in menu">
              <div
                v-if="submenu"
                class="relative group"
              >
                <button class="hover:underline flex items-center gap-1 hover:text-yellow-900">
                  {{ label }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 transition-transform group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div class="pt-2 absolute hidden group-hover:block">
                  <ul class="w-40 py-0 left-0 top-full shadow-md bg-secondary text-gray-800">
                    <li
                      v-for="{ label, link } in submenu"
                      :key="link"
                    >
                      <NuxtLink
                        :to="link"
                        class="block px-4 py-2 hover:bg-gray-200/75"
                      >
                        {{ label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <NuxtLink
                v-else
                :to="link"
                class="hover:underline hover:text-yellow-900"
                >{{ label }}</NuxtLink
              >
            </template>
          </nav>
        </div>
        <MobileNavbar :menu="menu" />
      </div>
    </div>
    <div class="h-16" />
  </header>
</template>

<script setup>
const menu = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About us',
    link: '/about'
  },
  {
    label: 'Insecta Mundi',
    submenu: [
      // Submenu items
      { label: 'Our Journal', link: '/insecta_mundi/journal' },
      { label: 'New Publications', link: '/insecta_mundi/current_issue' },
      { label: 'Archive', link: '/insecta_mundi' },
      { label: 'Author Instructions', link: '/insecta_mundi/authorguidelines' },
      { label: 'Editor Information', link: '/insecta_mundi/editorinfo' },
      { label: 'Ethic Statements', link: '/insecta_mundi/ethic' }
    ]
  },
  {
    label: 'Other Publications',
    submenu: [
      // Submenu items
      { label: 'CSE Publications', link: '/other_publications/CSE' },
      { label: 'FSCA Arthropods of Florida', link: '/other_publications/FSCAArthropods' },
      { label: 'FSCA Occasional Papers', link: '/other_publications/FSCAOccasional' }
    ]
  },
  {
    label: 'Travel Grants',
    submenu: [
      // Submenu items
      { label: 'Peck Grant', link: '/grants' },
      { label: 'Guidelines', link: 'grants#grantguidelines' },
      { label: 'Previous Reports', link: 'grants#reports' },
      { label: 'Other Grants Archive', link: 'grants#reports' },
      { label: 'Trip to Guatemala', link: 'grants#guatemala' }
    ]
  },
  {
    label: 'Annual Conference',
    submenu: [
      // Submenu items
      { label: 'CSE Conference', link: '/meetings' },
      { label: '2026 Conference', link: '/comingsoon' },
      { label: 'Conference Archive', link: 'meetings#meetingarchive' },
      { label: 'Poster Archive', link: 'meetings#posterarchive' }
    ]
  },
  {
    label: 'Membership & Donations',
    link: '/membership'
  }
]
</script>
