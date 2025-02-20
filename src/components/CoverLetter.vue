<script setup lang="ts">
import LinkedinIcon from './icons/LinkedinIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import TiktokIcon from './icons/TiktokIcon.vue';
import CvIcon from './icons/CvIcon.vue';
</script>

<template>
  <section class="cover-letter-section">
    <figure class="avatar">
      <img src="/src/assets/profile-x4.png" alt="Vicente Noriega's profile photo">
    </figure>
    <article class="cover-letter">
      <h1 class="title typing-animation">
        <span class="long-text">VICENTE NORIEGA</span>
        <span class="short-text">VNORIEGA</span>
      </h1>
      <h2 class="heading">Software Engineer</h2>
      <p class="body">I design and build digital experiences</p>
    </article>
    <nav class="social-media" aria-label="Social media links">
      <a 
        href="/src/assets/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Download CV"
        download="resume.pdf"
      >
        <CvIcon />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
        <GithubIcon />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
        <InstagramIcon />
      </a>
      <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" aria-label="TikTok Profile">
        <TiktokIcon />
      </a>
    </nav>
  </section>
</template>
