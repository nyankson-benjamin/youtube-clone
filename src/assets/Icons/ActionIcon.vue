<template>
    <svg :width="width" :height="height" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="5" r="1" :fill="toggleSvgColor()" />
        <circle cx="9" cy="9" r="1" :fill="toggleSvgColor()" />
        <circle cx="9" cy="13" r="1" :fill="toggleSvgColor()" />
    </svg>
</template>
    
<script  setup lang="ts">
import { toggleSvgColor } from '@/helpers/utils';

defineProps({
    width: {
        type: Number,
        default: 30
    },
    height: {
        type: Number,
        default: 30
    },
    color: {
        type: String,
        default: "none"
    },

});
</script>