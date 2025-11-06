<template>
  <div class="relative h-[400px] w-[300px] md:w-full md:h-full md:max-w-[500px] md:max-h-[650px] rounded-2xl overflow-hidden bg-alphaLightBlack" 
    :class="{ 'scale-95 opacity-60': !isActive, 'scale-100 opacity-100': isActive }"
    :style="isActive && (cardRotateY || cardRotateX) ? { 
      transform: `scale(${isActive ? 1 : 0.95}) rotateY(${cardRotateY || 0}deg) rotateX(${cardRotateX || 0}deg)`,
      transformStyle: 'preserve-3d'
    } : {}">
    <div class="w-full h-[250px] md:h-[65%] bg-gradient-to-br from-alphaOrange to-alphaLightBlack flex items-center justify-center">
      <img v-if="imageUrl" :src="imageUrl" :alt="title" class="w-full h-full object-cover" />
      <p v-else class="text-6xl md:text-8xl font-bold opacity-20">{{ number }}</p>
    </div>
    <div class="p-4 md:p-6 md:h-[35%]">
      <span class="inline-block bg-alphaOrange text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3">{{ category }}</span>
      <h3 class="text-xl md:text-2xl font-bold mb-2">{{ title }}</h3>
      <p class="text-sm md:text-base text-alphaWhite/80">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number
  title: string
  category: string
  description: string
  imageUrl?: string
  isActive: boolean
  cardRotateY?: number
  cardRotateX?: number
}>()
</script>
