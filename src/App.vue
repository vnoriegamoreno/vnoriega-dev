<script setup lang="ts">
  import CoverLetter from './components/CoverLetter.vue';
  import About from './components/About.vue';
  import Projects from './components/Projects.vue';
  import Articles from './components/Articles.vue';
  import Footer from './components/Footer.vue';
  import Experience from './components/Experience.vue';
  // import Announcements from './components/shared/Announcements.vue';
  function createSnowflake() {
    const snowflake = Object.assign(
      document.createElement('div'),
      {
        className: 'snowflake',
        style: `
        left: ${Math.random() * innerWidth}px;
        top: -5px;
        opacity: ${Math.random()};
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

      posY < innerHeight
        ? requestAnimationFrame(fall)
        : snowflake.remove();
    }

    fall();
  }

  function generateSnow() {
    setInterval(createSnowflake, 100);
  }

  generateSnow();
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
    overflow: hidden;
  }

  .snowflake {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: white;
  }
</style>