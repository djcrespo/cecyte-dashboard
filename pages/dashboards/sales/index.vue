<template>
  <PageBreadcrumb title="Sales" subtitle="Dashboards" />

  <b-row>
    <div v-for="(item, idx) in statistics" :key="idx" class="col-xl" :class="idx === 4 ? 'col-lg-6 col-md-12' : idx === 3 ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6'">
      <StatisticsCard :item="item" />
    </div>
  </b-row>

  <b-row>
    <b-col xxl="8">
      <Overview />
    </b-col>

    <b-col xxl="4">
      <SalesByCategory />
    </b-col>
  </b-row>

  <b-row>
    <b-col xl="6">
      <NewAccounts />
    </b-col>

    <b-col xl="6">
      <RecentTransactions />
    </b-col>
  </b-row>

  <b-row>
    <b-col>
      <RecentOrders />
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import StatisticsCard from '~/pages/dashboards/sales/components/StatisticsCard.vue'
import Overview from '~/pages/dashboards/sales/components/Overview.vue'
import SalesByCategory from '~/pages/dashboards/sales/components/SalesByCategory.vue'
import NewAccounts from '~/pages/dashboards/sales/components/NewAccounts.vue'
import RecentTransactions from '~/pages/dashboards/sales/components/RecentTransactions.vue'
import RecentOrders from '~/pages/dashboards/sales/components/RecentOrders.vue'
import { statistics } from '~/pages/dashboards/sales/components/data'

definePageMeta({
  layout: 'default'
})
</script>
