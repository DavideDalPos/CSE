// Membership, donations and lifetime members — edit here, the website updates everywhere
// (membership page, donations page and the home page).
export default {
  // Annual fee in US dollars
  fee: 40,

  // Membership form for mail-in payment
  form: '/PDF/CSE_MembershipForm_2021.pdf',

  // PayPal "Pay now" button. The years below must match the options defined
  // in the PayPal button settings (paypal.com → Tools → PayPal buttons).
  // The current year is pre-selected automatically.
  paypalMembershipButton: '2NX8BAGBQES2W',
  paypalYears: [2021, 2022, 2023, 2024, 2025, 2026],

  // PayPal "Donate" button
  paypalDonateButton: 'TSHJD5JGVMV98',

  contact: 'insectamundi@gmail.com',
  address: ['Center for Systematic Entomology, Inc.', 'PO Box 141874', 'Gainesville, FL 32614-1874, USA'],

  // Legal statement shown at the bottom of the page
  registration: [
    'The Center for Systematic Entomology is a 501(c)(3) nonprofit registered in Florida, #CH66597, EIN 59-2740566.',
    'A copy of the official registration and financial information may be obtained from the Division of Consumer Services by calling toll-free (800-435-7352) within the state.',
    'Registration does not imply endorsement, approval, or recommendation by the state.'
  ],

  // Honorary lifetime members — `since` is the date the membership was awarded,
  // `award` a link to the award certificate, deceased: true adds a †
  lifetimeMembers: [{
    name: 'Jacqueline Y. Miller',
    since: 'February 10, 2024',
    image: '/images/lifetimemembers/Miller_Jacqueline.jpg',
    deceased: true,
    award: 'https://drive.google.com/file/d/1t_a4rfDOdQfJMj4lDn3LdoAgbCn3xJ5s/view?usp=sharing',
  },
  {
    name: 'Robert E. Woodruff',
    since: 'January 18, 2020',
    image: '/images/lifetimemembers/Woodruff.jpg',
    deceased: true,
    award: 'https://drive.google.com/file/d/1-e7GNxyn1z2J9o9NfEAbKve087T6nQfc/view?usp=sharing',
  },
    {
    name: 'Stewart B. Peck',
    since: 'February 29, 2024',
    image: '/images/lifetimemembers/Stewart_Peck.jpg',
    deceased: false,
    award: 'https://drive.google.com/file/d/1fJzgICkPmZL3pMNCaPLA6VNUrJvYo5Ss/view?usp=sharing',
  },
      {
    name: 'Howard Frank',
    since: 'April 3, 2021',
    image: '/images/lifetimemembers/HowardFrank.jpg',
    deceased: true,
    award: 'https://drive.google.com/file/d/1whsjPiaKrFGZFpbuYVXjvKds-nGbm4HJ/view?usp=sharing',
  }
  ]
}
