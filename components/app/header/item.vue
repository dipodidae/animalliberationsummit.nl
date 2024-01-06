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
    <LanguageLink :to="props.to" class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary">
      <slot />
    </LanguageLink>
  </li>
</template>
