<template>
  <section class="container mx-auto px-8">
    <h1 class="text-4xl">CSE Membership</h1>

    <div class="prose max-w-max py-4">
      <p>
        Joining the Center for Systematic Entomology will assist both the FSCA
        and CSE projects, but most importantly, you will receive the world class
        insect systematics journal Insecta Mundi together with the ability to
        publish in this journal without page charges. All members receive
        notices by email when articles are published. These email notices
        provide links to each article in PDF form, which can be downloaded as
        desired.
      </p>

      <p>
        CSE membership is only $40, and is the same for individuals or
        institutions.
      </p>

      <p>
        CSE membership form is available
        <a
          href="https://www.dropbox.com/s/ecko2b8fcta7bhv/CSE_MembershipForm_2021.pdf?dl=0"
          >here</a
        >.
      </p>

      <p>
        Whether you're joining for the first time or renewing your membership,
        sending payment via PayPal Secure Payments is the safer, easier way to
        pay online!
      </p>
    </div>

    <div class="flex flex-row gap-4">
      <VCard class="w-1/3">
        <h2 class="text-2xl pb-2">New or Existing Members</h2>
        <PaypalMembership />
      </VCard>
      <VCard class="flex flex-col justify-between w-1/3">
        <div>
          <h2 class="text-2xl pb-2">Donations</h2>
          <p>
            The Center for Systematic Entomology welcomes all donations to
            support its research efforts in the area of arthropod systematics.
            Donations may be sent to the address below.
          </p>
          <p>
            Using PayPal Secure Payments is the safer, easier way to make
            donations online!
          </p>
        </div>
        <PaypalDonations />
      </VCard>
    </div>
    <div class="prose max-w-max my-4">
      <p>
        Payment in US dollars may also be made by check or money order from a US
        bank payable to Center for Systematic Entomology, Inc. If you prefer to
        send payment by other means, please contact:
      </p>
      <div class="flex flex-col">
        <span>insectamundi@gmail.com</span>
        <span>Center for Systematic Entomology, Inc. PO Box</span>
        <span>141874 Gainesville, FL 32614-1874 USA</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>
