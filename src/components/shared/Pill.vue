<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <span class="pill" role="listitem">
    <p>{{ title }}</p>
  </span>
</template>