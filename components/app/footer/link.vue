<script setup lang="ts">
const props = defineProps<{
  path?: {
    name: string
  }
  to?: string
}>()
</script>

<template>
  <LanguageLink v-bind="props" class="text-stone-400 hover:underline decoration-pink-200/0 hover:decoration-pink-200 transition-all  underline-offset-4">
    <slot />
  </LanguageLink>
</template>
