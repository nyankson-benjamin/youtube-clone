<template>
    <div class="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)]">
        <div class="modal-content border mt-[15%] m-auto p-5 w-1/2 rounded-2xl"
            :class="store.theme === 'light' ? 'bg-white' : 'bg-black'">
            <div class="flex justify-between items-center">
                <slot name="title"></slot>
                <CloseIcon @closeModal="$emit('closeModal')"/>
            </div>

            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/store";
const store = useStore();
import CloseIcon from "@/assets/Icons/CloseIcon.vue";

</script>

<style lang="css" scoped>
.close {
    color: #aaa;
    /* float: right; */
    font-size: 28px;
}

.close:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>