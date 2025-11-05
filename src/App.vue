
<template>
  
  <div ref="scrollContainer" class="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
    <HomePage class=""></HomePage>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomePage from './screens/HomePage.vue'

const scrollContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  let hasSnapped = false
  
  const handleScroll = () => {
    if (!hasSnapped && scrollContainer.value) {
      const scrollTop = scrollContainer.value.scrollTop
      if (scrollTop > window.innerHeight / 2) {
        hasSnapped = true
        setTimeout(() => {
          if (scrollContainer.value) {
            scrollContainer.value.classList.remove('snap-y', 'snap-mandatory')
          }
        }, 500)
      }
    }
  }
  
  scrollContainer.value?.addEventListener('scroll', handleScroll)
})
</script>
