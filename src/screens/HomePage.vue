
<template >
  <MenuButton />
  <header class="relative min-h-screen">
    <HeaderBar />
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
    <div class="absolute right-2 bottom-4">
      <ScrollIndicator />
    </div>
  </header>
  <section class="mx-6 py-12">
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
  <section ref="skillsSection" class="mx-6 py-12">
    <SubTitles mainText="Skills" backgroundText="Skills" />
    <p class="mb-8">I learned a lot of skills during my studies, so these are the top skills I have acquired:</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <SkillCard name="HTML" iconUrl="/icons/html.svg" :percentage="skillsVisible ? 90 : 0" />
      <SkillCard name="JavaScript" iconUrl="/icons/javascript.svg" :percentage="skillsVisible ? 85 : 0" />
      <SkillCard name="TypeScript" iconUrl="/icons/typescript.svg" :percentage="skillsVisible ? 80 : 0" />
      <SkillCard name="React" iconUrl="/icons/react.svg" :percentage="skillsVisible ? 75 : 0" />
      <SkillCard name="Vue" iconUrl="/icons/vue.svg" :percentage="skillsVisible ? 85 : 0" />
      <SkillCard name="Tailwind" iconUrl="/icons/tailwind.svg" :percentage="skillsVisible ? 90 : 0" />
      <SkillCard name="CSS" iconUrl="/icons/css.svg" :percentage="skillsVisible ? 88 : 0" />
      <SkillCard name="Vite" iconUrl="/icons/vite.svg" :percentage="skillsVisible ? 82 : 0" />
    </div>
  </section>
  <section class="pb-20">
    <div class="mx-6">
      <SubTitles mainText="My Projects" backgroundText="Projects" />
      <p class="mb-8">Here are my top 5 projects:</p>
    </div>
    
    <div class="relative overflow-hidden">
      <div 
        ref="textOverlay"
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl z-20 pointer-events-none"
      >
        <h3 class="text-6xl mb-4 font-secondary w-max">{{ projects[currentSlide % totalSlides].title }}</h3>
        <p class="text-xl text-alphaOrange mb-2">{{ projects[currentSlide % totalSlides].category }}</p>
      </div>
      
      <div 
        ref="carouselRef"
        class="overflow-hidden"
      >
        <div 
          class="flex gap-4 transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
          <template v-for="repeatIndex in 3" :key="`repeat-${repeatIndex}`">
            <div 
              v-for="(project, index) in projects" 
              :key="`${repeatIndex}-${project.id}`"
              class="shrink-0" 
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
    </div>

    <p class="uppercase text-center underline mt-6 mb-8">View all projects</p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects'
// @ts-ignore
import MenuButton from '../components/MenuButton.vue'
// @ts-ignore
import HeaderBar from '../components/HeaderBar.vue'
// @ts-ignore
import ScrollIndicator from '../components/ScrollIndicator.vue'
// @ts-ignore
import SubTitles from '../components/SubTitles.vue'
// @ts-ignore
import SkillCard from '../components/SkillCard.vue'
// @ts-ignore
import ProjectCard from '../components/ProjectCard.vue'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const carouselRef = ref<HTMLElement | null>(null)
const textOverlay = ref<HTMLElement | null>(null)
const skillsSection = ref<HTMLElement | null>(null)
const skillsVisible = ref(false)
const currentSlide = ref(projects.length)
const totalSlides = projects.length

const cardWidth = computed(() => {
  if (!carouselRef.value) return '70%'
  const containerWidth = carouselRef.value.offsetWidth
  return `${containerWidth * 0.7}px`
})

const translateX = computed(() => {
  if (!carouselRef.value) return 0
  const containerWidth = carouselRef.value.offsetWidth
  const cardWidthPx = containerWidth * 0.7
  const gapPx = 16
  
  const centerPosition = (containerWidth / 2) - (cardWidthPx / 2)
  const slideMovement = currentSlide.value * (cardWidthPx + gapPx)
  
  return centerPosition - slideMovement
})

const isActiveSlide = (repeatIndex: number, index: number) => {
  const slideIndex = (repeatIndex - 1) * totalSlides + index
  return slideIndex === currentSlide.value
}

const animateTextChange = (onMidpoint?: () => void) => {
  if (!textOverlay.value) return
  
  const timeline = gsap.timeline()
  
  timeline
    .to(textOverlay.value, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => {
        if (onMidpoint) onMidpoint()
      }
    })
    .set(textOverlay.value, {
      y: 50
    })
    .to(textOverlay.value, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    })
}

const nextSlide = () => {
  const willReset = currentSlide.value + 1 >= totalSlides * 2
  
  if (willReset) {
    animateTextChange(() => {
      const carousel = carouselRef.value?.querySelector('.flex')
      if (carousel) {
        (carousel as HTMLElement).style.transition = 'none'
      }
      currentSlide.value = totalSlides - 1
      
      requestAnimationFrame(() => {
        if (carousel) {
          (carousel as HTMLElement).style.transition = ''
        }
        currentSlide.value++
      })
    })
  } else {
    animateTextChange(() => {
      currentSlide.value++
    })
  }
}

const prevSlide = () => {
  const willReset = currentSlide.value - 1 < totalSlides
  
  if (willReset) {
    animateTextChange(() => {
      const carousel = carouselRef.value?.querySelector('.flex')
      if (carousel) {
        (carousel as HTMLElement).style.transition = 'none'
      }
      currentSlide.value = totalSlides * 2
      
      requestAnimationFrame(() => {
        if (carousel) {
          (carousel as HTMLElement).style.transition = ''
        }
        currentSlide.value--
      })
    })
  } else {
    animateTextChange(() => {
      currentSlide.value--
    })
  }
}

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

let hasSnapped = false
let isSnapping = false

const handleScroll = (event: Event) => {
  if (hasSnapped || isSnapping) return
  
  const target = event.target as HTMLElement
  const scrollTop = target.scrollTop
  
  if (scrollTop > 5) {
    isSnapping = true
    hasSnapped = true
    
    const aboutSection = document.querySelector('section')
    
    if (aboutSection) {
      gsap.to(target, {
        duration: 0.6,
        scrollTo: { y: aboutSection, autoKill: false },
        ease: 'power2.out',
        onComplete: () => {
          isSnapping = false
          const scrollContainer = document.querySelector('.overflow-y-scroll')
          if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', handleScroll)
          }
        }
      })
    }
  }
}

onMounted(() => {
  startAutoPlay()
  
  if (textOverlay.value) {
    gsap.set(textOverlay.value, { y: 0, opacity: 1 })
  }
  
  const scrollContainer = document.querySelector('.overflow-y-scroll')
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
    
    if (skillsSection.value) {
      ScrollTrigger.create({
        trigger: skillsSection.value,
        scroller: scrollContainer,
        start: 'top 50%',
        once: true,
        onEnter: () => {
          skillsVisible.value = true
        }
      })
    }
  }
})

onUnmounted(() => {
  stopAutoPlay()
  
  const scrollContainer = document.querySelector('.overflow-y-scroll')
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', handleScroll)
  }
})
</script>
