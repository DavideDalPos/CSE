<template>
  <div class="my-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-serif"
    >
      <div
        v-for="meeting in meetings"
        :key="meeting.year"
        class="bg-foreground border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        <!-- Title and NEW badge -->
        <div class="flex items-center justify-between mb-2">
          <!-- Left: Year and Title stacked -->
          <div>
            <p
              class="text-lg font-bold text-senary leading-tight tracking-wide text-shadow-sm"
            >
              {{ meeting.year }}
            </p>
            <h3
              class="font-semibold text-primary hover:text-yellow-700 transition-colors text-shadow-sm leading-snug"
            >
              {{ meeting.title }}
            </h3>
          </div>

          <!-- Right: NEW badge -->
          <span
            v-if="meeting.isNew"
            class="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full animate-pulse shrink-0 ml-2"
          >
            NEW
          </span>
        </div>

        <!-- Conference date -->
        <div class="flex items-center mb-4">
          <div class="flex items-center text-sm text-gray-700">
            <p class="italic">{{ meeting.date }}</p>
          </div>
          <div class="border-l border-gray-300 h-6 mx-2"></div>
          <!-- Divider -->
          <div class="flex items-center text-sm text-gray-700">
            <p class="italic">
              Organizer:
              <span class="font-bold text-primary">{{
                meeting.organizer
              }}</span>
            </p>
          </div>
        </div>

        <!-- Links Section -->
        <div class="flex justify-between w-full mt-4">
          <!-- Left side: PDF and Extended Program -->
          <div class="space-y-2">
            <div
              :class="{ 'bg-gray-200 pointer-events-none': !meeting.pdfLink }"
              class="group shadow px-2 py-1 text-xs rounded bg-setenary w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 text-quaternary group-hover:text-primary transition duration-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                />
              </svg>
              <a
                :href="meeting.pdfLink"
                target="_blank"
                >Download Program</a
              >
            </div>
            <div
              :class="{
                'bg-gray-200 pointer-events-none': !meeting.secondPdfLink,
                'bg-setenary': meeting.secondPdfLink
              }"
              class="group shadow px-2 py-1 text-xs rounded w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 group-hover:text-primary transition duration-200"
                :class="{
                  'text-gray-500':
                    !meeting.secondPdfLink /* Gray out the icon */,
                  'text-quaternary': meeting.secondPdfLink /* Default color */
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                />
              </svg>
              <a
                :href="meeting.secondPdfLink"
                target="_blank"
                >Download Extended Program</a
              >
            </div>
          </div>

          <!-- Right side: Video and Image -->
          <div class="space-y-2">
            <div
              :class="{
                'bg-gray-200 pointer-events-none': !meeting.video,
                'bg-quaternary': meeting.video
              }"
              class="group shadow px-2 py-1 text-xs rounded w-max text-white hover:text-senary flex items-center space-x-1 hover:bg-secondary transition duration-200 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                :class="{
                  'text-gray-500': !meeting.video /* Gray out the icon */,
                  'text-setenary': meeting.video /* Default color */
                }"
                class="w-4 h-4 group-hover:text-senary transition duration-200"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <polygon
                  points="10,8 16,12 10,16"
                  fill="currentColor"
                />
              </svg>
              <a
                :href="meeting.video"
                target="_blank"
                >Watch Full Conference</a
              >
            </div>

            <div
              :class="{
                'bg-gray-200 pointer-events-none': !meeting.image,
                'bg-quaternary': meeting.image
              }"
              class="group shadow px-2 py-1 text-xs rounded w-max text-white hover:text-senary flex items-center space-x-1 hover:bg-secondary transition duration-200 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 group-hover:text-senary transition duration-200"
                :class="{
                  'text-gray-500': !meeting.image /* Gray out the icon */,
                  'text-setenary': meeting.image /* Default color */
                }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7h4l1-2h8l1 2h4v12H3V7z"
                />
                <circle
                  cx="12"
                  cy="13"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <a
                :href="meeting.image"
                target="_blank"
                >Download Images</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  meetings: {
    type: Array,
    default: () => []
  }
})
</script>
