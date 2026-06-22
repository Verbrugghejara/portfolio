<template>
    <MenuButton title="Go Back" />
    <HeaderBar />

    <div class="-mt-8 md:-mt-12">
        <SubTitles mainText="My Projects" backgroundText="Projects" />
    </div>

    <!-- Back button -->
    <div class="max-w-7xl mx-auto px-6 md:px-10 mt-6">
        <button
            @click="goBack"
            class="flex items-center gap-2 px-4 py-2 bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-lg transition cursor-pointer">

            <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24">

                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7" />
            </svg>

            Back
        </button>
    </div>

    <div
        v-if="project"
        class="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <!-- Hero -->
        <div
            class="grid lg:grid-cols-[320px_1fr] gap-12 items-start">

            <!-- Image -->
            <div class="flex justify-center lg:justify-start">

                <div
                    class="w-full max-w-[420px] aspect-4/5 bg-alphaWhite rounded-xl shadow-lg overflow-hidden flex items-center justify-center">

                    <img
                        v-if="project.imageUrl"
                        :src="project.imageUrl"
                        alt="Project afbeelding"
                        class="w-full h-full object-contain" />
                </div>

            </div>

            <!-- Content -->
            <div>

                <h2
                    class="text-3xl md:text-4xl font-bold">
                    {{ project.title }}
                </h2>

                <!-- Tags -->
                <div
                    class="flex flex-wrap gap-2 mt-4">

                    <div
                        v-for="(tag, idx) in project.tags"
                        :key="idx"
                        class="border border-alphaOrange rounded-md px-3 py-2">

                        <p
                            class="uppercase text-alphaOrange text-xs md:text-sm">
                            {{ tag }}
                        </p>
                    </div>

                </div>

                <!-- Info Cards -->
                <div
                    class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">

                    <div
                        class="bg-alphaLightBlack rounded-xl p-4">

                        <div class="flex items-center gap-2">
                            <FolderIcon class="w-5 h-5 text-alphaOrange" />
                            <h4 class="font-semibold">
                                Type
                            </h4>
                        </div>

                        <p class="mt-2 ">
                            {{ project.projectType }}
                        </p>
                    </div>

                    <div
                        v-if="project.teamSize"
                        class="bg-alphaLightBlack rounded-xl p-4">

                        <div class="flex items-center gap-2">
                            <GroupIcon class="w-5 h-5 text-alphaOrange" />
                            <h4 class="font-semibold">
                                Team size
                            </h4>
                        </div>

                        <p class="mt-2 ">
                            {{ project.teamSize }} people
                        </p>
                    </div>

                    <div
                        v-if="project.roles?.length"
                        class="bg-alphaLightBlack rounded-xl p-4">

                        <div class="flex items-center gap-2">
                            <UserIcon class="w-5 h-5 text-alphaOrange" />
                            <h4 class="font-semibold">
                                My role
                            </h4>
                        </div>

                        <p class="mt-2 ">
                            {{ project.roles?.[0] || '' }}
                        </p>
                    </div>

                    <div
                        class="bg-alphaLightBlack rounded-xl p-4">

                        <div class="flex items-center gap-2">
                            <GraduateIcon class="w-5 h-5 text-alphaOrange" />
                            <h4 class="font-semibold">
                                Opleiding
                            </h4>
                        </div>

                        <p class="mt-2 ">
                            {{ project.opleiding }}
                        </p>
                    </div>

                </div>

                <!-- Tech stack -->
                <div class="mt-8">
                    <h3 class="uppercase font-bold text-xl mb-4">Tech stack</h3>
                    <div class="flex flex-wrap gap-8 ">
                        <span
                            v-for="(tech, idx) in project.techs"
                            :key="idx"
                            class="text-sm uppercase bg-alphaLightBlack text-alphaWhite rounded-md px-3 py-2">
                            {{ tech }}
                        </span>
                    </div>
                </div>

                <!-- Briefing -->
                <div class="mt-8">

                    <h3
                        class="uppercase font-bold text-xl mb-4">
                        Briefing
                    </h3>

                    <div
                        class="">

                        <div
                            :class="[
                                'leading-relaxed',
                                !briefingExpanded ? 'line-clamp-4' : ''
                            ]"
                            v-html="project.briefing">
                        </div>

                        <button
                            @click="briefingExpanded = !briefingExpanded"
                            class="mt-4 text-alphaOrange hover:text-alphaOrangeHover font-semibold flex items-center gap-2 transition cursor-pointer">

                            {{ briefingExpanded ? 'Read less' : 'Read more' }}

                            <svg
                                class="w-4 h-4 transition-transform duration-300"
                                :class="{ 'rotate-180': briefingExpanded }"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>

                        </button>

                    </div>

                </div>

                <!-- Links -->
                <div class="mt-8">

                    <h3
                        class="uppercase font-bold text-xl mb-4">
                        Project links
                    </h3>

                    <div class="flex flex-wrap gap-3">

                        <a
                            v-if="project.githubUrl"
                            :href="project.githubUrl"
                            target="_blank"
                            class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-lg px-5 py-2.5 font-semibold transition">

                            GitHub
                        </a>

                        <a
                            v-if="project.otherUrl"
                            :href="project.otherUrl"
                            target="_blank"
                            class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-lg px-5 py-2.5 font-semibold transition">

                            Instructables
                        </a>

                        <a
                            v-if="project.liveDemoUrl"
                            :href="project.liveDemoUrl"
                            target="_blank"
                            class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-lg px-5 py-2.5 font-semibold transition">

                            Live Demo
                        </a>

                    </div>

                </div>

            </div>

        </div>

        <!-- Video -->
        <section
            v-if="project.video"
            class="mt-16">

            <h3
                class="uppercase font-bold text-2xl mb-4">
                Demo
            </h3>

            <div
                class="overflow-hidden rounded-xl shadow-lg">

                <iframe
                    :src="getYoutubeEmbedUrl(project.video)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="w-full aspect-video bg-alphaBlack">
                </iframe>

            </div>

        </section>

    </div>

    <div
        v-else
        class="text-center py-20">

        Project niet gevonden.
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'

import FolderIcon from '../assets/icons/folder-regular-full.svg?component'
import GroupIcon from '../assets/icons/group.svg?component'
import UserIcon from '../assets/icons/user-regular-full.svg?component'
import GraduateIcon from '../assets/icons/graduate.svg?component'

import SubTitles from '../components/SubTitles.vue'
import HeaderBar from '../components/HeaderBar.vue'
import MenuButton from '../components/MenuButton.vue'

function getYoutubeEmbedUrl(url: string): string {
    const regExp =
        /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/

    const match = url.match(regExp)

    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`
    }

    return url
}

const router = useRouter()

const goBack = () => {
    router.back()
}

const route = useRoute()

const id = computed(() =>
    Number(route.params.id)
)

const project = computed(() =>
    projects.find(
        p => p.id === id.value
    )
)

const briefingExpanded = ref(false)
</script>