<template>
    <section class="container mx-auto px-8 py-10 -mb-8">
      <h1 class="text-4xl font-semibold text-gray-800 mb-8">Archive</h1>
      <div class="flex flex-col gap-4 my-8">
        <p>
          Since 1991, numerous other grants have been awarded. Recipients include:
        </p>
      </div>
      
      <!-- Two-column list -->
      <div class="two-column-list">
        <ul class="list-container">
          <li v-for="(item, index) in items" :key="index" class="list-item">
            <span class="year">{{ item.split(" - ")[0] }} - </span>
            <!-- Check if the item matches "Gary Steck & Bruce Sutton" -->
            <span v-if="item === '2009 - Gary Steck & Bruce Sutton'" class="name">
              <a href="#guatemala" class="link-item">
                {{ item.split(" - ")[1] }}
              </a>
            </span>
            <!-- Regular name without link -->
            <span v-else class="name">{{ item.split(" - ")[1] }}</span>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          "2018 - Rowland Shelley",
          "2018 - Leila Shirai",
          "2018 - G.B. Edwards",
          "2018 - Adam Wallner",
          "2017 - Oliver Keller",
          "2017 - Michael Thomas",
          "2017 - Javier Martinez",
          "2017 - Daniel Burckhardt",
          "2016 - Terry Erwin",
          "2016 - Rich Leschen",
          "2016 - Gareth Powell",
          "2015 - Rowland Shelley",
          "2015 - James Schlachta",
          "2015 - Allen L. Norrbom",
          "2014 - Fabio Laurindo da Silva",
          "2013 - Marcus Guidoti",
          "2012 - H. Gaska-Alvarez",
          "2011 - Rowland Shelley",
          "2011 - Laura T. Miller",
          "2011 - Fred Skillman",
          "2011 - Elena Ortez Acevedo",
          "2010 - G.B. Edwards",
          "2010 - Charles Staines, Jr.",
          "2010 - Carlos Naranjo Lopez",
          "2009 - Gary Steck & Bruce Sutton",
          "2009 - Fabio Laurindo da Silva",
          "2009 - Daniel Perez-Gelabert",
          "2008 - Eugenio H. Nearns",
          "2006 - Eugenio H. Nearns",
          "2004 - Daniel Burckhardt",
          "2002 - Rowland Shelley",
          "2002 - Allen Brady",
          "2001 - Thomas Henry",
          "2001 - Mauricio Barreto",
          "2001 - Ingrid Quintero Silva",
          "2001 - F.W. Quednau",
          "2001 - Allen R. Brady",
          "2000 - Stephen W. Wilson",
          "2000 - Scott McCleve",
          "2000 - Nereida Mestre",
          "2000 - Nadine L. Kriska",
          "2000 - Michele B. Price",
          "1997 - Specialty Employee Leasing, Inc.",
          "1997 - Ray Jones",
          "1997 - Katherine B. Gregg",
          "1997 - Julio Antonio Genaro",
          "1996 - Kevina Vulinec",
          "1996 - James T. Goodwin",
          "1996 - Gordon R. Ultsch"
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Container Section Styles */
  .two-column-list {
    display: flex-grow;
    justify-content: left;
    margin-top: -50px;
  }
  
  .list-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Fixed 5 columns */
    gap: 0.5rem;
    list-style-type: none;
    padding: 3em;
  }
  
  .list-item {
    font-size: 0.875rem; /* Smaller font size */
    color: #4a5568; /* gray-700 */
  }
  
  .year {
    color: #4a5568; /* gray-700 for year */
  }
  
  .name {
    font-weight: 600; /* Slightly bold */
  }
  
  /* Style for Links */
  .link-item {
    text-decoration: none;
    color: #3182ce; /* blue color for the link */
  }
  
  .link-item:hover {
    text-decoration: underline;
  }
  </style>
  