<script setup lang="ts">
const props = defineProps<{
  path?: {
    name: string
  }
  to?: string,
  href?: string
}>()

const localePath = useLocalePath()
const to = computed(() => props.to || localePath(props.path!))
</script>

<template>
  <NuxtLink v-if="props.href" :href="props.href" target="_blank">
    <slot />
  </NuxtLink>
  <NuxtLink :to="to" v-else>
    <slot />
  </NuxtLink>
</template>
