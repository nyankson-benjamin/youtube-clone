<template>
    <div class="w-[15%] h-[100vh] mr-3 scroll hover:overflow-y-auto top-0 bottom-0 right-0">
        <TopItems />
        <MiddleItems />
        <TopItems />
        <MiddleItems />
    </div>
</template>

<script setup lang="ts">
import TopItems from './TopItems.vue';
import MiddleItems from './MiddleItems.vue';

</script>

<style scoped>
.scroll {
    animation: animate 0.5s;
}


@keyframes animate {
    from {
        opacity: 0
    }

    to {
        opacity: 1;
    }
}

</style>