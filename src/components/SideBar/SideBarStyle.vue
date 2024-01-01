<template>
  <div class="ml-6">
    <div v-for="item in items" class="flex items-center gap-2 mt-1 
      cursor-pointer hover:rounded-lg 
      hover:bg-[#e0dfdf] p-3" :class="store.showSideBar ? 'flex-row' : 'flex-col'"
      @click="$router.push(`${item.route}`)">
      <component :is="item.icon" />
      <p>{{ item.name }}</p>
    </div>
    <div v-if="!store.showSideBar" class="flex flex-col items-center mt-1 cursor-pointer hover:rounded-lg 
      hover:bg-[#e0dfdf] p-3">
      <component :is="DownloadIcon" />
      <p>
        Downloads
      </p>
    </div>
    <br>
    <hr>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type Component, type PropType } from "vue"
import DownloadIcon from "@/assets/Icons/SideBar/DownloadIcon.vue";
import { useStore } from "@/stores/store";
const store = useStore()

defineProps({
  items: {
    type: Array as PropType<{ name: string, route: string, icon: Component }[]>
  }
})
</script>

<style scoped></style>