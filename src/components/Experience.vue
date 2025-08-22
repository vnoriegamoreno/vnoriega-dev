<script setup lang="ts">
import { onMounted, ref } from 'vue';
import JobDescription from './shared/JobDescription.vue';

const experience = ref<any>([]);

onMounted(() => {
  experience.value = [
    {
      company: "Q2",
      startDate: "2022",
      endDate: "2024",
      jobRole: "Staff Software Engineer",
      position: "Remote",
      resume: "At Q2, I architected and maintained two flagship banking apps with Vue.js and Ember.js, emphasizing modularity, performance, and responsive design. I refactored core components to accelerate feature delivery and introduced a CSS-variable theming system for UI consistency. Resolving TypeScript issues and deprecations improved stability, while expanding unit and E2E tests cut regressions and elevated quality.",
      techStack: [
        "CSS",
        "Cypress.js",
        "Ember.js",
        "ESLint",
        "Git",
        "JavaScript",
        "Jest",
        "Mocha.js",
        "TypeScript"
      ],
    },
    {
      company: "Unosquare",
      startDate: "2020",
      endDate: "2022",
      jobRole: "Full Stack Developer",
      position: "Remote",
      resume: "As part of the FMI project, which offers advanced medical reporting for pathology patients, I was critical in enhancing the system's ability to process and validate complex reports. My work ensured the seamless integration of multiple services and databases, contributing to better medical documentation and patient outcomes. Additionally, I supported the QA automation team using the Cypress framework to ensure a high- quality product, while providing technical support to guarantee system functionality and reliability",
      techStack: [
        "AWS Lambda",
        "Confluence",
        "Cypress.js",
        "Enzyme",
        "Express",
        "Jenkins",
        "Jest",
        "Lucid Chart",
        "Oracle DB",
        "React Testing Library",
        "React",
        "SonarQube",
        "XML"
      ],
    },
    {
      company: "People Thrust",
      startDate: "2019",
      endDate: "2020",
      jobRole: "Full Stack Developer",
      position: "Remote",
      resume: "At People Thrust, I contributed to two major projects: the development of a localization feature for Pluto TV and a full-stack real estate application. In both projects, I played a key role in creating scalable, responsive solutions that met user demands, while also focusing on optimizing both the front and back-end systems for performance and reliability.",
      techStack: [
        "Axios",
        "Docker",
        "Jenkins",
        "Material-UI",
        "NestJS",
        "PostgreSQL",
        "React",
        "Redux",
        "Swagger"
      ],
    },
  ];
});
</script>

<template>
  <section class="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="experience-title">EXPERIENCE</h2>
  </section>
  <div class="experience-grid" role="list">
    <JobDescription
      v-for="jobDetail in experience as any[]"
      :key="jobDetail.company"
      :company="jobDetail.company"
      :endDate="jobDetail.endDate"
      :job-role="jobDetail.jobRole"
      :position="jobDetail.position"
      :resume="jobDetail.resume"
      :startDate="jobDetail.startDate"
      :tech-stack="jobDetail.techStack"
      role="listitem"
    />
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