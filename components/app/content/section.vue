<script setup lang="ts">
const props = defineProps<{
  path: string
  image?: string
  imageCaption?: string
}>()
</script>

<template>
  <section class="mx-auto flex flex-col gap-4 md:flex-row md:gap-[8ch] ">
    <AppContent :path="props.path" />
    <div v-if="props.image" class="md:ml-auto">
      <AppContentSectionImage :image="props.image" :image-caption="props.imageCaption" class="md:w-[44ch]" />
    </div>
  </section>
</template>
