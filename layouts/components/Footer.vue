<template>
  <footer class="footer">
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="text-center">
          {{ currentYear }}
          &copy; Reback. Crafted by
          <Icon name="iconamoon:heart-duotone" class="fs-18 align-middle text-danger" />
          <a :href="developedByLink" class="fw-bold footer-text" target="_blank">{{ developedBy }}</a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { currentYear, developedBy, developedByLink } from '~/helpers/constants'
</script>
