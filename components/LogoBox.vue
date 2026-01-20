<template>
  <div :class="logoClass">
    <NuxtLink to="/" class="logo-dark">
      <img :src="logoSm" class="logo-sm" :height="logoSmHeight" alt="logo sm" />
      <img :src="logoDark" class="logo-lg ms-2" :height="logoLgHeight" alt="logo dark" />
    </NuxtLink>

    <NuxtLink to="/" class="logo-light">
      <img :src="logoSm" class="logo-sm" :height="logoSmHeight" alt="logo sm" />
      <img :src="logoLight" class="logo-lg ms-2" :height="logoLgHeight" alt="logo light" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import logoSm from '~/assets/images/logo-sm.png'
import logoLight from '~/assets/images/logo-light.png'
import logoDark from '~/assets/images/logo-dark.png'

defineProps({
  logoSmHeight: {
    type: Number,
    default: 30
  },
  logoLgHeight: {
    type: Number,
    default: 24
  },
  logoClass: {
    type: String,
    default: ''
  }
})
</script>
