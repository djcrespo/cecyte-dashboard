<template>
  <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
    <b-container>
      <b-row class="justify-content-center">
        <slot />
      </b-row>
    </b-container>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  document.body.classList.add('authentication-bg')
  document.body.removeAttribute('style')
  document.querySelector('.offcanvas-backdrop')?.classList.remove('show')
})

onUnmounted(() => {
  document.body.classList.remove('authentication-bg')
})
</script>
