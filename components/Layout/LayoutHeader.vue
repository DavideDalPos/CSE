<template>
  <header>
    <div
      class="fixed w-full z-50 bg-gray-800 backdrop-blur-xl shadow-xl font-serif"
    >
      <div
        class="container mx-auto h-16 flex justify-between items-center z-10"
      >
        <a
          href="/"
          class="flex flex-row items-center gap-2 text-white hover:text-quaternary"
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
                <NuxtLink
                  :to="link"
                  class="flex items-center gap-1 hover:foreground cursor-pointer"
                >
                  <span
                    class="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-yellow-400 before:w-0 hover:before:w-full hover:text-quaternary before:transition-all before:duration-300"
                  >
                    {{ label }}
                  </span>
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
                </NuxtLink>

                <div class="pt-2 absolute hidden group-hover:block">
                  <ul
                    class="w-40 py-0 left-0 top-full shadow-md bg-setenary text-white"
                  >
                    <li
                      v-for="(item, index) in submenu"
                      :key="index"
                      class="relative group/sub"
                    >
                      <template v-if="item.submenu">
                        <NuxtLink
                          :to="item.link"
                          class="group flex justify-between w-full px-4 py-2 hover:bg-quaternary cursor-pointer"
                        >
                          {{ item.label }}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 transition-transform rotate-180 group-hover/sub:rotate-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </NuxtLink>

                        <ul
                          class="absolute left-full top-0 mt-0 ml-1 w-40 shadow-md bg-primary text-foreground hidden group-hover/sub:block"
                        >
                          <li
                            v-for="(subItem, subIndex) in item.submenu"
                            :key="subIndex"
                          >
                            <NuxtLink
                              :to="subItem.link"
                              class="block px-4 py-2 hover:bg-quaternary"
                            >
                              {{ subItem.label }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        <NuxtLink
                          :to="item.link"
                          class="block px-4 py-2 hover:bg-quaternary"
                        >
                          {{ item.label }}
                        </NuxtLink>
                      </template>
                    </li>
                  </ul>
                </div>
              </div>

              <NuxtLink
                v-else
                :to="link"
                class="relative hover:foreground before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-yellow-400 before:w-0 hover:before:w-full before:transition-all before:duration-300 hover:text-quaternary"
              >
                {{ label }}
              </NuxtLink>
            </template>

            <!-- Vertical Divider -->
            <div class="w-px h-6 bg-white/30 self-center"></div>

            <!-- Facebook Icon -->
            <div class="flex items-center gap-2 text-white">
              <NuxtLink
                to="https://www.facebook.com/CSE.InsectaMundi"
                target="_blank"
                class="text-white hover:text-quaternary"
                title="Follow us on Facebook"
              >
                <IconFacebook class="w-4 h-4" />
              </NuxtLink>
              <NuxtLink
                to="https://x.com/CSE_at_FSCA"
                target="_blank"
                class="hover:text-quaternary"
                title="Follow us on X"
              >
                <IconX class="w-4 h-4" />
              </NuxtLink>
              <NuxtLink
                to="https://github.com/DavideDalPos/CSE/issues"
                target="_blank"
                class="hover:text-quaternary"
                title="Submit your issue on the website"
              >
                <IconGitHub class="w-4 h-4" />
              </NuxtLink>
            </div>
          </nav>
        </div>

        <MobileNavbar :menu="menu" />
      </div>
    </div>
    <div class="h-16" />
  </header>
</template>

<script setup>
import IconGitHub from '../Icon/IconGitHub.vue';
import IconX from '../Icon/IconX.vue';

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
      { label: 'Our Journal', link: '/insecta_mundi/journal' },
      {
        label: 'Publications',
        submenu: [
          {
            label: 'Current Publications',
            link: '/insecta_mundi/current_issue'
          },
          { label: 'All Publications', link: '/insecta_mundi' },
          {
            label: 'Festschrifts',
            link: '/other_publications/CSE#festschrifts'
          }
        ]
      },
      { label: 'Author Instructions', link: '/insecta_mundi/authorguidelines' },
      { label: 'Editor Information', link: '/insecta_mundi/editorinfo' },
      { label: 'Ethic Statements', link: '/insecta_mundi/ethic' }
    ]
  },
  {
    label: 'Other Publications',
    submenu: [
      { label: 'CSE Publications', link: '/other_publications/CSE' },
      { label: 'FSCA Publications', link: '/other_publications/FSCA' }
    ]
  },
  {
    label: 'Travel Grants',
    submenu: [
      { label: 'Peck Grant', link: '/grants' },
      { label: 'Guidelines', link: '/grants#grantguidelines' },
      { label: 'Previous Reports', link: '/grants#reports' },
      { label: 'Other Grants Archive', link: '/grants#reports' },
      { label: 'Trip to Guatemala', link: '/grants#guatemala' }
    ]
  },
  {
    label: 'Annual Conference',
    submenu: [
      { label: 'CSE Conference', link: '/meetings' },
      { label: '2026 Conference', link: '/comingsoon' },
      { label: 'Conference Archive', link: '/meetings#meetingarchive' },
      { label: 'Poster Archive', link: '/meetings#posterarchive' }
    ]
  },
  {
    label: 'Membership & Donations',
    link: '/membership'
  }
]
</script>
