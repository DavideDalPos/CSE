<template>
  <InsectaMundiFestschrift
    title="Michael C. Thomas Festschrift"
    honoree="Michael C. Thomas"
    :issues="issues"
    published="December 25, 2020"
    cover="/images/otherpubs/FestSchrift/ThomasMC.jpg"
    pdf="https://drive.google.com/file/d/1gaDJLW-wPtYcmLRepRrtiKxoBI0oClio/view?usp=sharing"
  />
</template>

<script setup>
import InsectaMundiFestschrift from '~/components/InsectaMundi/InsectaMundiFestschrift.vue'

useHead({ title: 'Michael C. Thomas Festschrift · Insecta Mundi' })

const issues = ['0829', '0830', '0831', '0832', '0833', '0834', '0835', '0836', '0837', '0838', '0839', '0840', '0841', '0842', '0843']
</script>
