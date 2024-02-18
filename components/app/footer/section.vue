<script setup lang="ts">
const props = defineProps<{
  title: string,
}>()
</script>

<template>
  <div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {{ props.title}}
    </h2>
    <slot />
  </div>
</template>
