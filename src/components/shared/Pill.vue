<script setup lang="ts">
  import { computed }  from 'vue';
  const props = defineProps<{
    title: string;
  }>();

  const pillTitle = computed(() => props.title || '');
</script>

<template>
  <span class="pill" role="listitem">
    <p>{{ pillTitle }}</p>
  </span>
</template>
