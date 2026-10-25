<template>
  <InsectaMundiFestschrift
    title="Robert E. Woodruff Festschrift"
    honoree="Robert E. Woodruff"
    :issues="issues"
    published="February 24, 2022"
    cover="/images/otherpubs/FestSchrift/Woodruff.jpg"
    pdf="https://drive.google.com/file/d/1136I4JY4DOcdw4TylLaPQyZNvuijNANo/view?usp=sharing"
  />
</template>

<script setup>
import InsectaMundiFestschrift from '~/components/InsectaMundi/InsectaMundiFestschrift.vue'

useHead({ title: 'Robert E. Woodruff Festschrift · Insecta Mundi' })

const issues = ['0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919']
</script>
