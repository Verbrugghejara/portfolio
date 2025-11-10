<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
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
import ProjectCard from '../components/ProjectCard.vue'

gsap.registerPlugin(ScrollToPlugin)

const router = useRouter()
const goBack = () => {
    router.back();
}

const goToDetail = (id: number) => {
    router.push(`/project/${id}`)
}
const projectRefs = ref<any[]>([])
const textRefs = ref<any[]>([])
const desktopOverlayRefs = ref<any[]>([])
// GSAP animatie voor desktop overlay
const handleOverlayEnter = (_event: MouseEvent, index: number) => {
    if (window.innerWidth < 768) return;
    const el = desktopOverlayRefs.value[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.fromTo(el,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
    );
};

const handleOverlayLeave = (_event: MouseEvent, index: number) => {
    if (window.innerWidth < 768) return;
    const el = desktopOverlayRefs.value[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el,
        { y: -32, opacity: 0, duration: 0.3, ease: 'power3.in' }
    );
};
const currentVisibleIndex = ref(-1)
const showScrollTop = ref(false)
let isScrolling = false
let lastScrollTime = 0
let currentProjectIndex = -1  // Start at -1 (header/top)
let touchStartY = 0
let touchEndY = 0

const animateText = (index: number, direction: 'in' | 'out') => {
    const textEl = textRefs.value[index]
    if (!textEl) return

    // Kill any existing animations on this element
    gsap.killTweensOf(textEl)

    if (direction === 'in') {
        // Animate from bottom to center
        gsap.fromTo(textEl,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        )
    } else {
        // Animate from center back to bottom
        gsap.to(textEl,
            { y: 50, opacity: 0, duration: 0.4, ease: 'power3.in' }
        )
    }
}

const scrollToProject = (index: number) => {
    if (index < 0 || index >= projectRefs.value.length) return
    if (isScrolling) return

    const targetElement = projectRefs.value[index]
    const scrollContainer = document.querySelector('.overflow-y-scroll')

    if (!targetElement || !scrollContainer) return

    isScrolling = true
    currentProjectIndex = index

    gsap.to(scrollContainer, {
        duration: 0.8,
        scrollTo: { y: targetElement, offsetY: 0 },
        ease: 'power2.out',
        onComplete: () => {
            isScrolling = false
        }
    })
}

const scrollToTop = () => {
    const scrollContainer = document.querySelector('.overflow-y-scroll')
    if (!scrollContainer) return

    currentProjectIndex = -1
    isScrolling = true

    gsap.to(scrollContainer, {
        duration: 1,
        scrollTo: { y: 0 },
        ease: 'power2.out',
        onComplete: () => {
            isScrolling = false
        }
    })
}

const handleWheel = (event: WheelEvent) => {
    // Only apply snap scrolling on mobile (< 768px)
    if (window.innerWidth >= 768) {
        return
    }

    if (isScrolling) {
        event.preventDefault()
        return
    }

    const now = Date.now()
    if (now - lastScrollTime < 600) {
        event.preventDefault()
        return
    }

    lastScrollTime = now

    // Determine scroll direction
    if (event.deltaY > 0) {
        // Scroll down - go to next project
        const nextIndex = currentProjectIndex + 1
        if (nextIndex < projectRefs.value.length) {
            event.preventDefault()
            scrollToProject(nextIndex)
        }
    } else if (event.deltaY < 0) {
        // Scroll up - go to previous project or header
        if (currentProjectIndex > 0) {
            event.preventDefault()
            scrollToProject(currentProjectIndex - 1)
        } else if (currentProjectIndex === 0) {
            // Allow scrolling back to header
            const scrollContainer = document.querySelector('.overflow-y-scroll')
            if (scrollContainer && scrollContainer.scrollTop > 100) {
                event.preventDefault()
                currentProjectIndex = -1
                isScrolling = true
                gsap.to(scrollContainer, {
                    duration: 0.8,
                    scrollTo: { y: 0 },
                    ease: 'power2.out',
                    onComplete: () => {
                        isScrolling = false
                    }
                })
            }
        }
    }
}

const handleTouchStart = (event: TouchEvent) => {
    // Only apply snap scrolling on mobile (< 768px)
    if (window.innerWidth >= 768) {
        return
    }

    touchStartY = event.touches[0].clientY
    touchEndY = touchStartY
}

const handleTouchMove = (event: TouchEvent) => {
    // Only apply snap scrolling on mobile (< 768px)
    if (window.innerWidth >= 768) {
        return
    }

    touchEndY = event.touches[0].clientY

    // Prevent native scroll during active touch
    const swipeDistance = Math.abs(touchStartY - touchEndY)
    if (swipeDistance > 10) {
        event.preventDefault()
    }
}

const handleTouchEnd = () => {
    // Only apply snap scrolling on mobile (< 768px)
    if (window.innerWidth >= 768) {
        return
    }

    if (isScrolling) {
        return
    }

    const swipeDistance = touchStartY - touchEndY
    const swipeThreshold = 50
    const now = Date.now()

    // Check if enough time has passed since last scroll
    if (now - lastScrollTime < 900) {
        return
    }

    // Process the swipe
    if (Math.abs(swipeDistance) > swipeThreshold) {
        lastScrollTime = now

        if (swipeDistance > 0) {
            // Swiped up - go to next project
            const nextIndex = currentProjectIndex + 1
            if (nextIndex < projectRefs.value.length) {
                scrollToProject(nextIndex)
            }
        } else {
            // Swiped down - go to previous project or header
            if (currentProjectIndex > 0) {
                scrollToProject(currentProjectIndex - 1)
            } else if (currentProjectIndex === 0) {
                // Scroll back to header
                const scrollContainer = document.querySelector('.overflow-y-scroll')
                if (scrollContainer) {
                    currentProjectIndex = -1
                    isScrolling = true
                    gsap.to(scrollContainer, {
                        duration: 0.8,
                        scrollTo: { y: 0 },
                        ease: 'power2.out',
                        onComplete: () => {
                            isScrolling = false
                        }
                    })
                }
            }
        }
    }
}

const checkVisibility = () => {
    const scrollContainer = document.querySelector('.overflow-y-scroll')

    // Update scroll-to-top button visibility
    if (scrollContainer) {
        showScrollTop.value = scrollContainer.scrollTop > 200
    }

    // Only apply text animations on mobile (< 768px)
    if (window.innerWidth >= 768) {
        return
    }

    let newVisibleIndex = -1
    let minDistance = Infinity

    // Check if we're at the top (header visible)
    if (scrollContainer && scrollContainer.scrollTop < 200) {
        currentProjectIndex = -1

        if (currentVisibleIndex.value !== -1) {
            animateText(currentVisibleIndex.value, 'out')
            currentVisibleIndex.value = -1
        }
        return
    }

    projectRefs.value.forEach((el, index) => {
        if (el && el.getBoundingClientRect) {
            const rect = el.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Calculate distance from center of viewport
            const elementCenter = rect.top + rect.height / 2
            const viewportCenter = windowHeight / 2
            const distance = Math.abs(elementCenter - viewportCenter)

            // Find the project closest to center - must be mostly visible
            if (distance < minDistance && rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
                minDistance = distance
                newVisibleIndex = index
            }
        }
    })

    // Update current project index to match visible project
    if (newVisibleIndex !== -1 && newVisibleIndex !== currentProjectIndex) {
        currentProjectIndex = newVisibleIndex
    }

    // Check if we're back at the header (no project visible)
    if (newVisibleIndex === -1 && currentVisibleIndex.value !== -1) {
        // Fade out current text when scrolling back to header
        animateText(currentVisibleIndex.value, 'out')
        currentVisibleIndex.value = -1
    }
    // If we found a new visible project different from current
    else if (newVisibleIndex !== -1 && newVisibleIndex !== currentVisibleIndex.value) {
        // Fade out previous text
        if (currentVisibleIndex.value !== -1) {
            animateText(currentVisibleIndex.value, 'out')
        }

        // Fade in new text immediately
        animateText(newVisibleIndex, 'in')
        currentVisibleIndex.value = newVisibleIndex
    }
}

const filter = ref('all')
const filterOptions = ['all', 'mct', 'devine', 'development', 'ux', 'design']
const filteredProjects = computed(() => {
    if (filter.value === 'all') return projects
    if (filter.value === 'mct') return projects.filter(p => (p.program || '').toLowerCase() === 'mct')
    if (filter.value === 'devine') return projects.filter(p => (p.program || '').toLowerCase() === 'devine')
    if (filter.value === 'development') return projects.filter(p => (p.modules || []).map(m => m.toLowerCase()).includes('development'))
    if (filter.value === 'ux') return projects.filter(p => (p.modules || []).map(m => m.toLowerCase()).includes('ux'))
    if (filter.value === 'design') return projects.filter(p => (p.modules || []).map(m => m.toLowerCase()).includes('design'))
    return projects
})

onMounted(() => {
    // Set initial positions for all texts
    textRefs.value.forEach(el => {
        if (el) {
            gsap.set(el, { y: 50, opacity: 0 })
        }
    })

    // Add wheel event listener for snap scrolling
    window.addEventListener('wheel', handleWheel, { passive: false })

    // Add touch event listeners for mobile
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })

    // Add scroll listener for text animations
    window.addEventListener('scroll', checkVisibility, true)
})

onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('scroll', checkVisibility, true)
})
</script>
<template>
    <MenuButton title="Go Back" />
    <HeaderBar />
    <!-- Scroll to Top Button -->
    <button v-if="showScrollTop" @click="scrollToTop"
        class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-12 h-12 bg-alphaOrange hover:bg-alphaOrangeHover rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
        <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </button>

    <div class="snap-start flex flex-col min-h-screen md:min-h-fit relative">

        <div class="-mt-12">
            <SubTitles mainText="My Projects" backgroundText="Projects" />
        </div>
        <div class="relative uppercase text-alphaWhite font-bold mt-8 md:w-full">
  <!-- Terugknop links -->
  <div class="hidden md:flex items-center absolute left-8 xl:left-32 top-0">
    <button
      @click="goBack"
      class="flex items-center gap-2 px-4 py-2 bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded cursor-pointer transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  </div>

  <!-- Filters echt in het midden van het scherm -->
  <div class="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2 top-0">
    <div class="flex gap-6">
      <button
        v-for="opt in filterOptions"
        :key="opt"
        @click="filter = opt"
        :class="[
          'px-3 py-1 h-8 rounded transition uppercase cursor-pointer',
          filter === opt
            ? 'bg-alphaOrange text-alphaWhite'
            : 'hover:text-alphaOrange'
        ]"
      >
        {{ opt }}
      </button>
    </div>
  </div>

  <!-- Mobiel -->
  <div class="flex flex-col gap-2 md:hidden mt-4 mx-6">
    <button
      @click="goBack"
      class="w-fit self-center flex items-center gap-2 px-4 py-2 bg-alphaOrange hover:bg-alphaOrangeHover text-white rounded transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Terug
    </button>

    <div class="flex flex-wrap justify-center gap-3 mt-2">
      <button
        v-for="opt in filterOptions"
        :key="opt"
        @click="filter = opt"
        :class="[
          'px-3 py-1 h-8 rounded transition uppercase cursor-pointer',
          filter === opt
            ? 'bg-alphaOrange text-alphaWhite'
            : 'hover:text-alphaOrange'
        ]"
      >
        {{ opt }}
      </button>
    </div>
  </div>
</div>

        <div class="absolute md:hidden top-2/3 left-1/2 -translate-x-1/2">
            <div class="flex flex-col items-center gap-2">
                <p class="text-sm tracking-widest uppercase">Scroll Down</p>
                <svg class="w-4 h-6" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L8 22M8 22L1 15M8 22L15 15" stroke="currentColor" stroke-width="2" />
                </svg>
            </div>
        </div>
    </div>

    <!-- Mobile: Scroll Snap Layout -->
    <div class="md:hidden">
        <div v-for="(project, index) in filteredProjects" :key="project.id"
            :ref="el => { if (el) projectRefs[index] = el }"
            class="snap-start min-h-screen flex justify-center items-center relative" @click="goToDetail(project.id)"
            style="cursor: pointer;">

            <!-- Always-on overlay above image, below text -->
            <div class="w-full flex justify-center px-4 z-10 relative">
                <ProjectCard :number="project.id" :title="project.title" :program="project.program"
                    :briefing="project.briefing" :image-url="project.imageUrl" :label="true" :isActive="true" />
            </div>
            <div :ref="el => { if (el) textRefs[index] = el }"
                class="text-center max-w-4xl z-30 absolute top-1/2 -translate-y-1/2 px-4 w-full">
                <h3 class="text-6xl mb-4 font-secondary">{{ project.title }}</h3>
                <div class="flex flex-wrap justify-center gap-2 mb-2">
                    <span v-for="(mod, idx) in project.modules" :key="idx"
                        class="text-base text-alphaOrange bg-alphaLightBlack px-2 py-0.5 rounded">
                        {{ mod }}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Desktop: Grid Layout (2 columns) -->
    <div class="hidden md:grid md:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-12 px-8 py-16 lg:px-16 justify-items-center">
        <div v-for="(project, index) in filteredProjects" :key="project.id"
            class="flex justify-center items-center py-8">
            <div class="relative w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[480px] h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] cursor-pointer group"
                @mouseenter="handleOverlayEnter($event, index)" @mouseleave="handleOverlayLeave($event, index)"
                @click="goToDetail(project.id)">
                <div class="relative w-full h-full overflow-hidden rounded-2xl">
                    <ProjectCard :number="project.id" :title="project.title" :program="project.program"
                        :briefing="project.briefing" :image-url="project.imageUrl" :isActive="true"
                        :showOverlayOnHover="true" class="w-full h-full" />
                    <div class="text-center z-30 absolute top-6 lg:top-1/3 left-1/2 -translate-x-1/2 px-4 w-full pointer-events-none md:pointer-events-auto"
                        :ref="el => { if (el) desktopOverlayRefs[index] = el }"
                        style="opacity:0;transform:translateY(32px);">
                        <h3 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl mb-2 font-secondary">{{ project.title
                            }}</h3>
                        <div class="flex flex-wrap justify-center flex-col gap-2 mt-2">
                            <span v-for="(mod, idx) in project.modules" :key="idx"
                                class="text-base uppercase lg:text-lg 2xl:text-2xl text-alphaOrange px-2 py-0.5 rounded">
                                {{ mod }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
