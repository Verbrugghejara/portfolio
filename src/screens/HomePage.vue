<template>
  <MenuButton />
  <header class="relative min-h-screen">
    <HeaderBar class="lg:hidden"/>
    <div class="mx-6 md:mx-12 relative">
      <div class="pt-6 mt-6 relative overflow-hidden w-fit pr-[35px] lg:pr-[90px]">
        <p
          class="font-secondary text-[clamp(1rem,4vw,1.5rem)] font-bold bg-alphaOrange absolute px-3 py-0.5 rounded-full tracking-wider right-0 top-6 lg:top-32 sm:top-8 md:top-11">
          2026</p>
        <h1 class="uppercase font-secondary font-bold text-[clamp(5rem,21vw,16rem)]">Portfolio</h1>
      </div>
      <div class="h-8 flex items-center -mt-6 sm:-mt-10 lg:hidden">
        <p class="text-2xl">{{ displayText }}<span class=" text-alphaOrange font-bold">|</span></p>
      </div>
      <div class="h-8 items-center -mt-6 sm:-mt-10 hidden lg:flex">
        <p class="uppercase text-2xl">Jara verbrugghe</p>
        <div class="border-b-2 w-[45%] mr-2 ml-2"></div>
        <p class="text-2xl">{{ displayText }}<span class=" text-alphaOrange font-bold">|</span></p>
      </div>
      <p class="absolute text-[clamp(7rem,29vw,36rem)] uppercase font-secondary font-bold text-outline -rotate-15 -left-[10%] top-10 -z-10">
        Developer</p>
      <div class="justify-end flex mr-6 sm:text-xl">
        <p class="leading-relaxed mt-15 lg:mt-30 2xl:mr-30">
          <span class="text-alphaOrange font-bold">&lt;span&gt;</span>
          <span class="block"> &nbsp;&nbsp;Frontend Developer <br class="sm:hidden"> <span class="sm:hidden">&nbsp;&nbsp;</span>  in the making. <br>
            &nbsp;&nbsp;Graduating in July 2026</span>
          <span class="text-alphaOrange font-bold">&lt;/span&gt;</span>
        </p>

      </div>
    </div>
    <p class="absolute lg:hidden text-[clamp(20rem,80vw,50rem)] uppercase font-bold text-outline-xl -left-[35%] bottom-0 -z-10 -tracking-[0.12em]">
      &lt;/&gt;</p>
    <div class="absolute right-2 sm:right-4 bottom-4 lg:bottom-9">
      <ScrollIndicator />
    </div>
  </header>
  <section class="mx-6 md:mx-12 lg:mx-16 2xl:mx-32">
    <SubTitles mainText="About Me" backgroundText="About" />
    <div class="lg:flex lg:flex-row-reverse lg:justify-center lg:gap-[5%] xl:gap-[15%] lg:items-center">
      <div>
        <div class="relative flex justify-center items-center h-96">
          <div class="absolute top-13 left-1/2 -translate-x-[calc(50%-2rem)] translate-y-4 w-64 h-80 border-6 border-alphaOrange rounded-2xl"></div>
          <div class="relative w-64 h-80 bg-alphaWhite rounded-2xl shadow-lg"></div>
        </div>
        <div class="mt-12 text-center font-bold hidden lg:block">
        <p>Want to know more about me?</p>
        <button class="mt-2 px-4 py-2 bg-alphaOrange uppercase text-white rounded-md">Resume</button>
      </div>

      </div>
      <div class="bg-alphaLightBlack rounded-md w-full h-fit mt-8 p-4 max-w-[600px] mx-auto lg:mx-0">
        <div class="flex items-center gap-4">
          <div class="flex gap-1">
            <div class="w-[13px] h-[13px] bg-[#FF5F56] rounded-full"></div>
            <div class="w-[13px] h-[13px] bg-[#FFBD2E] rounded-full"></div>
            <div class="w-[13px] h-[13px] bg-[#27C93F] rounded-full"></div>
          </div>
          <p>about-me.js</p>
        </div>
        <div class="mt-4 w-full overflow-x-auto">
    <pre class=" text-white p-4 rounded-2xl font-mono leading-relaxed min-w-[500px]">
  <span class="text-alphaOrange">const</span> Jara = {
    version: <span class="text-alphaOrange">"2002.03.29"</span>,
    location: [<span class="text-alphaOrange">"Ruiselede", "Belgium"</span>],
    languages: [<span class="text-alphaOrange">"Dutch", "English", "HTML", "CSS", "JS"</span>],
    status: <span class="text-alphaOrange">"Student"</span>,
    education: [
      {
        program: <span class="text-alphaOrange">"Multimedia and Creative Technologies (MCT)"</span>,
        university: <span class="text-alphaOrange">"Howest University of Applied Sciences"</span>,
        graduated: <span class="text-alphaOrange">"2023"</span>
      },
      {
        program: <span class="text-alphaOrange">"Digital Design and Development (DEVINE)"</span>,
        university: <span class="text-alphaOrange">"Howest University of Applied Sciences"</span>,
        graduating: <span class="text-alphaOrange">"2026"</span>
      }
    ],
    likes: [<span class="text-alphaOrange">"Clean design", "Night coding"</span>],
    dislikes: [<span class="text-alphaOrange">"Clunky UX"</span>],
    hobbies: [<span class="text-alphaOrange">"Soccer", "Gaming", "Hanging out with friends"</span>]
  };
    </pre>
  </div>
  <div class="flex gap-2 items-center justify-center mt-4 sm:hidden">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  <p class="uppercase">scroll horizontal</p>
  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  </div>
  
      </div>

    </div>
    <div class="mt-12 text-center font-bold lg:hidden">
      <p>Want to know more about me?</p>
      <button class="mt-2 px-4 py-2 bg-alphaOrange uppercase text-white rounded-md">Resume</button>
    </div>
  </section>
  <section ref="skillsSection" class="py-12 ">
    <div class="max-w-4xl mx-auto px-6">
      <SubTitles mainText="Skills" backgroundText="Skills" />
      <p class="mb-8 text-center max-w-xl mx-auto">I learned a lot of skills during my studies, so these are the top skills I have acquired:</p>

      <div class="flex justify-center">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-15 justify-items-center">
          <SkillCard name="HTML" iconUrl="/icons/html.svg" :percentage="skillsVisible ? 90 : 0" />
          <SkillCard name="JavaScript" iconUrl="/icons/javascript.svg" :percentage="skillsVisible ? 85 : 0" />
          <SkillCard name="TypeScript" iconUrl="/icons/typescript.svg" :percentage="skillsVisible ? 80 : 0" />
          <SkillCard name="React" iconUrl="/icons/react.svg" :percentage="skillsVisible ? 75 : 0" />
          <SkillCard name="Vue" iconUrl="/icons/vue.svg" :percentage="skillsVisible ? 85 : 0" />
          <SkillCard name="Tailwind" iconUrl="/icons/tailwind.svg" :percentage="skillsVisible ? 90 : 0" />
          <SkillCard name="CSS" iconUrl="/icons/css.svg" :percentage="skillsVisible ? 88 : 0" />
          <SkillCard name="Vite" iconUrl="/icons/vite.svg" :percentage="skillsVisible ? 82 : 0" />
        </div>
      </div>
    </div>
  </section>
  <section class="pb-20 2xl:mx-32">
    <div class="mx-6 md:mx-12">
      <SubTitles mainText="My Projects" backgroundText="Projects" />
      <p class="mb-8">Here are my top 5 projects:</p>
    </div>

    <div class="relative overflow-hidden">
      <div ref="textOverlay"
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl z-20 pointer-events-none">
        <h3 class="text-6xl mb-4 font-secondary w-max">{{ projects[currentSlide % totalSlides].title }}</h3>
        <p class="text-xl text-alphaOrange mb-2">{{ projects[currentSlide % totalSlides].category }}</p>
      </div>

      <div ref="carouselRef" class="overflow-hidden ">
        <div class="flex transition-transform duration-500 ease-in-out  "
          :style="{ transform: `translateX(${translateX}px)`, gap: '0.25rem' }">
          <template v-for="repeatIndex in 5" :key="`repeat-${repeatIndex}`">
            <div v-for="(project, index) in projects" :key="`${repeatIndex}-${project.id}`" 
              class="shrink-0 max-w-[300px] transition-all duration-500"
              :style="{ 
                width: cardWidth, 
                transform: getCardTransform(repeatIndex, index),
                opacity: getCardOpacity(repeatIndex, index)
              }">
              <ProjectCard :number="project.id" :title="project.title" :category="project.category"
                :description="project.description" :imageUrl="project.imageUrl"
                :isActive="isActiveSlide(repeatIndex, index)" />
            </div>
          </template>
        </div>
      </div>

      <button @click="prevSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-alphaOrange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all z-10">
        <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button @click="nextSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-alphaOrange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all z-10">
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
const currentSlide = ref(projects.length * 2)
const totalSlides = projects.length

const displayText = ref('')
const texts = ['Devine student', 'Frontend Developer', 'Creative Coder', 'MCT student']
let textIndex = 0
let charIndex = 0
let isDeleting = false
let typewriterTimeout: number | null = null

const cardWidth = computed(() => {
  if (!carouselRef.value) return '70%'
  const containerWidth = carouselRef.value.offsetWidth
  const calculatedWidth = containerWidth * 0.7
  return `${Math.min(calculatedWidth, 300)}px`
})

const translateX = computed(() => {
  if (!carouselRef.value) return 0
  const containerWidth = carouselRef.value.offsetWidth
  const calculatedWidth = containerWidth * 0.7
  const cardWidthPx = Math.min(calculatedWidth, 300)
  const gapPx = 4 // 0.25rem = 4px
  
  // Clean calculation without compensation
  const effectiveSpacing = cardWidthPx + gapPx

  const centerPosition = (containerWidth / 2) - (cardWidthPx / 2)
  const slideMovement = currentSlide.value * effectiveSpacing

  return centerPosition - slideMovement
})

const isActiveSlide = (repeatIndex: number, index: number) => {
  const slideIndex = (repeatIndex - 1) * totalSlides + index
  return slideIndex === currentSlide.value
}

const getCardOpacity = (repeatIndex: number, index: number) => {
  const slideIndex = (repeatIndex - 1) * totalSlides + index
  const distance = Math.abs(slideIndex - currentSlide.value)
  
  // Show only 5 cards: active + 2 on each side
  if (distance === 0) {
    return 1 // Active card
  } else if (distance === 1) {
    return 1 // Adjacent cards - fully visible
  } else if (distance === 2) {
    return 0.9 // Second level cards
  } else {
    return 0 // Hide all other cards
  }
}

const getCardTransform = (repeatIndex: number, index: number) => {
  const slideIndex = (repeatIndex - 1) * totalSlides + index
  const distance = Math.abs(slideIndex - currentSlide.value)
  
  let scale = 'scale(1)'
  if (distance === 0) {
    scale = 'scale(1)' // Active card
  } else if (distance === 1) {
    scale = 'scale(0.88)' // Adjacent cards
  } else if (distance === 2) {
    scale = 'scale(0.76)' // Second level cards
  } else {
    scale = 'scale(0.64)' // Far cards
  }
  
  // Add translateX to close gaps for smaller cards
  let translateXOffset = 0
  if (distance === 2) {
    translateXOffset = slideIndex < currentSlide.value ? 48 : -48 // Move 48px toward center
  } else if (distance >= 3) {
    translateXOffset = slideIndex < currentSlide.value ? 64 : -64 // Move 64px toward center
  }
  
  return `${scale} translateX(${translateXOffset}px)`
}

const animateSlideChange = (direction: 'next' | 'prev') => {
  if (!textOverlay.value || !carouselRef.value) return

  const carousel = carouselRef.value.querySelector('.flex') as HTMLElement
  const willReset = direction === 'next' 
    ? currentSlide.value + 1 >= totalSlides * 4
    : currentSlide.value - 1 < totalSlides

  const timeline = gsap.timeline()

  // Fade out text
  timeline.to(textOverlay.value, {
    y: -50,
    opacity: 0,
    duration: 0.25,
    ease: 'power2.inOut'
  }, 0)

  // Update slide at midpoint when text is invisible
  timeline.call(() => {
    currentSlide.value = direction === 'next' ? currentSlide.value + 1 : currentSlide.value - 1
  }, undefined, 0.25)

  // For reset: after animation, instantly jump back to middle position
  if (willReset) {
    timeline.call(() => {
      if (carousel) {
        carousel.style.transition = 'none'
        currentSlide.value = direction === 'next' ? totalSlides * 2 : totalSlides * 3 - 1
        void carousel?.offsetHeight
        requestAnimationFrame(() => {
          if (carousel) carousel.style.transition = ''
        })
      }
    }, undefined, 0.5)
  }

  // Fade in text
  timeline.set(textOverlay.value, { y: 50 }, 0.25)
  timeline.to(textOverlay.value, {
    y: 0,
    opacity: 1,
    duration: 0.25,
    ease: 'power2.inOut'
  }, 0.25)
}

const nextSlide = () => {
  animateSlideChange('next')
}

const prevSlide = () => {
  animateSlideChange('prev')
}

// Touch/Swipe functionality
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swiped left - next slide
      nextSlide()
    } else {
      // Swiped right - prev slide
      prevSlide()
    }
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

const typeWriter = () => {
  const currentText = texts[textIndex]
  
  if (!isDeleting && charIndex <= currentText.length) {
    displayText.value = currentText.substring(0, charIndex)
    charIndex++
    typewriterTimeout = window.setTimeout(typeWriter, 100)
  } else if (!isDeleting && charIndex > currentText.length) {
    typewriterTimeout = window.setTimeout(() => {
      isDeleting = true
      typeWriter()
    }, 2000)
  } else if (isDeleting && charIndex > 0) {
    displayText.value = currentText.substring(0, charIndex - 1)
    charIndex--
    typewriterTimeout = window.setTimeout(typeWriter, 50)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    typewriterTimeout = window.setTimeout(typeWriter, 500)
  }
}

const stopTypewriter = () => {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout)
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
  typeWriter()

  if (textOverlay.value) {
    gsap.set(textOverlay.value, { y: 0, opacity: 1 })
  }

  // Add touch event listeners for swipe
  if (carouselRef.value) {
    carouselRef.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    carouselRef.value.addEventListener('touchend', handleTouchEnd, { passive: true })
  }

  const scrollContainer = document.querySelector('.overflow-y-scroll')
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })

    if (skillsSection.value) {
      ScrollTrigger.create({
        trigger: skillsSection.value,
        scroller: scrollContainer,
        start: 'top 60%',
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
  stopTypewriter()

  // Remove touch event listeners
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('touchstart', handleTouchStart)
    carouselRef.value.removeEventListener('touchend', handleTouchEnd)
  }

  const scrollContainer = document.querySelector('.overflow-y-scroll')
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', handleScroll)
  }
})
</script>
