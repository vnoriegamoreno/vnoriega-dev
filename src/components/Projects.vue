<script setup lang="ts">
import ProjectCard from './shared/ProjectCard.vue';

const projects = [
  {
    title: "Build a E-Commerce App",
    description: "Web app for managing eCommerce operations: track sales, manage inventory in real-time, process payments securely, and track orders. Gain insights into product performance, create personalized promotions, and manage discounts to boost engagement and drive sales.",
    src: "/src/assets/poktapok.png",
    techStack: ['Shopify', 'React', 'Tailwind CSS']
  },
  {
    title: "Build a E-Commerce App",
    description: "Web app for managing eCommerce operations: track sales, manage inventory in real-time, process payments securely, and track orders. Gain insights into product performance, create personalized promotions, and manage discounts to boost engagement and drive sales.",
    src: "/src/assets/poktapok.png",
    techStack: ['Shopify', 'React', 'Tailwind CSS']
  },
  {
    title: "Build a E-Commerce App",
    description: "Web app for managing eCommerce operations: track sales, manage inventory in real-time, process payments securely, and track orders. Gain insights into product performance, create personalized promotions, and manage discounts to boost engagement and drive sales.",
    src: "/src/assets/poktapok.png",
    techStack: ['Shopify', 'React', 'Tailwind CSS']
  }
];
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
  </section>
</template>