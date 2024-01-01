<template>
    <div>
        <SideBarStyle :items="items" />
    </div>
</template>

<script setup lang="ts">
import HomeIconVue from "@/assets/Icons/SideBar/HomeIcon.vue";
import SubscriptionsIconVue from "@/assets/Icons/SideBar/SubscriptionsIcon.vue";
import ShortsIconVue from "@/assets/Icons/SideBar/ShortsIcon.vue";
import ExploreIconVue from "@/assets/Icons/SideBar/ExploreIcon.vue";
import SideBarStyle from "./SideBarStyle.vue";
const items = [
    {
        name: "Home",
        icon: HomeIconVue,
        route: "#",
    },
    {
        name: "Explore",
        icon: ExploreIconVue,
        route: "#",
    },
    {
        name: "Shorts",
        icon: ShortsIconVue,
        route: "#",
    },
    {
        name: "Subscriptions",
        icon: SubscriptionsIconVue,
        route: "#",
    },
];
</script>

<style scoped></style>