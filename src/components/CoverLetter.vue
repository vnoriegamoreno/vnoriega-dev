<script setup lang="ts">
  import { computed } from 'vue';
  import SocialMedia from './shared/SocialMedia.vue';
  const profileAvatar = computed(() => "/assets/vnoriega-animated.gif");
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
          loading="eager"
          fetchpriority="high"
          width="400"
          height="400"
          decoding="async"
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
