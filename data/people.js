// =============================================================================
//  PEOPLE OF THE CSE — the only file to edit when people or roles change
// =============================================================================
//  Each person is written ONCE in `people` (name, photo, profile link).
//  Everywhere else you only use their short id (e.g. 'paul-skelley'), so a new
//  photo or a corrected name updates the About page, the Grants page and the
//  Insecta Mundi sidebar at the same time.
//
//  BOARD TERMS: list every term, newest first. The website works out by itself
//  which terms are current (the term's last year is this year or later) and
//  which go to the "Former board members" timeline. Nothing to move by hand.
//  For past members without a photo you can simply type the name instead of an id.
// =============================================================================

export default {
  people: {
    'felipe-soto-adames': { name: 'Felipe Soto-Adames', photo: '/images/boardmembers/FelipeSotoAdames.jpg', link: 'https://scholar.google.com/citations?hl=en&user=6eYGsisAAAAJ' },
    'evan-waite': { name: 'Evan Waite', photo: '/images/boardmembers/EvanWaite.jpg', link: 'https://scholar.google.com/citations?user=Otu3qVgAAAAJ&hl=en' },
    'erick-rodriguez': { name: 'Erick Rodriguez', photo: '/images/boardmembers/ErickRodriguez.jpg', link: 'https://scholar.google.com/citations?user=-GJHl-cAAAAJ&hl=en' },
    'gary-j-steck': { name: 'Gary J. Steck', photo: '/images/boardmembers/GarySteck.jpg', link: 'https://scholar.google.com/citations?hl=en&user=fU8gNqYAAAAJ' },
    'erin-powell': { name: 'Erin Powell', photo: '/images/boardmembers/ErinPowell.jpg', link: 'https://scholar.google.co.nz/citations?user=x-rdi2wAAAAJ&hl=en' },
    'paul-skelley': { name: 'Paul Skelley', photo: '/images/boardmembers/PaulSkelley.jpg', link: 'https://scholar.google.com/citations?hl=en&user=l-pEQHEAAAAJ' },
    'alexander-orfinger': { name: 'Alexander Orfinger', photo: '/images/boardmembers/AlexOrfinger.jpg', link: 'https://scholar.google.com/citations?hl=en&user=fcMo3w0AAAAJ' },
    'david-plotkin': { name: 'David Plotkin', photo: '/images/boardmembers/DavidPlotkin.jpg', link: 'https://scholar.google.com/citations?hl=en&user=OjvtqRQAAAAJ' },
    'emily-roeder': { name: 'Emily Roeder', photo: '', link: '' },
    'sandor-kelly': { name: 'Sandor Kelly', photo: '/images/boardmembers/ShawnKelly.jpg', link: 'https://sciences.ucf.edu/biology/bugcloset/people/kelly/' },
    'alessandra-pandolfi': { name: 'Alessandra Pandolfi', photo: '/images/boardmembers/AlessandraPandolfi.jpg', link: 'https://scholar.google.com/citations?hl=en&user=tkQVCYkAAAAJ' },
    'david-serrano': { name: 'David Serrano', photo: '/images/boardmembers/DavidSerrano.jpg', link: 'https://start.broward.edu/directory/faculty.aspx?UserName=dserrano' },
    'robert-forsyth': { name: 'Robert Forsyth', photo: '', link: '' },
    'jose-luis-pereira': { name: 'José Luis Pereira', photo: '/images/boardmembers/JosePereira.jpg', link: 'https://www.linkedin.com/in/jos%C3%A9-luis-pereira-a4750bb7/' },
    'davide-dal-pos': { name: 'Davide Dal Pos', photo: '/images/boardmembers/DavideDalPos.jpg', link: 'https://scholar.google.com/citations?user=wYj3d_oAAAAJ' }
  },

  // Officers (Executive Committee) and the year they serve
  officers: {
    year: '2026',
    roles: [
      { role: 'President', who: 'felipe-soto-adames' },
      { role: 'Vice President', who: 'evan-waite' },
      { role: 'Treasurer', who: 'erick-rodriguez' },
      { role: 'Secretary', who: 'gary-j-steck' }
    ]
  },

  // Board of Directors — three-year terms, newest first
  boardTerms: [
    { term: '2026–2028', members: ['erin-powell', 'paul-skelley', 'evan-waite', 'erick-rodriguez'] },
    { term: '2025–2027', members: ['alexander-orfinger', 'david-plotkin', 'emily-roeder', 'felipe-soto-adames'] },
    { term: '2024–2026', members: ['sandor-kelly', 'gary-j-steck', 'alessandra-pandolfi', 'david-serrano'] },
    { term: '2023–2025', members: ['davide-dal-pos', 'Kyle Schnepp', 'paul-skelley', 'erin-powell', 'Oliver Keller (resigned 2023)'] },
    { term: '2021–2023', members: ['Mark Rothschild', 'gary-j-steck', 'alessandra-pandolfi', 'david-serrano'] },
    { term: '2020–2022', members: ['Kyle Schnepp', 'John Leavengood', 'davide-dal-pos', 'Oliver Keller'] },
    { term: '2019–2021', members: ['felipe-soto-adames', 'Krystal Ashman', 'david-plotkin', 'Julieta Brambila'] },
    { term: '2018–2020', members: ['William Grogan', 'Mark Rothschild', 'Eric Rodriguez', 'gary-j-steck'] },
    { term: '2017–2019', members: ['paul-skelley', 'Kyle Schnepp', 'Bob Woodruff', 'Oliver Keller'] },
    { term: '2016–2018', members: ['Joe Eger', 'Rudi Scheffrahn', 'david-plotkin', 'Julieta Brambila'] },
    { term: '2015–2017', members: ['Robert Woodruff', 'paul-skelley', 'Jiri Hulcr', 'Andrei Sourakov'] },
    { term: '2014–2016', members: ['(coming soon)'] },
    { term: '2013–2015', members: ['Mark Rothschild', 'William Grogan', 'Rudi Scheffrahn', 'gary-j-steck'] },
    { term: '2012–2014', members: ['paul-skelley', 'Trevor Smith', 'Andrei Sourakov', 'Robert Woodruff'] },
    { term: '2011–2013', members: ['Julieta Brambila', 'Joe Eger', 'Howard Frank', 'Ian Stocks'] },
    { term: '2010–2012', members: ['William Grogan', 'Rudi Scheffrahn', 'gary-j-steck'] },
    { term: '2009–2011', members: ['Trevor Smith', 'Clare Scott', 'Andrei Sourakov', 'Robert Woodruff'] },
    { term: '2008–2010', members: ['Julieta Brambila', 'Joe Eger', 'J. Howard Frank', 'Deborah Matthews Lott'] },
    { term: '2007–2009', members: ['J. Howard Frank', 'gary-j-steck', 'Jennifer M. Zaspel', 'Seth M. Bybee'] },
    { term: '2006–2008', members: ['Jan Peters', 'Trevor Smith', 'Andrei Sourakov', 'Robert E. Woodruff'] },
    { term: '2005–2007', members: ['Ronald D. Cave', 'Julieta Brambila', 'Bruce D. Sutton', 'Michael C. Thomas'] },
    { term: '2004–2006', members: ['Marc A. Branham', 'Joe Eger', 'J. Howard Frank', 'gary-j-steck'] },
    { term: '2003–2005', members: ['G.B. Edwards', 'Jan Peters', 'Paul E. Skelley', 'Robert E. Woodruff'] },
    { term: '2002–2004', members: ['Avas B. Hamon (retired, Greg Hodges appointed to fill term)', 'Bruce D. Sutton', 'Michael C. Thomas', 'Robert H. Turnbow, Jr.'] },
    { term: '2001–2003', members: ['Eugene Gerberg', 'Dale Habeck', 'gary-j-steck', 'Cal Welbourn'] },
    { term: '2000–2002', members: ['Richard A. Baranowski', 'Byrd K. Dozier', 'G.B. Edwards', 'Robert E. Woodruff'] },
    { term: '1999–2001', members: ['John M. Kingsolver', 'John Reinert', 'Michael C. Thomas', 'William B. Peters (deceased, Avas B. Hamon appointed to fill term)'] },
    { term: '1998–2000', members: ['Eugene Gerberg', 'Susan Halbert', 'gary-j-steck', 'Cal Welbourn'] }
  ],

  // Insecta Mundi editorial team (shown on the About page and in the journal sidebar)
  insectaMundi: [
    { role: 'Chief Editor', who: 'david-plotkin', email: 'insectamundi@gmail.com' },
    { role: 'Assistant Editor', who: 'paul-skelley', email: 'insectamundi@gmail.com' },
    { role: 'Head Layout Editor', who: 'robert-forsyth', email: 'rforsyth@telus.net' }
  ],

  // Gifts, Grants & Endowments Committee (About page and Grants page)
  grantCommittee: [
    { role: 'Chair & FSCA Representative', who: 'sandor-kelly' },
    { role: 'CSE Assistant Treasurer', who: 'paul-skelley' },
    { role: 'CSE President', who: 'felipe-soto-adames' }
  ],

  // Website team (About page and footer credit)
  webTeam: [
    { role: 'Webmaster Supervisor', who: 'jose-luis-pereira' },
    { role: 'Webmaster Associate', who: 'davide-dal-pos' }
  ]
}
