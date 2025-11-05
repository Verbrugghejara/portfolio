<template>
  <div class="relative h-[400px] max-w-[300px] rounded-2xl overflow-hidden bg-alphaLightBlack transition-all duration-300" :class="{ 'scale-95 opacity-60': !isActive, 'scale-100 opacity-100': isActive }">
    <div class="w-full h-[250px] bg-gradient-to-br from-alphaOrange to-alphaLightBlack flex items-center justify-center">
      <img v-if="imageUrl" :src="imageUrl" :alt="title" class="w-full h-full object-cover" />
      <p v-else class="text-6xl font-bold opacity-20">{{ number }}</p>
    </div>
    <div class="p-4">
      <span class="inline-block bg-alphaOrange text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{{ category }}</span>
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-sm text-alphaWhite/80">{{ description }}</p>
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
}>()
</script>
