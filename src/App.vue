<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavBar from './components/NavBar/TopNavBar.vue';
import SideBarComponent from "@/components/SideBar/SideBarComponent.vue"
import { useStore } from './stores/store';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import TopItems from './components/SideBar/TopItems.vue';
import { useGetVideos } from "@/composables/GetVideos"


const store = useStore();
const theme = storeToRefs(useStore()).theme
useGetVideos();

const appElement = document.body.style
watchEffect(() => {
  if (theme.value === "light") {
    appElement.backgroundColor = "#fff";
    appElement.setProperty('color', 'black');
  } else {
    document.body.style.backgroundColor = "#000";
    appElement.setProperty('color', '#fff');

  }
});
</script>

<template>
  <div class="">
    <TopNavBar />
    <div class="flex overflow-y-hidden">
      <SideBarComponent v-if="store.showSideBar" />
      <div v-else class="sm:hidden md:hidden lg:block xl:block">
        <TopItems />
      </div>
      <div class="w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
