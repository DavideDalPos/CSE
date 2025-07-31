<template>
  <section class="container mx-auto px-6 py-10 text-justify font-serif">
    <!-- Header -->
    <h1 class="text-5xl font-extrabold text-gray-800 mb-2 text-center">
      Membership & Donations
    </h1>
    <h2 class="text-xl font-medium text-gray-500 text-center -mt-1 mb-8">
      Support the
      <span class="font-semibold text-gray-700"
        >Center for Systematic Entomology</span
      >
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column: Membership and Donations Content -->
      <div class="col-span-2 pr-4 border-r border-gray-300">
        <!-- Membership Section -->
        <h1
          class="text-4xl font-extrabold text-gray-800 mb-2 text-center md:text-left"
        >
          Membership
        </h1>
        <h2
          class="text-xl font-medium text-gray-500 -mt-2 text-center md:text-left"
        >
          Join or renew your support
        </h2>

        <div class="prose max-w-max py-4">
          <p>
            By becoming a <strong>member</strong> of the
            <strong>Center for Systematic Entomology (CSE)</strong>, you
            directly support critical research and publication efforts in
            arthropod systematics, including the renowned journal
            <em>Insecta Mundi</em>.
          </p>
          <div>
            As a member, you will:
            <ul>
              <li>
                Receive <strong>free access</strong> to all published articles.
              </li>
              <li>
                Enjoy <strong>no page charges</strong> when publishing in
                <em>Insecta Mundi</em>.
              </li>
              <li>
                Get regular email notifications with direct download links to
                new publications.
              </li>
            </ul>
          </div>
          <p>
            Annual membership is <strong>only $40</strong> for individuals and
            institutions alike. Download the membership form
            <a
              href="/PDF/CSE_MembershipForm_2021.pdf"
              target="_blank"
              class="internal-link"
              >here</a
            >.
          </p>
          <p>
            Whether you're <strong>joining for the first time</strong> or
            <strong>renewing</strong>, you can securely pay using PayPal below.
          </p>
        </div>

        <!-- Membership VCard -->
        <div class="flex flex-col md:flex-row gap-4">
          <VCard class="md:w-2/3 bg-primary/30 border border-primary">
            <h2 class="text-2xl pb-2 text-gray-800">New or Existing Members</h2>
            <PaypalMembership />
          </VCard>
        </div>
        <div class="border-t border-gray-300 my-8 mt-10"></div>
        <!-- Donations Section -->
        <h1
          class="text-4xl font-extrabold text-gray-800 -mt-1 mb-2 text-center md:text-left"
        >
          Donations
        </h1>
        <h2
          class="text-xl font-medium text-gray-500 -mt-2 text-center md:text-left"
        >
          Every donation makes a lasting difference in our scientific mission
        </h2>

        <div class="prose max-w-max py-4">
          <p>
            We greatly appreciate your <strong>generous support</strong>.
            Donations help fund
            <strong>research, publishing, and outreach efforts</strong> in the
            field of systematic entomology.
          </p>
          <p>
            You may donate via PayPal using the form below, or mail a check to:
          </p>
          <div class="flex flex-col font-semibold">
            <span>Center for Systematic Entomology, Inc.</span>
            <span>PO Box 141874</span>
            <span>Gainesville, FL 32614-1874 USA</span>
          </div>
          <p>
            All donations are tax-deductible and go directly to support our
            mission.
          </p>
        </div>

        <!-- Donations VCard -->
        <div class="flex flex-col md:flex-row gap-4 mt-4">
          <VCard class="md:w-2/3 bg-gray-300 border border-gray-500">
            <h2 class="text-2xl pb-2 text-gray-800">Donate Online</h2>
            <PaypalDonations />
          </VCard>
        </div>

        <!-- Alternate Payment Info -->
        <div class="prose max-w-max my-8">
          <p>
            Prefer mailing a check or using another payment method? No problem.
            Please contact us at:
          </p>
          <div class="flex flex-col font-semibold">
            <span>📧 insectamundi@gmail.com</span>
            <span>📮 Center for Systematic Entomology, Inc.</span>
            <span>PO Box 141874, Gainesville, FL 32614-1874 USA</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Logo and Lifetime Membership List -->
      <div class="col-span-1 pl-4">
        <!-- Logo Component -->
        <MembershipRightColumn />
      </div>
    </div>
  </section>
</template>
