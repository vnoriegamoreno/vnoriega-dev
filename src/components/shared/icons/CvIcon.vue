<script setup lang="ts">
defineOptions({
  name: 'CvIcon',
  inheritAttrs: true
});
</script>

<template>
  <div 
    class="cv-icon" 
    role="button"
    aria-label="Download CV"
    itemscope 
    itemtype="http://schema.org/Action"
  >
    <span itemprop="name">CV</span>
    <meta itemprop="description" content="Download Curriculum Vitae" />
  </div>
</template>
