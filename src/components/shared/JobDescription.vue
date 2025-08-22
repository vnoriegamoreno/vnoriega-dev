<script setup lang="ts">
  import Pill from '../shared/Pill.vue';
  defineProps<{
    company: string;
    endDate: string;
    jobRole: string;
    position: string;
    resume: string;
    startDate: string;
    techStack: string[];
  }>();
</script>

<template>
  <article class="experience-details">
    <h3 class="experience-details-job-period">
      <span class="experience-details-job-period-start-year">
        {{ startDate }}
      </span>
      <span class="experience-details-job-period-separator" />
      <span class="experience-details-job-period-end-year">
        {{ endDate }}
      </span>
    </h3>
    <div class="experience-details-job-overview">
      <h3 class="experience-details-job-overview-title">
        {{ company }}
        <span class="experience-details-job-overview-title-separator">|</span>
        {{ jobRole }}
      </h3>
      <p class="experience-details-job-overview-description">
        {{ resume }}
      </p>
      <footer
        class="project-card-tech-stack"
        role="list"
        aria-label="Technologies used"
        itemscope
        itemtype="http://schema.org/ItemList"
      >
        <Pill
          v-for="tech in techStack"
          :key="tech"
          :title="tech"
          role="listitem"
          itemprop="itemListElement"
        />
      </footer>
    </div>
  </article>
</template>