<template>
  <PageBreadcrumb title="Finance" subtitle="Dashboards" />

  <b-row>
    <b-col v-for="(item, idx) in statistics" :key="idx">
      <StatisticsCard :item="item" />
    </b-col>
  </b-row>

  <b-row>
    <b-col xxl="6">
      <Revenue />
    </b-col>

    <b-col xxl="6">
      <Expenses />
    </b-col>
  </b-row>

  <b-row>
    <b-col xxl="8">
      <Transactions />
    </b-col>

    <b-col xxl="4">
      <RevenueSources />
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import StatisticsCard from '~/pages/dashboards/finance/components/StatisticsCard.vue'
import Revenue from '~/pages/dashboards/finance/components/Revenue.vue'
import Expenses from '~/pages/dashboards/finance/components/Expenses.vue'
import RevenueSources from '~/pages/dashboards/finance/components/RevenueSources.vue'
import Transactions from '~/pages/dashboards/finance/components/Transactions.vue'
import { statistics } from '~/pages/dashboards/finance/components/data'

definePageMeta({
  layout: 'default'
})
</script>
