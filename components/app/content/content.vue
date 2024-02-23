<script setup lang="ts">
const props = defineProps<{
  path: string
}>()

const { locale } = useI18n()

const path = computed(() => `${locale.value}/${props.path}`)
</script>

<template>
  <ContentDoc :path="path" class="prose prose-stone lg:prose-lg xl:prose-xl prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-pink-500 hover:prose-a:underline-offset-4 prose-a:prose-headings:no-underline dark:prose-headings:text-pink-50 dark:prose-p:text-pink-50  dark:prose-a:text-pink-50  dark:hover:prose-a:decoration-pink-200 dark:prose-a:prose-headings:text-pink-50 dark:prose-li:text-pink-50" />
</template>
