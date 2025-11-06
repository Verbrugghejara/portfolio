<template>
  <MenuButton title="Go Back"/>
    <HeaderBar/>
    <div class="-mt-8 md:-mt-12">
        <SubTitles mainText="My Projects" backgroundText="Projects" />
    </div>
    <div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 md:px-16 md:py-10 lg:items-start lg:justify-center mb-4 md:mb-0">
        <!-- Afbeelding links -->
            <div class="flex justify-center items-center mb-4 w-full xl:ml-[15%] 2xl:ml-[30%]">
                <div class="h-70 w-54 md:h-[250px] md:w-[200px] lg:w-80 lg:h-[420px] xl:w-[435px] xl:h-[540px] bg-alphaWhite rounded-md shadow-md"></div>
            </div>
        <!-- Tekst rechts -->
    <div class="mx-4 sm:mx-8 flex flex-col justify-center lg:col-span-2 max-w-[630px] lg:mx-auto">
            <h2 class="font-bold text-3xl">The Easy Cat Set</h2>
            <div class="border-2 p-2 border-alphaOrange text-xs md:text-sm rounded-md mt-2 w-min inline-block">
                <p class="uppercase text-alphaOrange">Development</p>
            </div>
            <h3 class="uppercase font-bold text-xl md:text-2xl mt-6">Briefing</h3>
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

            <h3 class="uppercase font-bold text-xl md:text-2xl mt-6">Project links</h3>
            <div class="flex flex-row gap-2 mt-2 mb-10">
                <a href="#" class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-md px-4 py-2 mt-2 font-bold">GitHub</a>
                <a href="#" class="bg-alphaOrange hover:bg-alphaOrangeHover text-alphaWhite rounded-md px-4 py-2 mt-2 font-bold">Instructables</a>
            </div>
        </div>
    </div>
    <!-- Verwijderd: overbodige extra div -->
</template>

<script setup lang="ts">// @ts-ignore 
import SubTitles from '../components/SubTitles.vue'
import HeaderBar from '../components/HeaderBar.vue'
import MenuButton from '../components/MenuButton.vue'
</script>
