<template>
  <PageBreadcrumb title="Integration" subtitle="Calendar" />
  <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-3">
    <b-col v-for="(integration, idx) in integrationData" :key="idx">
      <IntegrationCard :integration="integration" />
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import IntegrationCard from '~/pages/calendar/integration/components/IntegrationCard.vue'
import { integrationData } from '~/pages/calendar/integration/components/data'

definePageMeta({
  layout: 'default'
})
</script>
