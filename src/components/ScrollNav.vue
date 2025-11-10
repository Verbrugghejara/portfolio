<template>
  <nav class="fixed top-1/2 right-10 -translate-y-1/2 z-50 flex-col gap-6 mr-8 hidden lg:flex">
    <ul class="flex flex-col gap-6">
      <li v-for="section in sections" :key="section.id">
        <button
          @click="scrollToSection(section.id)"
          :class="[
            'bg-transparent border-none text-alphaLightBlack text-base cursor-pointer transition-colors transition-transform duration-200 font-semibold',
            activeSection === section.id
              ? 'text-alphaWhite font-bold scale-110'
              : 'hover:text-orange-500'
          ]"
        >
          {{ section.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
gsap.registerPlugin(ScrollToPlugin);
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];
const activeSection = ref('home');
let scrollContainer = null;

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el && scrollContainer) {
    gsap.to(scrollContainer, {
      duration: 1,
      scrollTo: { y: el, offsetY: 0 },
      ease: 'power2.inOut',
    });
  }
}

function onScroll() {
  let found = false;
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el && scrollContainer) {
      const rect = el.getBoundingClientRect();
      let containerRect = scrollContainer === window ? { top: 0 } : scrollContainer.getBoundingClientRect();
      const middle = (scrollContainer === window ? window.innerHeight : scrollContainer.clientHeight) / 2;
      const top = rect.top - containerRect.top;
      const bottom = rect.bottom - containerRect.top;
      if (top <= middle && bottom > middle) {
        activeSection.value = section.id;
        found = true;
        break;
      }
    }
  }
  if (!found) activeSection.value = sections[0].id;
}

onMounted(() => {
  scrollContainer = document.querySelector('.h-screen.overflow-y-scroll') || window;
  if (scrollContainer) scrollContainer.addEventListener('scroll', onScroll);
});
onUnmounted(() => {
  if (scrollContainer) scrollContainer.removeEventListener('scroll', onScroll);
});
</script>


