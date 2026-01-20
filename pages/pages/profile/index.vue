<template>
  <PageBreadcrumb title="Profile" subtitle="Pages" />
  <b-row>
    <b-col xxl="4">
      <b-row>
        <b-col cols="12">
          <ProfileInfo />
          <Skills />
        </b-col>
      </b-row>
      <Activities />
    </b-col>

    <Messages />
  </b-row>
</template>
<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import Skills from '~/pages/pages/profile/components/Skills.vue'
import Messages from '~/pages/pages/profile/components/Messages.vue'
import Activities from '~/pages/pages/profile/components/Activities.vue'
import ProfileInfo from '~/pages/pages/profile/components/ProfileInfo.vue'

definePageMeta({
  layout: 'default'
})
</script>
