
<template>
  <button @click="$emit('scrollToAbout')" class="flex flex-col items-center gap-2 focus:outline-none">
    <p class="text-sm tracking-widest uppercase" style="writing-mode: vertical-rl; text-orientation: mixed;">Scroll Down</p>
    <svg class="w-4 h-6" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L8 22M8 22L1 15M8 22L15 15" stroke="currentColor" stroke-width="2"/>
    </svg>
  </button>
</template>

<script setup>
defineEmits(['scrollToAbout'])
</script>
