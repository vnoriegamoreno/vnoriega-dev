<script setup lang="ts">
import { computed } from 'vue';
import ProjectCard from './shared/ProjectCard.vue';
import RightArrowIcon from './icons/RightArrowIcon.vue';
import { projects } from '../mocks/projects';

const showViewAll = computed(() => projects.length > 3);
</script>

<template>
  <section class="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading" class="projects-title">PROJECTS</h2>
    <div class="projects-grid" role="list">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :src="project.src"
        :tech-stack="project.techStack"
        role="listitem"
      />
    </div>
    <p v-if="showViewAll" class="projects-link">
      <a 
        href="#" 
        title="View complete portfolio of projects"
        aria-label="Navigate to full projects portfolio"
        class="projects-link-text"
        @click.prevent
      >
        View All The Projects
        <RightArrowIcon />
      </a>
    </p>
  </section>
</template>