<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
      {{ props.title }}
    </h2>
    <slot />
  </div>
</template>
