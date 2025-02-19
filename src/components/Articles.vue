<script setup lang="ts">
import RightArrowIcon from './icons/RightArrowIcon.vue';
import PostCard from './shared/PostCard.vue';
import { articles } from '../mocks/posts';
</script>

<template>
  <section class="articles" aria-labelledby="articles-heading">
    <h2 id="articles-heading" class="articles-title">Articles</h2>
    <div class="articles-grid">
      <PostCard
        v-for="article in articles"
        :key="article.title"
        :src="article.src"
        :title="article.title"
        :date="article.yearPublished"
      />
    </div>
    <p class="articles-link">
      <a 
        href="#" 
        title="View all list of articles published"
        aria-label="Navigate to full list of articles"
        class="articles-link-text"
        @click.prevent
      >
        View All The Articles
        <RightArrowIcon />
      </a>
    </p>
  </section>
</template>