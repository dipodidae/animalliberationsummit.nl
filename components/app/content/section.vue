<script setup lang="ts">
const props = defineProps<{
  path: string
  uneven?: boolean
}>()

const { locale } = useI18n()

const classList = computed(() => {
  if (props.uneven) {
    return `relative isolate after:absolute after:content-[''] after:skew-y-2 after:bg-gradient-to-br
          from-pink-100 to-pink-200 dark:after:from-stone-800 dark:after:to-stone-700 after:z-[-1] after:inset-0 after:opacity-20`
  }

  return ''
})

const path = computed(() => `${locale.value}/${props.path}`)
</script>

<template>
  <section class="py-32 lg:py-[8em] xl:py-[18em] px-12 flex justify-center" :class="classList">
    <ContentDoc :path="path" class="prose prose-headings:text-stone-900 prose-p:text-stone-700 dark:prose-headings:text-white dark:prose-p:text-pink-100 lg:prose-xl" :head="false" />
  </section>
</template>
