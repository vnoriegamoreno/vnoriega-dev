<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
  src: string;
}>();
</script>

<template>
  <article class="post-card" role="listitem">
    <figure class="post-card-image">
      <img :src="src" :alt="`${title} post`" />
    </figure>
    <article class="post-card-content">
      <h3>{{ date }}</h3>
      <p>{{ title }}</p>
    </article>
  </article>
</template>