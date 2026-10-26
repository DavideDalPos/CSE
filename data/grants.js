// =============================================================================
//  PECK FUND / GRANTS — the only file to edit for the Grants page
// =============================================================================
//  • Deadlines and the maximum award also feed the countdown and the home page.
//  • The committee members come from data/people.js (grantCommittee).
//  • Add new reports at the TOP of `reports` once a visit is completed.
// =============================================================================

export default {
  // Maximum award in US dollars. Leave null for no fixed limit (budget is reviewed case by case).
  maxAward: null,
  // Proposal deadlines (month-day), 11:59 PM Eastern Time
  deadlines: ['01-15', '07-15'],
  email: 'csentomology@gmail.com',
  address: ['Grants Committee', 'Center for Systematic Entomology', 'P.O. Box 141874', 'Gainesville, FL 32614-1874, USA'],
  curatorsUrl: 'https://thefsca.org/about/curators/',

  // Reports from Peck Fund visits, newest first.
  // `researcher` and `taxon` may list several names separated by <br>
  reports: [
    {
    year: '2025',
    researcher: 'Przybylowicz, Lukasz',
    title: 'Untangling of the Arctiinae (Lepidoptera: Erebidae) diversity in the collection of the MGCL & FSCA – a hunt for new species',
    taxon: 'Arctiinae (Lepidoptera)',
    pdf: 'https://drive.google.com/file/d/1mLIySpf4UDBfuazTnZVL1TL61fno_J9O',
  },
  {
    year: '2024',
    researcher: 'Lagos-Kutz, Doris',
    title: 'The genus <i>Aphis</i>',
    taxon: 'Aphididae (Hemiptera)',
    pdf: 'https://drive.google.com/file/d/1DlWZeDcthGZdoi-5rbG6KLXojYOZKZrb/view?usp=sharing',
  },
  {
    year: '2024',
    researcher: 'Milne, Mark',
    title: 'A taxonomic revision of the wetland-adapted dwarf spider genus, <i>Floricomus</i> (Araneae: Linyphiidae)',
    taxon: 'Linyphiidae (Araneae)',
    pdf: 'https://drive.google.com/file/d/1p1BaxA9bnttGdpKANyJHrfPGDMEZG7-Y/view?usp=sharing',
  },
  {
    year: '2024',
    researcher: 'Solomon, Hendrix',
    title: 'Cixiid planthopper genus <i>Melanoliarus</i>',
    taxon: 'Cixiidae (Hemiptera)',
    pdf: 'https://drive.google.com/file/d/1B8FlRHfR5TA9vlqzZM6P31XKTm3142Ve',
  },
  {
    year: '2023',
    researcher: 'Goff, Roy',
    title: 'Lepidoptera',
    taxon: 'Lepidoptera',
    pdf: 'https://drive.google.com/file/d/1jWI1jQh_UlPwcyFF9UdQ8Ik5-bBbKEur/view?usp=sharing',
  },
  {
    year: '2023',
    researcher: 'Evans, Arthur <br> Ivanov, Kaloyan',
    title: 'Curation of unidentified Melolonthinae (Scarabaeidae) and Formicidae (Hymenoptera)',
    taxon: 'Scarabaeidae (Coleoptera) <br> Formicidae (Hymenoptera)',
    pdf: 'https://drive.google.com/file/d/1p3rouaVGdet4Wmn3brlDUgvEzN1bM2dP/view?usp=sharing',
  },
  {
    year: '2023',
    researcher: 'Anderson, Robert',
    title: 'Curation of unidentified Curculionidae (Coleoptera), part 1',
    taxon: 'Curculionidae (Coleoptera)',
    pdf: 'https://drive.google.com/file/d/1Mdn3cUajZRijL6h5EJVDsUHPVby01yLM/view?usp=sharing',
  },
  {
    year: '2022',
    researcher: 'Sutherland, Rachel',
    title: 'Color evolution in Erotylidae (Coleoptera)',
    taxon: 'Erotylidae (Coleoptera)',
    pdf: 'https://drive.google.com/file/d/1GXmFTGujMEd-2ioapWOpYygc0Rig1jZS/view?usp=sharing',
  },
  {
    year: '2020',
    researcher: 'Ortiz-Acevedo, Elena',
    title: 'Exploring mimicry in Neotropical butterflies: a morphological and geographical approach',
    taxon: 'Nymphalidae (Lepidoptera)',
    pdf: 'https://drive.google.com/file/d/1Wtu8mPZcZ27atIc8R9CYa79hhXRhx5qN/view?usp=sharing',
  },
  {
    year: '2020',
    researcher: 'Orfinger, Alexander B.',
    title: 'Taxonomic Revision of <i>Polycentropus</i> (Trichoptera: Polycentropodidae) from the Eastern Nearctic',
    taxon: 'Polycentropodidae (Trichoptera)',
    pdf: 'https://drive.google.com/file/d/19txfGJTCK4WUVYem1gaj9oIwJu-jusuU/view?usp=sharing',
  },
  {
    year: '2019',
    researcher: ' Domínguez León, Daniel E.',
    title: 'Systematics of the genus <i>Oxacis</i> LeConte (Coleoptera: Oedemeridae)',
    taxon: 'Oedemeridae (Coleoptera)',
    pdf: 'https://drive.google.com/file/d/1qbs3QvPBUMMNnXLN6fpkfmUFsNwtI2jK/view?usp=sharing',
  },
  {
    year: '2019',
    researcher: 'Sotto-Alviola, Marnelli P.',
    title: 'Springtails (Hexapoda: Collembola) collection, preservation, morphology, taxonomy and identification training',
    taxon: 'Collembola',
    pdf: 'https://drive.google.com/file/d/1da5A-PQ4xIwFARylvw3XrMBbzcNAgrwx/view?usp=sharing',
  },
  {
    year: '2019',
    researcher: 'Ardila-Camacho, Adrian',
    title: 'Systematics of the mantidfly subfamily Symphrasinae (Neuroptera: Mantispidae)',
    taxon: 'Mantispidae (Neuroptera)',
    pdf: 'https://drive.google.com/file/d/17rDh5wKp1AsuavW9KimMnhUb62xkijiQ/view?usp=sharing',
  },
  {
    year: '2018',
    researcher: 'Shirai, Leila T.',
    title: 'The contribution of the developmental hierarchy in morphological diversification',
    taxon: 'Nymphalidae (Lepidoptera) <br> Saturniidae (Lepidoptera)',
    pdf: 'https://drive.google.com/file/d/19K6CGyYIlV4RwUWBiY0Nplhswg1q6jxb/view?usp=sharing',
  },
],

  // Publications that came out of Peck Fund visits
  publications: [
    {
      text: `Hendrix, S.V. & Bartlett, C.R. (2025) Reclassification of the Planthopper 
      Genus <i>Melanoliarus</i> Fennah, 1945 (Hemiptera: Fulgoromorpha: Cixiidae), primarily North of Mexico, 
      with Notes on American Pentastirini. <i>Zootaxa</i>, 5619 (1), 1–87.`,
      doi: 'https://doi.org/10.11646/zootaxa.5619.1.1',
    },
  ],

  // Earlier CSE grants (before the Peck Fund): 'year - recipient'
  earlierGrants: [
  '2018 - Rowland Shelley',
  '2018 - Leila Shirai',
  '2018 - G.B. Edwards',
  '2018 - Adam Wallner',
  '2017 - Oliver Keller',
  '2017 - Michael Thomas',
  '2017 - Javier Martinez',
  '2017 - Daniel Burckhardt',
  '2016 - Terry Erwin',
  '2016 - Rich Leschen',
  '2016 - Gareth Powell',
  '2015 - Rowland Shelley',
  '2015 - James Schlachta',
  '2015 - Allen L. Norrbom',
  '2014 - Fabio Laurindo da Silva',
  '2013 - Marcus Guidoti',
  '2012 - H. Gaska-Alvarez',
  '2011 - Rowland Shelley',
  '2011 - Laura T. Miller',
  '2011 - Fred Skillman',
  '2011 - Elena Ortez Acevedo',
  '2010 - G.B. Edwards',
  '2010 - Charles Staines, Jr.',
  '2010 - Carlos Naranjo Lopez',
  '2009 - Gary Steck & Bruce Sutton',
  '2009 - Fabio Laurindo da Silva',
  '2009 - Daniel Perez-Gelabert',
  '2008 - Eugenio H. Nearns',
  '2006 - Eugenio H. Nearns',
  '2004 - Daniel Burckhardt',
  '2002 - Rowland Shelley',
  '2002 - Allen Brady',
  '2001 - Thomas Henry',
  '2001 - Mauricio Barreto',
  '2001 - Ingrid Quintero Silva',
  '2001 - F.W. Quednau',
  '2001 - Allen R. Brady',
  '2000 - Stephen W. Wilson',
  '2000 - Scott McCleve',
  '2000 - Nereida Mestre',
  '2000 - Nadine L. Kriska',
  '2000 - Michele B. Price',
  '1997 - Specialty Employee Leasing, Inc.',
  '1997 - Ray Jones',
  '1997 - Katherine B. Gregg',
  '1997 - Julio Antonio Genaro',
  '1996 - Kevina Vulinec',
  '1996 - James T. Goodwin',
  '1996 - Gordon R. Ultsch'
  ]
}
