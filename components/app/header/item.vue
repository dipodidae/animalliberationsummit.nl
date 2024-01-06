<script setup lang="ts">
const props = defineProps<{
  path?: {
    name: string
  }
  to?: string
}>()
</script>

<template>
  <li class="relative">
    <LanguageLink :to="props.to" class="text-sm/6 font-semibold flex items-center gap-1 hover:text-pink-700 dark:hover:text-pink-400">
      <slot />
    </LanguageLink>
  </li>
</template>
