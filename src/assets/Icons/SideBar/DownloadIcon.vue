<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0697 14.43L11.9997 20.5L5.92969 14.43" :stroke="toggleSvgColor()" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 3.5V20.33" :stroke="toggleSvgColor()" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>
<script setup lang="ts">
import { toggleSvgColor } from '@/helpers/utils';
</script>