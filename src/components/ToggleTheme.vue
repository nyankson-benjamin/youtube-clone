<template>
    <div @click="store.theme === 'dark' ? store.theme = 'light' : store.theme = 'dark'">
        <ToggleToOpen v-if="store.theme === 'light'" />
        <ToggleToClose v-else />
    </div>
</template>

<script setup lang="ts">
import ToggleToOpen from "@/assets/Icons/Toggle/ToggleToOpen.vue"
import ToggleToClose from "@/assets/Icons/Toggle/ToggleToClose.vue"
import { useStore } from "@/stores/store";

const store = useStore();

</script>

<style scoped></style>