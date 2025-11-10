<template>
    <MenuButton title="Go Back" />
    <HeaderBar />
    <div class="-mt-8 md:-mt-12">
        <SubTitles mainText="My Projects" backgroundText="Projects" />
    </div>
    <button
      @click="goBack"
      class="flex items-center gap-2 mx-6 xl:mx-32 px-4 py-2 bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded cursor-pointer transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
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
                    <iframe
                        v-if="project.video"
                        :src="getYoutubeEmbedUrl(project.video)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        class="rounded-md shadow-md max-h-80 max-w-full w-full aspect-video bg-black"
                    ></iframe>
                </div>

            </div>
        </div>
    </div>
    <div v-else class="text-center py-20">Project niet gevonden.</div>
</template>

<script setup lang="ts">
// Helper to convert YouTube URL to embed URL
function getYoutubeEmbedUrl(url: string): string {
    // Supports typical YouTube links: https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regExp);
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    }
    // fallback: return original url
    return url;
}
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
    router.back();
}
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
import SubTitles from '../components/SubTitles.vue'// @ts-ignore
import HeaderBar from '../components/HeaderBar.vue'// @ts-ignore
import MenuButton from '../components/MenuButton.vue'

const route = useRoute()
const id = computed(() => Number(route.params.id))
const project = computed(() => projects.find(p => p.id === id.value))
</script>
