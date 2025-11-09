<template>
  <div class="relative mt-12 text-center font-secondary">
    <h2 class="text-[clamp(6rem,24vw,10rem)] font-bold text-alphaLightBlack">{{ backgroundText }}</h2>
    <p class="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(2.5rem,10vw,4rem)] font-bold text-alphaOrange whitespace-nowrap">{{ mainText }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mainText: string
  backgroundText: string
}>()
</script>