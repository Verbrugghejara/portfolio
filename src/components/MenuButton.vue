<template>
  <div class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3">
    <!-- Menu Items -->
    <Transition name="menu-items">
      <div v-if="isOpen" class="flex flex-col gap-3 mb-2">
        <a 
          v-for="(item, index) in menuItems" 
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
          class="bg-alphaOrange hover:bg-alphaOrangeHover text-white rounded-md px-6 py-3 font-bold uppercase text-center transition-all duration-300 shadow-lg"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          {{ item.label }}
        </a>
      </div>
    </Transition>

    <!-- Menu Button -->
    <button 
      @click="toggleMenu"
      class="border-2 border-alphaWhite bg-alphaLightBlack rounded-md px-4 py-2 flex items-center gap-3 transition-all duration-300 hover:border-alphaOrange"
      :class="{ 'bg-alphaOrange border-alphaOrange': isOpen }"
    >
      <div class="flex flex-col w-5 h-4 justify-center relative">
        <span 
          class="w-5 h-0.5 bg-alphaWhite transition-all duration-300 absolute left-0"
          :class="isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'"
        ></span>
        <span 
          class="w-5 h-0.5 bg-alphaWhite transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-0"
          :class="{ 'opacity-0 scale-0': isOpen }"
        ></span>
        <span 
          class="w-5 h-0.5 bg-alphaWhite transition-all duration-300 absolute left-0"
          :class="isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'"
        ></span>
      </div>
      <span class="text-lg">{{ isOpen ? 'Close' : 'Menu' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { label: 'About Me', href: '#aboutMe' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.menu-items-enter-active {
  animation: slideUp 0.4s ease-out;
}

.menu-items-leave-active {
  animation: slideDown 0.3s ease-in;
}

.menu-items-enter-active a {
  animation: fadeInScale 0.3s ease-out backwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
