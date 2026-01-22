<template>
  <NuxtLoadingIndicator color="#35fe53" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'simplebar'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-creative'
import 'dropzone/src/dropzone.scss'
import 'flatpickr/dist/flatpickr.css'
import 'apexcharts/dist/apexcharts.css'
import 'nouislider/dist/nouislider.css'
import 'gridjs/dist/theme/mermaid.min.css'
import 'choices.js/src/styles/choices.scss'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'

import '~/assets/scss/app.scss'
import '~/assets/scss/icons.scss'

import favicon from '~/assets/images/favicon.ico'
import logo from '~/assets/images/logo.png'

useHead({
  title: ' Responsive Admin Dashboard Template',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'author', content: 'Techzaa' },
    { name: 'description', content: 'A fully responsive premium admin dashboard template.' }
  ],
  link: [{ rel: 'shortcut icon', href: favicon }]
})

useSeoMeta({
  title: ' Responsive Admin Dashboard Template',
  description: 'A fully responsive premium admin dashboard template.'
})
</script>
