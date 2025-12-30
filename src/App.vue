<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import CoverLetter from './components/CoverLetter.vue';
  import About from './components/About.vue';
  import Projects from './components/Projects.vue';
  import Articles from './components/Articles.vue';
  import Footer from './components/Footer.vue';
  import Experience from './components/Experience.vue';
  // import Announcements from './components/shared/Announcements.vue';

  let snowInterval: number | null = null;
  let activeSnowflakes = 0;
  const MAX_SNOWFLAKES = 50;

  function createSnowflake() {
    if (activeSnowflakes >= MAX_SNOWFLAKES) return;
    
    activeSnowflakes++;
    const snowflake = Object.assign(
      document.createElement('div'),
      {
        className: 'snowflake',
        style: `
        left: ${Math.random() * window.innerWidth}px;
        top: -5px;
        opacity: ${Math.random() * 0.8 + 0.2};
        transform: scale(${Math.random() * 1.5 + 0.5});`
      }
    )

    document.body.appendChild(snowflake);

    let posY = -5;
    let speed = Math.random() * 2 + 1;
    let wobble = 0;

    function fall() {
      posY += speed;
      wobble += 0.02;
      snowflake.style.top = posY + 'px';
      snowflake.style.left =
        parseFloat(snowflake.style.left) +
        Math.sin(wobble) * 2 + 'px';

      if (posY < window.innerHeight) {
        requestAnimationFrame(fall);
      } else {
        snowflake.remove();
        activeSnowflakes--;
      }
    }

    fall();
  }

  function generateSnow() {
    snowInterval = window.setInterval(createSnowflake, 200);
  }

  function stopSnow() {
    if (snowInterval) {
      clearInterval(snowInterval);
      snowInterval = null;
    }
    document.querySelectorAll('.snowflake').forEach(flake => flake.remove());
    activeSnowflakes = 0;
  }

  onMounted(() => {
    generateSnow();
  });

  onUnmounted(() => {
    stopSnow();
  });
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

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: black;
  }

  .snowflake {
    position: fixed;
    width: 4px;
    height: 4px;
    background-color: white;
    pointer-events: none;
    z-index: 9999;
  }
</style>