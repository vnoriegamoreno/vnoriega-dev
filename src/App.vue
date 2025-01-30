<script setup lang="ts">
import CoverLetter from './components/CoverLetter.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <main>
    <header>
      <CoverLetter />
    </header>
    <article>
      <About />
      <Projects />
    </article>
  </main>
</template>

<style scoped>
</style>
