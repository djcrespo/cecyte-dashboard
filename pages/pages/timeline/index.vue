<template>
  <PageBreadcrumb title="Timeline" subtitle="Pages" />

  <Timeline />

  <LeftTimeline />
</template>
<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import Timeline from '~/pages/pages/timeline/components/Timeline.vue'
import LeftTimeline from '~/pages/pages/timeline/components/LeftTimeline.vue'

definePageMeta({
  layout: 'default'
})
</script>
