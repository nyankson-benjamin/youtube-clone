import type { storeTypes } from "@/Types/storeTypes";
import { defineStore } from "pinia";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

export const useStore = defineStore({
  id: "store",
  state: (): storeTypes => ({
    showSideBar: false,
    theme: prefersDarkMode ? "dark" : "light",
    searchItem: "",
  }),
});
