import { onMounted,ref } from "vue";
import axios from "axios";
import { useStore } from "@/stores/store";

export const useGetVideos = () => {
  const store = useStore();
  const data = ref()
  // const key = import.meta.env.VITE_APP_KEY;

  const getVideos = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/data`);

      console.log(res?.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  onMounted(async () => {
    getVideos();
  });
};
