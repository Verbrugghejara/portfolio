<template>
    <button
        class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 border-2 border-alphaWhite bg-alphaLightBlack rounded-md px-4 py-2 flex items-center gap-3">
        <div class="flex flex-col gap-1">
            <span class="w-5 h-0.5 bg-alphaWhite"></span>
            <span class="w-5 h-0.5 bg-alphaWhite"></span>
            <span class="w-5 h-0.5 bg-alphaWhite"></span>
        </div>
        <span class="text-lg">Menu</span>
    </button>

    <!-- Header Section -->
    <div class="snap-start flex flex-col min-h-screen relative">
        <div class="bg-alphaLightBlack justify-center items-center flex p-6">
            <p class="uppercase font-bold text-2xl">Jara verbrugghe</p>
        </div>
        <div class="-mt-12">
            <SubTitles mainText="My Projects" backgroundText="Projects" />
        </div>
        <div class="uppercase mx-6 flex flex-col gap-1 text-alphaLightBlack font-bold mt-8">
            <p class="flex items-center gap-1">All <span class="text-xs">(25)</span></p>
            <div class="flex gap-4">
                <p>MCT</p>
                <p>Devine</p>
            </div>
            <div class="flex gap-4">
                <p>Development</p>
                <p>UX</p>
                <p>Design</p>
                <p>Motion</p>
            </div>
        </div>
        <div class="uppercase flex flex-col items-center absolute top-2/3 left-1/2 -translate-x-1/2">
            <p>scroll down</p>
            <svg class="w-4 h-6" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L8 22M8 22L1 15M8 22L15 15" stroke="currentColor" stroke-width="2" />
            </svg>
        </div>
    </div>
    <div>
        <div v-for="(project, index) in projects" :key="project.id" :ref="el => { if (el) projectRefs[index] = el }"
            class="snap-start min-h-screen flex justify-center items-center p-6 relative">
            <div :ref="el => { if (el) textRefs[index] = el }"
                class="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl z-10">
                <h3 class="text-6xl mb-4 font-secondary w-max">{{ project.title }}</h3>
                <p class="text-xl text-alphaOrange mb-2">{{ project.category }}</p>
            </div>
            <div class="w-full max-w-md">
                <ProjectCard :number="project.id" :title="project.title" :category="project.category"
                    :description="project.description" :isActive="true" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
// @ts-ignore 
import SubTitles from '../components/SubTitles.vue'
// @ts-ignore 
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

const projectRefs = ref<any[]>([])
const textRefs = ref<any[]>([])
const currentVisibleIndex = ref(-1)

const animateText = (index: number, direction: 'in' | 'out') => {
    const textEl = textRefs.value[index]
    if (!textEl) return

    console.log(`Animating text ${index} - direction: ${direction}`)

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

const checkVisibility = () => {
    let newVisibleIndex = -1
    let minDistance = Infinity

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

    console.log(`Current: ${currentVisibleIndex.value}, New: ${newVisibleIndex}`)

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

onMounted(() => {
    // Set initial positions for all texts
    textRefs.value.forEach(el => {
        if (el) {
            gsap.set(el, { y: 50, opacity: 0 })
        }
    })

    window.addEventListener('scroll', checkVisibility, true)
    // Don't check visibility on mount - wait for user to scroll
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility, true)
})
</script>