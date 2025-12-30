<script setup lang="ts">
  import { computed } from 'vue';
  import SocialMedia from './shared/SocialMedia.vue';
  const profileAvatar = computed(() => "/assets/profile/anime/vnoriega-anime-christmas.jpg");
</script>

<template>
  <section class="cover-letter-section">
    <figure class="avatar">
      <picture>
        <source
          :srcset="profileAvatar"
          media="(min-width: 1024px)"
        />
        <source
          :srcset="`${profileAvatar} 2x, ${profileAvatar} 1x`"
          media="(max-width: 1023px)"
        />
        <img
          :src="profileAvatar"
          alt="Vicente Noriega's profile photo"
          decoding="async"
          fetchpriority="high"
          height="400"
          loading="eager"
          width="400"
        />
      </picture>
    </figure>
    <article class="cover-letter">
      <h1 class="title">VNORIEGA</h1>
      <h2 class="heading">Software Engineer</h2>
      <p class="body">I design and build digital experiences</p>
      <SocialMedia />
    </article>
  </section>
</template>
