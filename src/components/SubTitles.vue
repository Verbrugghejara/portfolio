<template>
  <div class="relative mt-12 text-center font-secondary">
    <h2 class="text-[96px] font-bold text-alphaLightBlack">{{ backgroundText }}</h2>
    <p class="absolute top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-alphaOrange whitespace-nowrap">{{ mainText }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mainText: string
  backgroundText: string
}>()
</script>