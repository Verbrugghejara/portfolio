<template>
  <div class="relative h-[365px] w-[265px] md:max-w-[500px] md:max-h-[650px] rounded-2xl overflow-hidden bg-alphaLightBlack">
    <div class="w-full h-full relative">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover block"
      />
      <div
        v-if="showOverlayOnHover"
        class="absolute inset-0 bg-alphaBlack/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
      ></div>
      <div
        v-else
        class="absolute inset-0 bg-alphaBlack/70 z-10 pointer-events-none"
      ></div>
    </div>
    <span
      v-if="label === true"
      :key="program"
      class="inline-block absolute top-4 left-4 bg-alphaOrange text-white text-xs md:text-sm font-bold px-3 py-1 rounded-md mb-3 z-20"
      >{{ program }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  number: Number,
  title: String,
  program: String,
  modules: {
    type: Array,
    default: () => []
  },
  briefing: String,
  imageUrl: String,
  isActive: Boolean,
  cardRotateY: Number,
  cardRotateX: Number,
  label: {
    type: Boolean,
    default: true
  },
  showOverlayOnHover: {
  type: Boolean,
  default: false
}
})

</script>
