<template>
    <div
        class="w-80 h-80 border rounded-xl cursor-pointer [&>div]:hover:visible [&>video]:hover:block [&>img]:hover:hidden">
        <img :src="video?.cover" alt="" class="w-full rounded-tl-xl rounded-tr-xl block"
            @click="navigate(video?.id as number)">
        <video class="hidden w-full rounded-tl-xl rounded-tr-xl" autoplay muted  @click="navigate(video?.id as number)">
            <source :src="video?.preview" type="video/mp4">
        </video>
        <div class="flex items-center my-2 mr-2 ml-1 gap-2">
            <div class="flex justify-between items-center gap-3" @click="navigate(video?.id as number)">
                <img :src="video?.logo" />
                <p>{{ video?.title }}</p>
            </div>

            <!-- <ActionIcon /> -->
            <DropDownMenu @selectOption="(name) => handleSelectOption(name)" :options-list="[{ id: 1, name: 'upload', label: 'Upload video', icon: ActionIcon, fill: '#696F8C', route: '' },
            { id: 1, name: 'live', label: 'Go live', icon: ActionIcon, fill: '#696F8C', route: '#' }]"
                :actionIcon="ActionIcon" />
        </div>
        <div class="ml-11 text-gray-500" @click="navigate(video?.id as number)">
            <span>{{ video?.channel }}</span>
            <br>
            <span>{{ video?.views }} views . 2 days ago</span>
        </div>
        <div class="w-full h-10 flex justify-center items-center opacity-90 bg-[rgba(0,0,0,0.5)]  -mt-44 invisible">
            <div @click="handleSelectOption('live')">
                <RadarIcon :toggleColor="false" />
            </div>
        </div>
    </div>
    <br>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from "vue"
import ActionIcon from "@/assets/Icons/ActionIcon.vue"
import DropDownMenu from "./Dropdown/DropDownMenu.vue";
import RadarIcon from "@/assets/Icons/RadarIcon.vue";
import { encodeUrlPath } from "@/helpers/utils";

defineProps({
    video: Object as PropType<{
        title: string,
        channel: string,
        cover: string,
        logo: string,
        views: string,
        id: number,
        description: string
        preview: string
    }>
})

const handleSelectOption = (name: string) => {
    switch (name) {
        case "upload":
            alert("upload modal")
            break;

        case "live":
            alert(" i will go live")
            break;
    }
}

const navigate = (id: number) => {
    window.location.href = `/watch/${encodeUrlPath(id.toString())}`
}
</script>

<style scoped></style>