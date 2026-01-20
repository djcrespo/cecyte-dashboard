<template>
  <PageBreadcrumb title="Order Details" subtitle="Ecommerce" />
  <b-row class="justify-content-center">
    <b-col lg="8" xl="7">
      <ul class="progressbar ps-0 my-5 pb-5">
        <li class="active">Order Placed</li>
        <li>Packed</li>
        <li>Shipped</li>
        <li>Delivered</li>
      </ul>
    </b-col>
  </b-row>

  <b-row>
    <ProductDetails :id="route.params.id" />
    <OrderDescription :id="route.params.id" />
  </b-row>

  <b-row>
    <ShippingInformation />
    <BillingInformation />
    <DeliveryInformation :id="route.params.id" />
  </b-row>
</template>

<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import ProductDetails from '~/pages/ecommerce/orders/components/ProductDetails.vue'
import OrderDescription from '~/pages/ecommerce/orders/components/OrderDescription.vue'
import BillingInformation from '~/pages/ecommerce/orders/components/BillingInformation.vue'
import DeliveryInformation from '~/pages/ecommerce/orders/components/DeliveryInformation.vue'
import ShippingInformation from '~/pages/ecommerce/orders/components/ShippingInformation.vue'

definePageMeta({
  layout: 'default',
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const route = useRoute()
</script>
