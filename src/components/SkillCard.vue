<template>
  <div class="relative w-32 h-32 perspective-1000">
    
    <p class="font-bold uppercase text-center">{{ name }}</p>
    <div class="flip-card-inner w-full h-full relative transition-transform duration-500 transform-style-3d">
      <div class="flip-card-front absolute w-full h-full backface-hidden">
        <div class="relative w-full h-full">
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
            <rect x="4" y="4" width="120" height="120" rx="8" fill="none" stroke="#282723" stroke-width="10" />
            <path
              d="M 64 4 L 12 4 A 8 8 0 0 0 4 12 L 4 116 A 8 8 0 0 0 12 124 L 116 124 A 8 8 0 0 0 124 116 L 124 12 A 8 8 0 0 0 116 4 L 64 4"
              fill="none" 
              stroke="#D84E2C" 
              stroke-width="10"
              stroke-linecap="round"
              :stroke-dasharray="pathLength"
              :stroke-dashoffset="pathLength - (pathLength * percentage) / 100"
              class="transition-all duration-1000"
            />
          </svg>
          <div class="absolute inset-3 flex flex-col items-center justify-center p-3">
            <img v-if="iconUrl" :src="iconUrl" :alt="name" class="w-12 h-12 object-contain mb-1" />

          </div>
        </div>
      </div>
      
      <div class="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
        <div class="relative w-full h-full">
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
            <rect x="4" y="4" width="120" height="120" rx="8" fill="none" stroke="#282723" stroke-width="6" />
            <path
              d="M 64 4 L 12 4 A 8 8 0 0 0 4 12 L 4 116 A 8 8 0 0 0 12 124 L 116 124 A 8 8 0 0 0 124 116 L 124 12 A 8 8 0 0 0 116 4 L 64 4"
              fill="none" 
              stroke="#D84E2C" 
              stroke-width="6"
              stroke-linecap="round"
              :stroke-dasharray="pathLength"
              :stroke-dashoffset="pathLength - (pathLength * percentage) / 100"
              class="transition-all duration-1000"
            />
          </svg>
          <div class="absolute inset-3 bg-alphaLightBlack rounded-lg flex flex-col items-center justify-center">
            <p class="text-4xl font-bold text-alphaOrange">{{ percentage }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  name: string
  iconUrl: string
  percentage: number
}>()

const pathLength = computed(() => {
  const straightSides = 112 * 3 + 52 
  const corners = 4 * (2 * Math.PI * 8 / 4) 
  return straightSides + corners
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.flip-card-inner:hover {
  transform: rotateY(180deg);
}
</style>
