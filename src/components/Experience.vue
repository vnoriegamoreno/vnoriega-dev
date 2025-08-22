<script setup lang="ts">
import Pill from './shared/Pill.vue';
</script>

<template>
  <section class="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="experience-title">EXPERIENCE</h2>
  </section>
  <div class="experience-grid" role="list">
    <article class="experience-details">
      <h3 class="experience-details-job-period">
        <span class="experience-details-job-period-start-year">
          2022
        </span>
        <span class="experience-details-job-period-separator" />
        <span class="experience-details-job-period-end-year">
          2024
        </span>
      </h3>
      <div class="experience-details-job-overview">
        <h3 class="experience-details-job-overview-title">
          Staff Software Engineer
        </h3>
        <p class="experience-details-job-overview-description">
          At Q2, I architected and maintained two flagship banking apps with Vue.js and Ember.js, emphasizing modularity, performance, and responsive design. I refactored core components to accelerate feature delivery and introduced a CSS-variable theming system for UI consistency. Resolving TypeScript issues and deprecations improved stability, while expanding unit and E2E tests cut regressions and elevated quality.
        </p>
        <footer
          class="project-card-tech-stack"
          role="list"
          aria-label="Technologies used"
          itemscope
          itemtype="http://schema.org/ItemList"
        >
          <Pill title="CSS" role="listitem" />
          <Pill title="Ember.js" role="listitem" />
          <Pill title="ESLint" role="listitem" />
          <Pill title="Git" role="listitem" />
          <Pill title="Git" role="listitem" />
          <Pill title="JavaScript" role="listitem" />
          <Pill title="Jest" role="listitem" />
          <Pill title="Mocha.js" role="listitem" />
          <Pill title="TypeScript" role="listitem" />
          <Pill title="Vue Test Utils" role="listitem" />
          <Pill title="Vue.js" role="listitem" />
        </footer>
      </div>
    </article>
  </div>
  <p class="experience-link">
    <a
      aria-label="Download full Resume"
      class="experience-link-text"
      download="vnoriega-resume.pdf"
      href="/assets/resume.pdf"
      title="Download Resume"
    >
      Download Resume
    </a>
  </p>
</template>