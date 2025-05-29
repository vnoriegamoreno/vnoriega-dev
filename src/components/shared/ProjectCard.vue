<script setup lang="ts">
  import Pill from '../shared/Pill.vue';
  defineProps<{
    title: string;
    description: string;
    src: string;
    techStack: string[];
  }>();
</script>

<template>
  <article class="project-card" role="listitem">
    <h3 class="project-card-title">{{ title }}</h3>
    <div class="project-card-wrapper">
      <figure class="project-card-image">
        <picture>
          <source
            :srcset="src"
            type="image/avif"
          />
          <source
            :srcset="`${src} 2x, ${src} 1x`"
            type="image/avif"
          />
          <img
            :src="src"
            :alt="`${title} project preview`"
            loading="lazy"
            fetchpriority="low"
            decoding="async"
          />
        </picture>
      </figure>
      <div class="project-card-info">
        <article
          class="project-card-content"
          aria-label="Project description"
          itemscope
          itemtype="http://schema.org/Article"
        >
          <p itemprop="description">{{ description }}</p>
        </article>
        <footer
          class="project-card-tech-stack"
          role="list"
          aria-label="Technologies used"
          itemscope
          itemtype="http://schema.org/ItemList"
        >
          <Pill
            v-for="tech in techStack"
            :key="tech"
            :title="tech"
            role="listitem"
            itemprop="itemListElement"
          />
        </footer>
      </div>
    </div>
  </article>
</template>
