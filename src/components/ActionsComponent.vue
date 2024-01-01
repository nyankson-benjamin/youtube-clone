<template>
    <div class="flex items-center gap-6">
        <DropDownMenu class="" @selectOption="(name) => handleSelectOption(name)" :options-list="[{ id: 1, name: 'upload', label: 'Upload video', icon: VideoIcon, fill: '#696F8C', route: '' },
        { id: 1, name: 'live', label: 'Go live', icon: RadarIcon, fill: '#696F8C', route: '#' }, { id: 1, name: 'upload', label: 'Upload video', icon: VideoIcon, fill: '#696F8C', route: '' },
        { id: 1, name: 'live', label: 'Go live', icon: RadarIcon, fill: '#696F8C', route: '#' }]"
            :actionIcon="CamCorderIcon" />
        <GridIcon />
        <NotificationIcon />
        <UserIcon />
        <ModalComponent v-if="showModal" @closeModal="showModal = !showModal">
            <template #title>UPLOAD YOUR VIDEO</template>
            <template #default>
                dhdhdh
            </template>
        </ModalComponent>
    </div>
</template>

<script setup lang="ts">
import CamCorderIcon from '@/assets/Icons/CamCorderIcon.vue';
import UserIcon from '@/assets/Icons/UserIcon.vue';
import GridIcon from '@/assets/Icons/GridIcon.vue';
import NotificationIcon from '@/assets/Icons/NotificationIcon.vue';
import DropDownMenu from "@/components/Dropdown/DropDownMenu.vue"
import VideoIcon from '@/assets/Icons/VideoIcon.vue';
import RadarIcon from '@/assets/Icons/RadarIcon.vue';
import ModalComponent from "@/components/modals/ModalComponent.vue"

import { ref } from 'vue';

const showModal = ref(false)

const handleSelectOption = (name: string) => {
    switch (name) {
        case "upload":
            showModal.value = true
            break;

        case "live":
            alert(" i will go live")
            break;
    }
}
</script>

<style scoped></style>