<script setup lang="ts">
  import CoverLetter from './components/CoverLetter.vue';
  import About from './components/About.vue';
  import Projects from './components/Projects.vue';
  import Articles from './components/Articles.vue';
  import Footer from './components/Footer.vue';
  import Experience from './components/Experience.vue';
  // import Announcements from './components/shared/Announcements.vue';
</script>

<template>
  <div>
    <!-- <Announcements :announcements="['🚀 More Projects Coming Up ✨']" /> -->
    <main id="main-content" role="main">
      <header class="site-header" role="banner">
        <CoverLetter />
      </header>
      <div class="content-wrapper">
        <section id="about" aria-label="About">
          <About />
        </section>
        <section id="experience" aria-label="Experience">
          <Experience />
        </section>
        <section id="projects" aria-label="Projects">
          <Projects />
        </section>
        <section id="articles" aria-label="Articles">
          <Articles />
        </section>
        <footer class="site-footer" role="contentinfo">
          <Footer />
        </footer>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
