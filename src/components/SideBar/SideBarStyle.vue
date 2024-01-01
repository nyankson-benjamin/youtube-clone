<template>
  <div class="min-w-20">
    <div v-for="item in items" class="flex items-center justify-start gap-2 mt-1 ml-3.5 
      cursor-pointer hover:rounded-lg 
       p-3"
      :class="store.theme === 'light' ? 'lg:hover:bg-[#e1e0e0]' : store.theme === 'dark' ? 'lg:hover:bg-[#777777]' : store.showSideBar ? 'flex-row' : 'flex-col'"
      @click="$router.push(`${item.route}`)" :title="item.name">
      <component :is="item.icon" />
      <p class="md:hidden sm:hidden lg:block">{{ item.name }}</p>
    </div>
    <div v-if="!store.showSideBar" class="flex flex-col items-center mt-1 cursor-pointer hover:rounded-lg 
      hover:bg-[#e0dfdf] p-3">
      <component :is="DownloadIcon" />
      <p>
        Downloads
      </p>
    </div>
    <br>
    <hr class="ml-2">
  </div>
</template>

<script setup lang="ts">
import { defineProps, type Component, type PropType } from "vue"
import DownloadIcon from "@/assets/Icons/SideBar/DownloadIcon.vue";
import { useStore } from "@/stores/store";
import CoverImage from "@/assets/Images/CoverImage.svg"
const store = useStore()

defineProps({
  items: {
    type: Array as PropType<{ name: string, route: string, icon: Component }[]>
  }
})
</script>

<style scoped></style>