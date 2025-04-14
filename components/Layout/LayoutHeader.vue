<template>
  <header>
    <div class="fixed w-full z-50 bg-primary backdrop-blur-sm shadow-lg">
      <div
        class="container mx-auto h-16 flex justify-between items-center px-8 z-10"
      >
        <a
          href="#"
          class="flex flex-row items-center gap-2"
        >
          Center for Systematic Entomology
        </a>

        <div class="lg:flex flex-row gap-6 text-sm hidden">
          <nav class="flex flex-row gap-8 items-center">
            <template v-for="{ label, link, submenu } in menu">
              <div
                v-if="submenu"
                class="relative group"
              >
                <button class="hover:underline flex items-center gap-1">
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
                  <ul class="w-40 py-0 left-0 top-full shadow-md bg-secondary">
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
      { label: 'Editorial Staff', link: '/insecta_mundi/editorialstaff' },
      { label: 'Author Instructions', link: '/insecta_mundi/authorguidelines' },
      { label: 'Editor Information', link: '/insecta_mundi/editorinfo' },
      { label: 'Ethic Statements', link: '/insecta_mundi/ethic' },
      { label: 'Current Issue', link: '/insecta_mundi' }
    ]
  },
  {
    label: 'Other Publications',
    submenu: [
      // Submenu items
      { label: 'CSE Memoirs', link: '/memoirs' },
      { label: 'CSE Newsletter', link: '/newsletter' },
      { label: 'FSCA Publications', link: '/grants' }
    ]
  },
  {
    label: 'Travel grants',
    submenu: [
      // Submenu items
      { label: 'Peck Grant', link: '/grants' },
      { label: 'Guidelines', link: 'grants#grantguidelines' },
      { label: 'Previous Reports', link: 'grants#reports' },
      { label: 'Archive', link: 'grants#reports' },
      { label: 'Trip to Guatemala', link: 'grants#guatemala' }
    ]
  },
  {
    label: 'Annual meetings',
    link: '/meetings'
  },
  {
    label: 'Membership',
    link: '/membership'
  },
  {
    label: 'Donations',
    link: '/donations'
  }
]
</script>
