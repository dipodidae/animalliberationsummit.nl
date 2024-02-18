<script setup lang="ts">
const props = defineProps<{
  path: string
}>()

const { locale } = useI18n()

const path = computed(() => `${locale.value}/${props.path}`)
</script>

<template>
  <ContentDoc :path="path" class="prose lg:prose-lg xl:prose-xl prose-stone dark:prose-headings:text-pink-50 dark:prose-a:text-pink-50 prose-a:no-underline  dark:prose-a:prose-headings:text-pink-50 prose-a:prose-headings:no-underline dark:prose-li:text-pink-50 dark:prose-p:text-pink-50" />
</template>
