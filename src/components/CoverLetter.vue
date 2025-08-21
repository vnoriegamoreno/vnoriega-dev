<script setup lang="ts">
  import SocialMedia from './shared/SocialMedia.vue';
</script>

<template>
  <section class="cover-letter-section">
    <figure class="avatar">
      <picture>
        <source
          srcset="/assets/profile-x4.avif"
          type="image/avif"
          media="(min-width: 1024px)"
        />
        <source
          srcset="/assets/profile-x4.avif 2x, /assets/profile-x4.avif 1x"
          type="image/avif"
          media="(max-width: 1023px)"
        />
        <img
          src="/assets/profile-x4.avif"
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
