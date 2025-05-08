<script setup lang="ts">
  defineProps<{
    announcements: string[];
  }>();
</script>

<template>
  <div class="announcements">
    <ul class="ads-carousel">
      <li class="ad" v-for="(announcement, i) in announcements" :key="`${announcement}-${i}`">
        {{ announcement }}
      </li>
    </ul>
  </div>
</template>
