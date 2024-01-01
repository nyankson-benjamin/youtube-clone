<template>
    <div>
        <!-- div for dropdown svg -->
        <div class="relative">
            <div :data-cy="dataCy" @click="showdropDown = !showdropDown">
                <div v-if="showActionIcon" class="w-full h-full p-2  flex items-center justify-center rounded-full"
                    :class="store.theme === 'light' ? 'hover:bg-[rgba(0,0,0,0.05)]' : 'hover:bg-[rgba(206,205,205,0.5)]'">
                    <component :is="actionIcon" />
                </div>
            </div>
            <!-- div for the dropdown -->
            <div class="absolute z-50 min-w-[10rem] mt-3" :class="absoluteClass" v-if="showdropDown">
                <ul class="flex flex-col rounded-lg  shadow-lg"
                    :class="store.theme === 'light' ? 'bg-white text-[#000]' : 'bg-black text-[#fff]'">
                    <!-- <p class="P100 N600 p-4">ACTIONS</p> -->
                    <li v-for="option of optionsList" :key="option.id">
                        <div class="
                  P200
                  flex
                  content-center
                  px-4
                  py-3
                  cursor-pointer
                " :class="store.theme === 'light' ? 'hover:border-[#000000] hover:border-l-[3px]' : 'hover:border-[#ffffff]'"
                            @mouseover="activeOption = option.id" @mouseleave="activeOption = 0" @click="
                                [
                                    $emit('selectOption', option.name),
                                    (showdropDown = !showdropDown),
                                ]
                                ">
                            <div class="flex flex-row gap-2">
                                <div v-if="option.icon" class="flex items-center">
                                    <component :is="option.icon" :fill="activeOption == option.id
                                        ? '#dd5928'
                                        : option.fill
                                            ? option.fill
                                            : '#696F8C'
                                        " :key="option.id" />
                                </div>
                                <div v-if="option.label" :class="optionLabelStyle">
                                    {{ option.label }}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { type Component, type PropType, ref, watch } from "vue";
import { useStore } from "@/stores/store";
const store = useStore()

type OptionsType = {
    label: string,
    icon: Component,
    route: string
    id: number
    name: string
    fill: string
}
defineProps({
    optionsList: {
        type: Array as PropType<OptionsType[]>,
    },
    menuStyle: {
        type: String,
    },
    optionLabelStyle: {
        type: String,
        default: "flex whitespace-nowrap",
    },
    absoluteClass: {
        type: String,
        default: "right-0",
    },
    dataCy: {
        type: String,
        default: "actions",
    },
    showDateIcon: {
        type: Boolean,
        default: false,
    },
    showActionIcon: {
        type: Boolean,
        default: true,
    },
    actionIcon: String as PropType<Component>
});

const showdropDown = ref(false);
const activeOption = ref(0);

watch(showdropDown, () => {
    if (showdropDown.value) {
        const stopInterval = setInterval(() => {
            if (!activeOption.value) {
                showdropDown.value = false;
                clearInterval(stopInterval);
            }
        }, 2000);
    } else {
        activeOption.value = 0;
    }
});
</script>
  