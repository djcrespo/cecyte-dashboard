<template>
  <PageBreadcrumb title="About Us" subtitle="Pages" />
  <b-row>
    <b-col cols="12">
      <About />
      <Services />
      <Team />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import Team from '~/pages/pages/about-us/components/Team.vue'
import About from '~/pages/pages/about-us/components/About.vue'
import Services from '~/pages/pages/about-us/components/Services.vue'

definePageMeta({
  layout: 'default'
})
</script>
