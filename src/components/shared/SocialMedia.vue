<script setup lang="ts">
  import LinkedinIcon from './icons/LinkedinIcon.vue';
  import GithubIcon from './icons/GithubIcon.vue';
import HackerRankIcon from './icons/HackerRankIcon.vue';
  // import CvIcon from './icons/CvIcon.vue';
</script>

<template>
  <nav class="social-media" aria-label="Social media links">
    <a
      href="https://linkedin.com/in/vnoriegadev"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
    >
      <LinkedinIcon />
    </a>
    <a
      href="https://github.com/vnoriegamoreno"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
    >
      <GithubIcon />
    </a>
    <a
      href="https://www.hackerrank.com/profile/vnoriega"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="HackerRank Profile"
    >
      <HackerRankIcon />
    </a>
  </nav>
</template>
