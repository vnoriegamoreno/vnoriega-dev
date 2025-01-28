<script setup lang="ts">
import LinkedinIcon from './icons/LinkedinIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import TiktokIcon from './icons/TiktokIcon.vue';
import CvIcon from './icons/CvIcon.vue';
</script>

<template>
  <div class="avatar">
    <img src="../assets/profile.jpg" alt="profile image">
  </div>
  <div class="cover-letter">
    <h1 class="title typing-animation">
      <span class="long-text">VICENTE NORIEGA</span>
      <span class="short-text">VNORIEGA</span>
    </h1>
    <h2 class="heading">Software Engineer</h2>
    <p class="body">I design and build digital experiences</p>
  </div>
  <div class="social-media">
    <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer">
      <CvIcon />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <LinkedinIcon />
    </a>
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <GithubIcon />
    </a>
    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <InstagramIcon />
    </a>
    <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
      <TiktokIcon />
    </a>
  </div>
</template>
