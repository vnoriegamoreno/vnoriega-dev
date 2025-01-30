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
    <figure class="project-card-image">
      <img :src="src" :alt="`${title} project preview`" />
    </figure>
    <article class="project-card-content">
      <p>{{ description }}</p>
    </article>
    <footer class="project-card-tech-stack" role="list">
      <Pill 
        v-for="tech in techStack" 
        :key="tech" 
        :title="tech"
        role="listitem"
      />
    </footer>
  </article>
</template>