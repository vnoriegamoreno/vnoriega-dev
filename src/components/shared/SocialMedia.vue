<script setup lang="ts">
import LinkedinIcon from './icons/LinkedinIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import CvIcon from './icons/CvIcon.vue';
</script>

<template>
  <nav class="social-media" aria-label="Social media links">
      <a 
        href="/assets/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Download CV"
        download="resume.pdf"
      >
        <CvIcon />
      </a>
      <a href="https://linkedin.com/in/vnoriegadev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/vnoriegamoreno" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
        <GithubIcon />
      </a>
    </nav>
</template>