<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import RightArrowIcon from './shared/icons/RightArrowIcon.vue';
  import PostCard from './shared/PostCard.vue';

  interface Article {
    title: string;
    src: string;
    yearPublished: string;
  }

  const articles = ref<Article[]>([]);

  onMounted(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/articles`);
      const data = await res.json();
      articles.value = data;
    } catch (error) {
      console.debug('Error fetching articles: ', error);
    }
  });

  const canShowArticles = computed(() => articles.value.length >= 1);
  const showViewAll = computed(() => articles.value.length > 3);
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
