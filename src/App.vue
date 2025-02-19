<script setup lang="ts">
import CoverLetter from './components/CoverLetter.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Articles from './components/Articles.vue';
</script>

<template>
  <main>
    <header>
      <CoverLetter />
    </header>
    <article>
      <About />
      <Projects />
      <Articles />
    </article>
  </main>
</template>

<style scoped>
</style>
