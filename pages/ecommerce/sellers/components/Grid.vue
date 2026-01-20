<template>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-xl-5 gx-3">
    <b-col v-for="(seller, idx) in sellersList" :key="idx">
      <SellerCard :seller="seller" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import SellerCard from '~/pages/ecommerce/sellers/components/SellerCard.vue'
import { sellersList } from '~/pages/ecommerce/sellers/components/data'
</script>
