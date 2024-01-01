<template>
    <div @click="$emit('click')" class=" rounded-full p-1 active:animate-ripple cursor-pointer"
        :class="store.theme === 'light' ? 'hover:bg-[rgba(49,49,49,0.5)]' : 'hover:bg-[rgba(255,255,255,0.5)]'">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore()

</script>
<style scoped>
/* .ripple:active {
    animation: ripple 5s ease-in-out;
}

@keyframes ripple {
    from {
        opacity: 0.5;
    }

    to {
        opacity: 1;
    }
} */
</style>