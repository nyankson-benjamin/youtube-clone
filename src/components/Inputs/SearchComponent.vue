<template>
    <div class="flex items-center gap-3 w-1/2">
        <div class="flex w-full">
            <input type="text" class="h-10 w-full border p-2 rounded-tl-3xl rounded-bl-3xl"
                :class="store.theme === 'light' ? ' bg-[#fff] text-[#000]' : 'bg-[#000] text-[#fff]'" v-bind="$attrs"
                :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                placeholder="Search">
            <div title="Search"
                class="h-10 border w-20 border-l-0 bg-[#adadad] flex justify-center items-center rounded-tr-3xl rounded-br-3xl">
                <SearchIcon />
            </div>
        </div>

        <MicroPhone />
    </div>
</template>

<script setup lang="ts">
import SearchIcon from "@/assets/Icons/SearchIcon.vue"
import MicroPhone from "@/assets/Icons/MicroPhone.vue"
import { useStore } from "@/stores/store";
import { defineProps } from "vue"

const store = (useStore())

defineProps({
    modelValue: {
        type: String
    }
})
</script>

<style scoped></style>