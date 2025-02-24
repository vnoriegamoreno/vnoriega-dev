<script setup lang="ts">
import { computed } from 'vue';
import RightArrowIcon from './shared/icons/RightArrowIcon.vue';
import PostCard from './shared/PostCard.vue';
import { articles } from '../mocks/posts';

interface Article {
  title: string;
  src: string;
  yearPublished: string;
}

const canShowArticles = computed(() => articles.length >= 1);
const showViewAll = computed(() => articles.length > 3);
</script>

<template>
  <section v-if="canShowArticles" class="articles" aria-labelledby="articles-heading">
    <h2 id="articles-heading" class="articles-title">Articles</h2>
    <div class="articles-grid">
      <PostCard
        v-for="article in articles as Article[]"
        :key="article.title"
        :src="article.src"
        :title="article.title"
        :date="article.yearPublished"
      />
    </div>
    <p v-if="showViewAll" class="articles-link">
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