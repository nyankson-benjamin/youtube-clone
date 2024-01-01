<template>
  <VideoTypes :types="videoTypes"/>
  <div class="scroll flex gap-4 mx-3 w-full h-[100vh]  my-20">
    <div class="h-[100vh] w-[70%] scroll hover:overflow-y-scroll overflow-y-hidden">
      <div class="mb-28">
        <video class="w-full rounded-tl-xl rounded-tr-xl" autoplay controls>
            <source :src="currentVideo?.preview" type="video/mp4">
        </video>        <p class="mt-5">{{ currentVideo?.title }}</p>
        <div class="flex mt-5 items-center gap-5">
          <img :src="currentVideo?.logo" alt="">
          <p class="">{{ currentVideo?.channel }}</p>
        </div>
        <div class="  mt-5 p-3 rounded-xl">
          <div class="description" v-if="!showAll">
            {{ currentVideo?.description }}
          </div>
          <div v-else>
            <p>{{ currentVideo?.description }}</p>
          </div>
          <p class="cursor-pointer" @click="showAll = !showAll">{{ showAll ? 'show less' : 'show more' }}</p>
        </div>


      </div>
    </div>
    <div class="scroll hover:overflow-y-scroll overflow-y-hidden">
      <VideoCard v-for="video in restOfData" :key="video.id" :video="video" />
      <br>
    </div>
  </div>
</template>
<script setup lang="ts">
import { data } from '@/constants/videoData';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import VideoCard from '@/components/VideoCard.vue';
import { decodeUrlPath } from '@/helpers/utils';
import VideoTypes from "@/components/VideoTypes.vue"


const { id } = useRoute().params
const showAll = ref(false)

const currentVideo = computed(() => {
  return data?.find(item => (item.id) === Number(decodeUrlPath(id as string)))
})

const restOfData = computed(() => {
  return data.filter(video => video.id !== Number(id))
})


const videoTypes = computed(() => {
    return data.map((item) => item.type)
})


</script>

<style scoped>
.description {
  line-height: 21px;
  height: calc(3*21px);
  overflow: hidden;
  position: relative;
}

.description::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 21px;
  width: 75%;
  /* background: linear-gradient(90deg, transparent, red); */
  color: linear-gradient(90deg, transparent, red);
}
</style>
