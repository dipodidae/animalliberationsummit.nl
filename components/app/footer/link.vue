<script setup lang="ts">
const props = defineProps<{
  path?: {
    name: string
  }
  to?: string
}>()
</script>

<template>
  <LanguageLink
    v-bind="props"
    class="text-stone-400 decoration-pink-200/0 underline-offset-4 transition-all hover:underline hover:decoration-pink-200"
    active-class="underline decoration-offset-4 decoration-stone-300 dark:decoration-stone-700"
  >
    <slot />
  </LanguageLink>
</template>
