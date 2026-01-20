<template>
  <NuxtLink :class="className" :to="item.url">
    <span v-if="item.icon" class="nav-icon">
      <Icon :name="item.icon" />
    </span>
    <span class="nav-text"> {{ item.label }} </span>
    <b-badge :variant="null" pill v-if="item.badge" class="font-10 rounded float-end" :class="`bg-${item.badge.variant}`">
      {{ item.badge.text }}
    </b-badge>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { SubMenus } from '~/types/menu'

const props = defineProps<SubMenus>()
</script>
