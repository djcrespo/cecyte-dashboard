<template>
  <div class="wrapper">
    <client-only>
      <template #fallback>
        <Loading />
      </template>

      <TopBar />

      <LeftSideBar />

      <RightSideBar />
    </client-only>

    <div class="page-content">
      <div class="container-xxl">
        <slot />
      </div>

      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBar from '~/layouts/components/TopBar.vue'
import LeftSideBar from '~/layouts/components/LeftSideBar.vue'
import RightSideBar from '~/layouts/components/RightSideBar.vue'
import Footer from '~/layouts/components/Footer.vue'
import Loading from '~/layouts/components/Loading.vue'
</script>
