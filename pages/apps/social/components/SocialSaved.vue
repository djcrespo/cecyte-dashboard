<template>
  <template v-for="(item, idx) in savedPosts" :key="idx">
    <SocialSavedCard :item="item" />
  </template>
</template>
<script setup lang="ts">
import { savedPosts } from '~/pages/apps/social/components/data'
import SocialSavedCard from '~/pages/apps/social/components/SocialSavedCard.vue'
</script>
