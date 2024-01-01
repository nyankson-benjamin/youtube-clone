<template>
    <IconButton>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08002"
                :stroke="toggleSvgColor()" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>


    </IconButton>
</template>

<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import { toggleSvgColor } from '@/helpers/utils';

</script>

<style scoped></style>