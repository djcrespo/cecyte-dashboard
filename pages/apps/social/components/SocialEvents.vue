<template>
  <b-row>
    <b-col lg="6" v-for="(item, idx) in eventList" :key="idx">
      <SocialEventsCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { eventList } from '~/pages/apps/social/components/data'
import SocialEventsCard from '~/pages/apps/social/components/SocialEventsCard.vue'
</script>
