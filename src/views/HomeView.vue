<script setup lang="ts">
import VideoCard from "@/components/VideoCard.vue"
import GridComponent from "@/components/GridComponent.vue"
import { useStore } from "@/stores/store"
import { storeToRefs } from "pinia"
import { computed, ref, watch } from "vue"
import { data } from "../constants/videoData"
import VideoTypes from "@/components/VideoTypes.vue"


const store = storeToRefs(useStore())

const videoList = ref(data)
watch(store.searchItem, (val) => {
    videoList.value = data
    videoList.value = videoList.value.filter(item => item.title.toLowerCase().includes(val.toLowerCase()))
})

const videoTypes = computed(() => {
    return data.map((item) => item.type)
})

const activeTab = ref("All")

const handleEmit = (event: string) => {
    activeTab.value = event
}

watch(activeTab, (val) => {
    if (val === "All") {
        videoList.value = data
    }
    else {
        videoList.value = data
        videoList.value = videoList.value.filter(item => item.type === val)
    }
})
</script>

<template>
    <div class="scroll mx-3 w-[98%] h-[100vh] hover:overflow-y-scroll overflow-y-hidden  my-24">

        <VideoTypes :types="videoTypes" @handleEmit="handleEmit($event)" />

        <GridComponent>
            <div v-for="video in videoList" :key="video.id">
                <VideoCard :video="video" />
            </div>
        </GridComponent>
    </div>
</template>

<style scoped></style>
