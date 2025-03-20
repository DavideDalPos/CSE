<template>
  <header>
    <div
      class="fixed w-full z-50 bg-opacity-50 backdrop-blur-sm"
      style="background-color: #ead7bb"
    >
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
            <NuxtLink
              v-for="{ label, link } in menu"
              :to="link"
            >
              {{ label }}
            </NuxtLink>
            <span>|</span>
            <div class="flex flex-row gap-4 items-center">
              <a href="https://x.com/CSE_at_FSCA"><IconX class="h-4" /></a>
              <a href="https://www.facebook.com/CSE.InsectaMundi"
                ><IconFacebook class="h-4"
              /></a>
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
const menu = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About us',
    link: '/'
  },
  {
    label: 'Insecta Mundi',
    link: '/insecta_mundi'
  },
  {
    label: 'Publications',
    link: '/publications'
  },
  {
    label: 'Travel grants',
    link: '/grants'
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
