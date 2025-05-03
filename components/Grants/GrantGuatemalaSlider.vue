<template>
  <section class="container mx-auto px-8 py-10 relative overflow-hidden">
    <div class="relative">
      <!-- Slide container -->
      <div class="flex transition-transform duration-500 ease-in-out"
           :style="{ transform: `translateX(-${currentPage * 100}%)` }">
        <!-- Each page (5 images) -->
        <div
          v-for="(chunk, i) in slideChunks"
          :key="i"
          class="grid gap-6 sm:grid-cols-2 lg:grid-cols-10 min-w-full mr-9"
        >
          <div
            v-for="(slide, j) in chunk"
            :key="j"
            class="group relative cursor-pointer"
            @click="openImage(slide.img)"
          >
            <img
              :src="slide.img"
              alt=""
              class="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 
              hover:scale-110 hover:shadow-2xl hover:shadow-gray-500"
              />
            <p class="mt-2 text-center text-xs text-gray-600" v-html="slide.caption"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between items-center mt-8">
      <button
        @click="prevPage"
        :disabled="currentPage === 0"
        :class="[
      'px-6 py-2 rounded transition',
      currentPage === 0
        ? 'bg-gray-400 cursor-not-allowed text-white'
        : 'bg-setenary text-white hover:bg-setenary/50'
    ]"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage >= slideChunks.length - 1"
        :class="[
      'px-6 py-2 rounded transition',
      currentPage >= slideChunks.length - 1
        ? 'bg-gray-400 cursor-not-allowed text-white'
        : 'bg-senary text-white hover:bg-quaternary'
    ]"
      >
        Next
      </button>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
      @click.self="closeImage"
    >
      <div class="max-w-4xl w-full">
        <img
          :src="selectedImage"
          alt=""
          class="w-full object-contain max-h-[80vh] rounded"
        />
        <div class="text-center mt-4">
          <button
            @click="downloadImage"
            class="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition"
          >
            Download
          </button>
          <button
            @click="closeImage"
            class="ml-4 px-4 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed, ref } from 'vue'

const slides = [
  { img: '/images/guatemala/Barkeria_Chex_01.jpg', caption: '<i>Barkeria</i> sp.' },
  { img: '/images/guatemala/Barkeria_Chex_04.jpg', caption: '<i>Barkeria</i> sp.' },
  { img: '/images/guatemala/Bracket_fungus.jpg', caption: 'Bracket fungus' },
  { img: '/images/guatemala/Bromeliads_Chex_2009.jpg', caption: 'Bromeliads' },
  { img: '/images/guatemala/Brysonima_crassi_02.jpg', caption: '<i>Brysonima crassa</i> <br>Nied. 1901' },
  { img: '/images/guatemala/bycid.jpg', caption: 'Cerambycidae' },
  { img: '/images/guatemala/C_Mono_2009_05.jpg', caption: 'Malaise trap'},
  { img: '/images/guatemala/C_Mono_2009_06.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_08.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_09.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_10.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_11.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_33.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_35.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/C_Mono_2009_37.jpg', caption: 'Landscape' },
  { img: '/images/guatemala/Centropogon_cordifoliusQ_C_Mono_2009_20.jpg', caption: '<i>Centropogon_cordifolius</i> Benth. 1841' },
  { img: '/images/guatemala/Centropogon_cordifoliusQ_C_Mono_2009_21.jpg', caption: '<i>Centropogon_cordifolius</i> Benth. 1841' },
  { img: '/images/guatemala/CentropogonQ_Cerro_Mono_15.jpg', caption: '<i>Centropogon</i> sp.'},
  { img: '/images/guatemala/CentropogonQ_Cerro_Mono_16.jpg', caption: '<i>Centropogon</i> sp.'},
  { img: '/images/guatemala/Cerro_Mono_05.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_06.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_07.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_08.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_11.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_12.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_19.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_26.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_27.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_28.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_29.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_30.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_31.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Cerro_Mono_35.jpg', caption: 'Cerro'},
  { img: '/images/guatemala/Chex_Malaise2009_01.jpg', caption: 'Malaise trap'},
  { img: '/images/guatemala/Chex_Malaise2009_06.jpg', caption: 'Malaise trap'},
  { img: '/images/guatemala/Chex_Malaise2009_13.jpg', caption: 'Malaise trap'},
  { img: '/images/guatemala/Corazon_Bosque_02.jpg', caption: 'Corazon'},
  { img: '/images/guatemala/Cupressus_El_Pilar.jpg', caption: '<i>Cupressus</i>'},
  { img: '/images/guatemala/El Naranjo_camp_02.jpg', caption: 'El Naranjo'},
  { img: '/images/guatemala/El Naranjo_UV_01.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/El Naranjo_UV_02.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/El Naranjo_UV_03.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/El Naranjo_UV_04.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/El Naranjo_UV_05.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/El Naranjo_UV_08.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/Empedoclesia_brachysiphon_Cerro_Mono_32.jpg', caption: '<i>Empedoclesia brachysiphon</i> Sleumer, 1934'},
  { img: '/images/guatemala/Eryngium_cymosum_Momostenango_bld_01.jpg', caption: '<i>Eryngium cymosum</i> Delaroche, 1807'},
  { img: '/images/guatemala/Eryngium_cymosum_Momostenango_bld_02.jpg', caption: '<i>Eryngium cymosum</i> Delaroche, 1807'},
  { img: '/images/guatemala/Flea_beetles_01.jpg', caption: 'Chrysomalidae, Alticini (Coleoptera)'},
  { img: '/images/guatemala/Grave_mark_Chex.jpg', caption: 'Grave mark'},
  { img: '/images/guatemala/GuzmaniaQ_C_Mono_2009_28.jpg', caption: '<i>Guzmania</i> Ruiz & Pav.'},
  { img: '/images/guatemala/Hemiptera_Chex_2009.jpg', caption: 'Hemiptera'},
  { img: '/images/guatemala/Hopper_Chex2009_01.jpg', caption: 'Hemiptera'},
  { img: '/images/guatemala/Hydrocotyle_Cerro_Mono_33.jpg', caption: '<i>Hyrdroctyle</i> L.'},
  { img: '/images/guatemala/Lepanthes_C_Mono_2009_31.jpg', caption: '<i>Lepanthes</i> Sw.'},
  { img: '/images/guatemala/Madrone_04.jpg', caption: 'Madrone'},
  { img: '/images/guatemala/Marble_dump_2009_01.jpg', caption: 'Marble dump'},
  { img: '/images/guatemala/Marble_dump_2009_03.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/Marble_dump_2009_04.jpg', caption: 'Lizard'},
  { img: '/images/guatemala/Marble_dump_2009_06.jpg', caption: ''},
  { img: '/images/guatemala/Marble_dump_2009_10.jpg', caption: ''},
  { img: '/images/guatemala/Marble_dump_2009_11.jpg', caption: ''},
  { img: '/images/guatemala/Marble_dump_2009_12.jpg', caption: 'Lepidoptera'},
  { img: '/images/guatemala/Marble_dump_2009_13.jpg', caption: ''},
  { img: '/images/guatemala/Marble_dump_2009_19.jpg', caption: ''},
  { img: '/images/guatemala/Marble_quarry_02.jpg', caption: ''},
  { img: '/images/guatemala/Marble_quarry_03.jpg', caption: ''},
  { img: '/images/guatemala/Marble_quarry_04.jpg', caption: ''},
  { img: '/images/guatemala/Mascot_HotelSanFran.jpg', caption: 'Mascot at Hotel'},
  { img: '/images/guatemala/Mistletoe_02.jpg', caption: 'Mistletoe'},
  { img: '/images/guatemala/Momostenango_bld_03.jpg', caption: ''},
  { img: '/images/guatemala/MomostenangoBald_01.jpg', caption: ''},
  { img: '/images/guatemala/MomostenangoBald_02.jpg', caption: ''},
  { img: '/images/guatemala/MomostenangoBald_04.jpg', caption: ''},
  { img: '/images/guatemala/MomostenangoBald_07.jpg', caption: ''},
  { img: '/images/guatemala/MomostenangoBald_15.jpg', caption: ''},
  { img: '/images/guatemala/Mosquito_larv_Ch_02.jpg', caption: 'Mosquito Larvae'},
  { img: '/images/guatemala/Oak_new_foliage_02.jpg', caption: 'Oak'},
  { img: '/images/guatemala/Ostracocaelia_ov_07.jpg', caption: '<i>Ostracocaelia</i> Giglio-Tos, 1893 (Diptera, Tephritidae)'},
  { img: '/images/guatemala/Oxalis_Marble_dump_2009_08.jpg', caption: '<i>Oxalis</i> L.'},
  { img: '/images/guatemala/Passiflora_Marble_dump_2009_23.jpg', caption: '<i>Passiflora</i> L.'},
  { img: '/images/guatemala/petrified_wood_01.jpg', caption: 'Petrified wood'},
  { img: '/images/guatemala/Pluchea-cf_Chex_02.jpg', caption: '<i>Pluchea</i> Cass.'},
  { img: '/images/guatemala/Podocarpus_CMono_01.jpg', caption: '<i>Podocarpus</i>'},
  { img: '/images/guatemala/Podocarpus_CMono_02.jpg', caption: '<i>Podocarpus</i>'},
  { img: '/images/guatemala/Polionota_kohnae_14_crop.jpg', caption: '<i>Polionota kohnae</i> Norrbom,1988 (Diptera, Tephritidae)'},
  { img: '/images/guatemala/Polionota_reedae_03_crop.jpg', caption: '<i>Polionota reedae</i> Norrbom, 1988 (Diptera, Tephritidae)'},
  { img: '/images/guatemala/Procecidochares_01.jpg', caption: '<i>Procecidochares</i> Hendel, 1914 (Diptera, Tephritidae)'},
  { img: '/images/guatemala/Procecidochares_12.jpg', caption: '<i>Procecidochares</i> Hendel, 1914 (Diptera, Tephritidae)'},
  { img: '/images/guatemala/Rubiaceae_C_Mono_2009_27.jpg', caption: 'Rubiaceae'},
  { img: '/images/guatemala/Salvia_Marble_dump_2009_05.jpg', caption: '<i>Salvia</i> L.'},
  { img: '/images/guatemala/Sceloporus_MomostenangoBald_23.jpg', caption: '<i>Sceloporus</i> Wiegmann, 1828'},
  { img: '/images/guatemala/Schustermyia_14_crop.jpg', caption: ''},
  { img: '/images/guatemala/Sisyrinchium_C_Mono_2009_02.jpg', caption:'<i>Sisyrinchium</i> L.'},
  { img: '/images/guatemala/Smilacina_C_Mono_2009_18.jpg', caption:''},
  { img: '/images/guatemala/Smilacina_C_Mono_2009_23.jpg', caption:''},
  { img: '/images/guatemala/Solanum_05.jpg', caption:'<i>Solanum</i> L.'},
  { img: '/images/guatemala/Solanum_07.jpg', caption:'<i>Solanum</i> L.'},
  { img: '/images/guatemala/Tachinid_El_Nara_01.jpg', caption:'Tachinidae (Diptera)'},
  { img: '/images/guatemala/Tipulid_Chex.jpg', caption:'Tipulidae (Diptera)'},
  { img: '/images/guatemala/Vigna_caracalla_Legume_Chex2009_01.jpg', caption:'<i>	Cochliasanthus caracalla</i> (L.)'},
  { img: '/images/guatemala/Vol_Atitlan_01.jpg', caption:''},
  { img: '/images/guatemala/Vol_Atitlan_02.jpg', caption:''},
  { img: '/images/guatemala/Vol_Atitlan_04.jpg', caption:''},

]

const slidesPerPage = 10
const currentPage = ref(0)

const slideChunks = computed(() => {
  const chunks = []
  for (let i = 0; i < slides.length; i += slidesPerPage) {
    chunks.push(slides.slice(i, i + slidesPerPage))
  }
  return chunks
})

function nextPage() {
  if (currentPage.value < slideChunks.value.length - 1) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const selectedImage = ref(null)

function openImage(img) {
  selectedImage.value = img
}

function closeImage() {
  selectedImage.value = null
}

function downloadImage() {
  const link = document.createElement('a')
  link.href = selectedImage.value
  link.download = 'image.jpg'
  link.click()
}
</script>

