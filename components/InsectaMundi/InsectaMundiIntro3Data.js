import { computed, ref } from 'vue';

export const editorialBoard = ref([
  'Davide Dal Pos (University of Central Florida, USA)',
  'M.J. Paulsen (University of Nebraska, USA)',
  'David Plotkin (University of Florida, USA)',
  'Paul E. Skelley (Florida Department of Agriculture and Consumer Services, USA)',
  'Felipe Soto-Adames (Florida Department of Agriculture and Consumer Services, USA)',
  'Alexander Orfinger (Dalton State College, USA)',
  'José I. Martinez-Nobel (Florida Department of Agriculture and Consumer Services, USA)'
]);

export const digitalRegistration = ref([
  'Davide Dal Pos (DOI Registration)',
  'Erin Powell (Zoobank Registration)'
]);

export const chiefEditor = ref('David Plotkin (University of Florida, USA)');

export const foundingEditors = ref([
  'Ross H. Arnett, Jr.* (deceased)',
  'J. Howard Frank* (deceased)',
  'Virendra Gupta* (deceased)',
  'John B. Heppner (University of Florida, USA)',
  'Lionel A. Stange* (deceased)',
  'Michael C. Thomas* (deceased)',
  'Robert E. Woodruff* (deceased)',
]);

export const reviewEditors = ref([
  'Angélico Asenjo* (Instituto Tecnológico Vale, Brazil)',
  'Aline Barcellos (Museu de Ciências Naturais da Fundação Zoobotânica do Rio Grande do Sul, Brazil)',
  'David Bowles (Missouri State University, USA)',
  'Julieta Brambila (USDA-APHIS-PPQ, USA)',
  'Adam Brunke* (Canadian National Collection of Insects, Arachnids and Nematodes, Canada)',
  'Joe Eger (Florida State Collection of Arthropods, USA)',
  'Mike Ferro (Clemson University, USA)',
  'Patrick Gorring* (Florida Department of Agriculture and Consumer Services, USA)',
  'Bill Grogan (Florida State Collection of Arthropods, USA)',
  'Kevin Hinson (EpiLogic GmbH Agrarbiologische Forschung und Beratung, Germany)',
  'Larry Hribar (Florida Keys Mosquito Control District, USA)',
  'Oliver Keller (Florida State Collection of Arthropods, USA)',
  'José Martínez (Florida Department of Agriculture and Consumer Services, USA)',
  'Elena Ortiz-Acevedo* (Universidad del Norte, Colombia)',
  'Alessandra Pandolfi (University of Central Florida, USA)',
  'M.J. Paulsen (University of Nebraska, USA)',
  'David Plotkin (University of Florida, USA)',
  'Andy Rasmussen* (Florida A&M University, USA)',
  'Erin C. Powell (Florida Department of Agriculture and Consumer Services, USA)',
  'Kyle Schnepp (North Carolina State University, USA)',
  'Paul E. Skelley (Florida Department of Agriculture and Consumer Services, USA)',
  'Felipe Soto-Adames (Florida Department of Agriculture and Consumer Services, USA)',
  'Ryan St Laurent* (University of Colorado, USA)',
  'Gary Steck (Florida Department of Agriculture and Consumer Services, USA)',
  'Elijah Talamas* (Florida Department of Agriculture and Consumer Services, USA)',
  'Kevin Williams* (California Department of Food and Agriculture, USA)',
]);

export const layoutEditors = ref('Robert Forsyth (Royal British Columbia Museum, Canada)');
export const postProduction = ref('Paul E. Skelley (Florida Department of Agriculture and Consumer Services, USA)');

// Sorted versions
export const sortedEditorialBoard = computed(() => editorialBoard.value.slice().sort());
export const sortedFoundingEditors = computed(() => foundingEditors.value.slice().sort());
export const sortedReviewEditors = computed(() => reviewEditors.value.slice().sort());
