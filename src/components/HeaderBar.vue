<template>
  <header>
    <!-- Mobile Header -->
    <router-link to="/" class="bg-alphaLightBlack flex justify-center items-center p-6 z-50 lg:hidden">
      <p class="uppercase font-bold text-2xl">Jara Verbrugghe</p>
    </router-link>

    <!-- Desktop Navigation -->
  <nav class="mx-6 md:mx-12 xl:mx-32 py-4 text-2xl uppercase hidden lg:flex justify-between items-center relative z-50">
      <router-link to="/" class="font-bold focus:outline-none">
        Jara Verbrugghe
      </router-link>

      <!-- <ul class="flex gap-20">
        <li>
          <a href="#aboutMe" class="relative group" @click.prevent="scrollToSection('aboutMe')">
            <span class="relative z-10">About Me</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-alphaOrange transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#skills" class="relative group" @click.prevent="scrollToSection('skills')">
            <span class="relative z-10">Skills</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-alphaOrange transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#projects" class="relative group" @click.prevent="scrollToSection('projects')">
            <span class="relative z-10">Projects</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-alphaOrange transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </li>
      </ul> -->
    </nav>
  </header>
</template>

<script setup lang="ts">
gsap.registerPlugin(ScrollToPlugin);
</script>
