
<template >
  <button class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 border-2 border-alphaWhite bg-alphaLightBlack rounded-md px-4 py-2 flex items-center gap-3">
    <div class="flex flex-col gap-1">
      <span class="w-5 h-0.5 bg-alphaWhite"></span>
      <span class="w-5 h-0.5 bg-alphaWhite"></span>
      <span class="w-5 h-0.5 bg-alphaWhite"></span>
    </div>
    <span class="text-lg">Menu</span>
  </button>
  <header class="relative h-screen snap-start">
    <div class="bg-alphaLightBlack justify-center items-center flex p-6">
      <p class="uppercase font-bold text-2xl">Jara verbrugghe</p>
    </div>
    <div class="mx-6 relative">
      <div class="pt-6 mt-6 relative overflow-hidden">
        <p class="font-secondary font-bold bg-alphaOrange absolute px-3 py-0.5 rounded-full tracking-wider right-6 top-0">2026</p>
        <h1 class="uppercase font-secondary font-bold text-7xl">Portfolio</h1>
      </div>
      <div>
        <p class="text-2xl">Devine student</p>
      </div>
      <p class="absolute text-[110px] uppercase font-secondary font-bold text-outline -rotate-15 -left-12 top-10 -z-10">Developer</p>
      <div>
        <p class="leading-relaxed mt-25">
          <span class="text-alphaOrange font-bold">&lt;span&gt;</span>
          <span class="block"> &nbsp;&nbsp;Frontend Developer <br> &nbsp;&nbsp;in the making. <br> &nbsp;&nbsp;Graduating in July 2026</span>
          <span class="text-alphaOrange font-bold">&lt;/span&gt;</span>
        </p>
      </div>
    </div>
    <p class="absolute text-[310px] uppercase font-bold text-outline-xl -left-32 bottom-0 -z-10 -tracking-[0.12em]">&lt;/&gt;</p>
    <div class="absolute right-2 bottom-4 flex flex-col items-center gap-2">
      <p class="text-sm tracking-widest" style="writing-mode: vertical-rl; text-orientation: mixed;">SCROLL DOWN</p>
      <svg class="w-4 h-6" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L8 22M8 22L1 15M8 22L15 15" stroke="currentColor" stroke-width="2"/>
      </svg>
    </div>

  </header>
  <section class="mx-6 min-h-screen snap-start">
    <SubTitles mainText="About Me" backgroundText="About" />
    <div class="relative flex justify-center items-center h-96">
      <div class="absolute top-15 left-[58%] -translate-x-1/2 w-64 h-80 border-6 border-alphaOrange rounded-2xl"></div>
      <div class="relative w-64 h-80 bg-alphaWhite rounded-2xl shadow-lg"></div>
    </div>
    <div class="mt-12 text-center font-bold">
      <p >Want to know more about me?</p>
      <button class="mt-2 px-4 py-2 bg-alphaOrange uppercase text-white rounded-md">Resume</button>
    </div>
  </section>
  <section class="snap-none mx-6">
    <SubTitles mainText="Skills" backgroundText="Skills" />
    <p class="mb-8">I learned a lot of skills during my studies, so these are the top skills I have acquired:</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <SkillCard name="HTML" iconUrl="/icons/html.svg" :percentage="90" />
      <SkillCard name="JavaScript" iconUrl="/icons/javascript.svg" :percentage="85" />
      <SkillCard name="TypeScript" iconUrl="/icons/typescript.svg" :percentage="80" />
      <SkillCard name="React" iconUrl="/icons/react.svg" :percentage="75" />
      <SkillCard name="Vue" iconUrl="/icons/vue.svg" :percentage="85" />
      <SkillCard name="Tailwind" iconUrl="/icons/tailwind.svg" :percentage="90" />
      <SkillCard name="CSS" iconUrl="/icons/css.svg" :percentage="88" />
      <SkillCard name="Vite" iconUrl="/icons/vite.svg" :percentage="82" />
    </div>
  </section>
  <section class="snap-none pb-20">
    <div class="mx-6">
      <SubTitles mainText="My Projects" backgroundText="Projects" />
      <p class="mb-8">Here are my top 5 projects:</p>
    </div>
    
    <div class="relative overflow-hidden">
      <!-- Carousel Container -->
      <div 
        ref="carouselRef"
        class="overflow-hidden touch-pan-y"
        @mousedown="handleDragStart"
        @mousemove="handleDragMove"
        @mouseup="handleDragEnd"
        @mouseleave="handleDragEnd"
        @touchstart="handleDragStart"
        @touchmove="handleDragMove"
        @touchend="handleDragEnd"
      >
        <div 
          class="flex gap-4 transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
          <!-- Triple loop: render projects 3 times for smooth infinite scroll -->
          <template v-for="repeatIndex in 3" :key="`repeat-${repeatIndex}`">
            <div 
              v-for="(project, index) in projects" 
              :key="`${repeatIndex}-${project.id}`"
              class="flex-shrink-0" 
              :style="{ width: cardWidth }"
            >
              <ProjectCard 
                :number="project.id"
                :title="project.title"
                :category="project.category"
                :description="project.description"
                :imageUrl="project.imageUrl"
                :isActive="isActiveSlide(repeatIndex, index)"
              />
            </div>
          </template>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide" 
        class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-alphaOrange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all z-10"
      >
        <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button 
        @click="nextSlide" 
        class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-alphaOrange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all z-10"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots Navigation -->
      <div class="flex justify-center gap-2 mt-6">
        <button 
          v-for="(project, index) in projects" 
          :key="project.id"
          @click="goToSlide(index)"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentSlide % totalSlides === index ? 'bg-alphaOrange w-8' : 'bg-alphaLightBlack'"
        />
      </div>
    </div>

    <p class="uppercase text-center underline mt-6 mb-8">View all projects</p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'// @ts-ignore 
import SubTitles from '../components/SubTitles.vue' // @ts-ignore 
import SkillCard from '../components/SkillCard.vue' // @ts-ignore 
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'The easy cat set',
    category: 'IoT',
    description: 'An IoT solution to make pet care easier',
    imageUrl: '' 
  },
  {
    id: 2,
    title: 'Project Name 2',
    category: 'Web App',
    description: 'A modern web application',
    imageUrl: ''
  },
  {
    id: 3,
    title: 'Project Name 3',
    category: 'Mobile',
    description: 'Mobile-first design',
    imageUrl: ''
  },
  {
    id: 4,
    title: 'Project Name 4',
    category: 'UI/UX',
    description: 'Clean interface design',
    imageUrl: ''
  },
  {
    id: 5,
    title: 'Project Name 5',
    category: 'Full Stack',
    description: 'End-to-end solution',
    imageUrl: ''
  }
]

const carouselRef = ref<HTMLElement | null>(null)
const currentSlide = ref(projects.length) // Start at middle set (second loop)
const totalSlides = projects.length
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const dragOffset = ref(0)

// Fixed card width for better side visibility
const cardWidth = computed(() => {
  if (!carouselRef.value) return '70%'
  const containerWidth = carouselRef.value.offsetWidth
  return `${containerWidth * 0.7}px`
})

// Calculate translateX - centered with side cards visible
const translateX = computed(() => {
  if (!carouselRef.value) return 0
  const containerWidth = carouselRef.value.offsetWidth
  const cardWidthPx = containerWidth * 0.7
  const gapPx = 16 // gap-4 = 1rem = 16px
  
  // Center the active card: start from center of container, minus half card width
  const centerPosition = (containerWidth / 2) - (cardWidthPx / 2)
  
  // Move left by the currentSlide amount
  const slideMovement = currentSlide.value * (cardWidthPx + gapPx)
  
  return centerPosition - slideMovement + dragOffset.value
})

// Check if a slide is active (centered) - works with triple loop
const isActiveSlide = (repeatIndex: number, index: number) => {
  const slideIndex = (repeatIndex - 1) * totalSlides + index
  return slideIndex === currentSlide.value
}

// Infinity loop navigation - reset position when reaching ends
const nextSlide = () => {
  currentSlide.value++
  
  // If we've gone past the middle set, instantly reset to start of middle set
  if (currentSlide.value >= totalSlides * 2) {
    setTimeout(() => {
      // Temporarily disable transitions
      const carousel = carouselRef.value?.querySelector('.flex')
      if (carousel) {
        (carousel as HTMLElement).style.transition = 'none'
      }
      
      // Reset to equivalent position in middle set
      currentSlide.value = currentSlide.value - totalSlides
      
      // Re-enable transitions
      setTimeout(() => {
        if (carousel) {
          (carousel as HTMLElement).style.transition = ''
        }
      }, 50)
    }, 500)
  }
}

const prevSlide = () => {
  currentSlide.value--
  
  // If we've gone before the middle set, instantly reset to end of middle set
  if (currentSlide.value < totalSlides) {
    setTimeout(() => {
      // Temporarily disable transitions
      const carousel = carouselRef.value?.querySelector('.flex')
      if (carousel) {
        (carousel as HTMLElement).style.transition = 'none'
      }
      
      // Reset to equivalent position in middle set
      currentSlide.value = currentSlide.value + totalSlides
      
      // Re-enable transitions
      setTimeout(() => {
        if (carousel) {
          (carousel as HTMLElement).style.transition = ''
        }
      }, 50)
    }, 500)
  }
}

const goToSlide = (index: number) => {
  // Go to the middle set version of this slide
  currentSlide.value = totalSlides + index
}

// Drag handlers
const handleDragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  startX.value = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
  currentX.value = startX.value
  stopAutoPlay()
}

const handleDragMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return
  
  currentX.value = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
  dragOffset.value = currentX.value - startX.value
}

const handleDragEnd = () => {
  if (!isDragging.value) return
  
  const threshold = 50
  if (dragOffset.value < -threshold) {
    nextSlide()
  } else if (dragOffset.value > threshold) {
    prevSlide()
  }
  
  isDragging.value = false
  dragOffset.value = 0
  startAutoPlay()
}

// Auto-play with infinity loop
let autoPlayInterval: number | null = null
const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval = window.setInterval(() => {
    nextSlide()
  }, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
