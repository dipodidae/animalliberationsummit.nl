<script setup lang="ts">
const props = defineProps<{
  path?: {
    name: string
  }
  to?: string
}>()

const localePath = useLocalePath()
const to = computed(() => props.to || localePath(props.path!))
</script>

<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>
