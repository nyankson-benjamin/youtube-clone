<template>
    <IconButton @click="$emit('click')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002" :stroke="toggleSvgColor()"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    </IconButton>
</template>

<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import { toggleSvgColor } from '@/helpers/utils';

</script>

<style scoped></style>