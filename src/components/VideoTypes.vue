<template>
    <div
        class="flex items-center mb-5 overflow-x-hidden hover:overflow-x-scroll m-auto w-[90%] gap-3 fixed top-20 z-40">
        <p class="px-5 py-2 w-full border rounded-3xl whitespace-nowrap cursor-pointer"
            :class="activeTab === 0 ? 'bg-[transparent]' : 'bg-[#919090]'" @click="handleActiveTab(0, 'All')">All</p>
        <p v-for="(type, index) in types" class="px-5 py-2 w-full border rounded-3xl whitespace-nowrap cursor-pointer"
            @click="handleActiveTab(index + 1, type)"
            :class="activeTab === index + 1 ? 'bg-[transparent]' : 'bg-[#919090]'">{{ type
            }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, type PropType, defineEmits } from 'vue';

defineProps({
    types: {
        type: Array as PropType<string[]>
    }
})

const activeTab = ref(0)
const emit = defineEmits(['handleEmit'])

const handleEmit = (type: string) => {
    emit("handleEmit", type)
}
const handleActiveTab = (index: number, type: string) => {
    activeTab.value = index
    handleEmit(type)
}

</script>

<style scoped></style>