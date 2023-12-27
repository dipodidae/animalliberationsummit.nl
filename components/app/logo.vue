<script setup lang="ts">
const colorMode = useColorMode()

const source = computed(() => colorMode.value === 'dark' ? '/logo/light.svg' : '/logo/dark.svg')
</script>

<template>
  <img :src="source" alt="Animal Liberation Summit logo">
</template>
