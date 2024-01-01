<template>
    <div class="sticky top-0 z-50" :class="store.theme === 'light' ? 'bg-white' : 'bg-black'">
        <div class="mx-8 flex justify-between items-center gap-6">
            <div class="flex items-center gap-10">
                <div @click="store.showSideBar = !store.showSideBar">

                    <MenuIcon class="cursor-pointer" />
                </div>
                <div class="flex cursor-pointer items-center gap-1" @click="$router.push('/')">
                    <YouTubeIcon />
                    <p class="text-xl font-youtube">YouTube</p>
                    <!-- <span class="-mt-8 font-thin">{{ store.videoList.regionCode }}</span> -->
                </div>
            </div>
            <SearchComponent v-model.trim="store.searchItem" />
            <ActionsComponent />
            <ToggleTheme />
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuIcon from "@/assets/Icons/MenuIcon.vue"
import YouTubeIcon from "@/assets/Icons/YouTubeIcon.vue"
import SearchComponent from "@/components/Inputs/SearchComponent.vue"
import ActionsComponent from "../ActionsComponent.vue";
import ToggleTheme from "../ToggleTheme.vue";
import { useStore } from "@/stores/store"

const store = useStore();

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/youtube-sans');
</style>