<template>
    <MenuButton title="Go Back" />
    <HeaderBar />
    <div class="-mt-8 md:-mt-12">
        <SubTitles mainText="My Projects" backgroundText="Projects" />
    </div>
    <div v-if="project"
        class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 md:px-16 md:py-10 lg:items-start lg:justify-center mb-15">
        <!-- Afbeelding/video links -->
        <div class="flex justify-center items-center mb-4 w-full xl:ml-[15%] 2xl:ml-[30%]">

            <div
                class="h-70 w-54 md:h-[250px] md:w-[200px] lg:w-80 lg:h-[420px] xl:w-[435px] xl:h-[540px] bg-alphaWhite rounded-md shadow-md flex items-center justify-center overflow-hidden">
                <img v-if="project.imageUrl" :src="project.imageUrl" alt="Project afbeelding"
                    class="object-contain max-h-full max-w-full" />
            </div>
        </div>
        <!-- Tekst rechts -->
        <div class="mx-4 sm:mx-8 flex flex-col justify-center lg:col-span-2 max-w-[630px] lg:mx-auto">
            <h2 class="font-bold text-3xl">{{ project.title }}</h2>
            <div class="flex gap-2 mt-2">
                <div v-for="(mod, idx) in project.modules" :key="idx"
                    class="border-2 p-2 border-alphaOrange text-xs md:text-sm rounded-md w-min inline-block">
                    <p class="uppercase text-alphaOrange">{{ mod }}</p>
                </div>
            </div>
            <h3 class="uppercase font-bold text-xl md:text-2xl mt-6">Briefing</h3>
            <p class="mt-2" v-html="project.briefing"></p>
            <h3 class="uppercase font-bold text-xl md:text-2xl mt-6">Project links</h3>
            <div class="flex flex-row gap-2 mt-2 mb-10">
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                    class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-md px-4 py-2 mt-2 font-bold">GitHub</a>
                <a v-if="project.otherUrl" :href="project.otherUrl" target="_blank"
                    class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-md px-4 py-2 mt-2 font-bold">Instructables</a>
                <a v-if="project.liveDemoUrl" :href="project.liveDemoUrl" target="_blank"
                    class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-md px-4 py-2 mt-2 font-bold">Live
                    Demo</a>
            </div>
            <div  v-if="project.video">
                <h3 class="uppercase font-bold text-xl md:text-2xl">Demo</h3>
    
                <div class="w-full mt-2">
                    <video :src="project.video" controls class="rounded-md shadow-md max-h-80 max-w-full bg-black">
                        Je browser ondersteunt geen video.
                    </video>
                </div>

            </div>
        </div>
    </div>
    <div v-else class="text-center py-20">Project niet gevonden.</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
    const scrollContainer = document.querySelector('.overflow-y-scroll')
    if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'auto' })
    } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }
})
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '../data/projects' // @ts-ignore
import SubTitles from '../components/SubTitles.vue'
import HeaderBar from '../components/HeaderBar.vue'// @ts-ignore
import MenuButton from '../components/MenuButton.vue'

const route = useRoute()
const id = computed(() => Number(route.params.id))
const project = computed(() => projects.find(p => p.id === id.value))
</script>
