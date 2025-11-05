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
    <div class="bg-alphaLightBlack justify-center items-center flex p-6">
        <p class="uppercase font-bold text-2xl">Jara verbrugghe</p>
    </div>
    <div class="-mt-12">
        <SubTitles mainText="My Projects" backgroundText="Projects" />

    </div>
    <div class="flex justify-center items-center mb-6">
        <div class="h-88 w-70 bg-alphaWhite rounded-md">

        </div>
    </div>
    <div class="mx-6 ">
        <h2 class="font-bold text-3xl">The Easy Cat Set</h2>
        <div class="border-2 p-2 border-alphaOrange text-sm rounded-md mt-2 w-min">
            <p class="uppercase text-alphaOrange">Development</p>
        </div>
        <h3 class="uppercase font-bold text-2xl mt-6">Briefing</h3>
        <p class="mt-2">The project involved <span class="font-bold">building an autonomously operating device</span>
            with a <span class="font-bold">Raspberry Pi</span> that processes data from at <span class="font-bold">least
                three sensors</span> (one of which was not covered in class) and includes <span class="font-bold">an
                actuator</span> that can be controlled both <span class="font-bold">automatically</span> and via a <span
                class="font-bold">website</span>. The system had to display information such as the <span
                class="font-bold">IP address</span>, store data in a <span class="font-bold">MySQL/MariaDB
                database</span>, and communicate through a <span class="font-bold">Flask backend</span> and an <span
                class="font-bold">HTML/CSS/JS frontend</span> using <span class="font-bold">Socket.IO</span> for
            real-time updates. <span>A physical button</span> was also required for a <span class="font-bold">safe
                shutdown</span>, and the system needed to comply with <span class="font-bold">user management</span> and
            <span class="font-bold">password regulations.</span></p>

        <h3 class="uppercase font-bold text-2xl mt-6">Project links</h3>
        <div class="gap-4 flex mt-2 mb-30">
            <button class="bg-alphaOrange text-alphaWhite rounded-md px-4 py-2 mt-2">View Project</button>
            <button class="bg-alphaOrange text-alphaWhite rounded-md px-4 py-2 mt-2">View Project</button>
        </div>
    </div>
</template>

<script setup lang="ts">// @ts-ignore 
import SubTitles from '../components/SubTitles.vue'
</script>
