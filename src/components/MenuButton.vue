<template>
  <div class="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3">
    <!-- Alleen tonen als title === 'Menu' -->
    <Transition name="menu-items" v-if="title === 'Menu'">
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
    <template v-if="title === 'Menu'">
      <button 
        @click="toggleMenu"
        class="border-2 border-alphaWhite bg-alphaLightBlack rounded-md px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:border-alphaOrange"
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
    </template>

    <!-- Go Back knop -->
    <template v-else>
      <button 
        @click="goBack"
        class="border-2 border-alphaWhite bg-alphaLightBlack rounded-md px-6 py-3 flex items-center gap-3 text-lg text-white font-bold transition-all duration-300 hover:border-alphaOrange hover:bg-alphaOrangeHover"
      >
        {{ title }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps<{
  title: string
}>()

const router = useRouter()
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

const goBack = () => {
  router.back()
}
</script>
