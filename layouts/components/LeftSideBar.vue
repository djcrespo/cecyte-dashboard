<template>
  <div class="main-nav">
    <LogoBox logoClass="logo-box" />
    <button type="button" class="button-sm-hover">
      <Icon name="iconamoon:arrow-left-4-square-duotone" style="height: 22px; width: 22px" class="button-sm-hover-icon fs-10 mt-1 me-1" @click="toggleMenuSize" />
    </button>
    <simplebar class="scrollbar">
      <AppMenu :menu-items="getMenuItems()" />
    </simplebar>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'
import { getMenuItems } from '~/helpers/menu'
import { useLayoutStore } from '~/stores/layout'
import { onMounted } from 'vue'

const useLayout = useLayoutStore()

const { layout, setLeftSideBarSize } = useLayout

const toggleMenuSize = () => {
  if (layout.leftSideBarSize === 'sm-hover-active') return setLeftSideBarSize('sm-hover')
  return setLeftSideBarSize('sm-hover-active')
}

const resize = () => {
  if (window.innerWidth < 1140) {
    setLeftSideBarSize('hidden')
  } else {
    setLeftSideBarSize(layout.leftSideBarSize === 'hidden' ? 'sm-hover-active' : layout.leftSideBarSize)
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', () => {
    resize()
  })
})
</script>
