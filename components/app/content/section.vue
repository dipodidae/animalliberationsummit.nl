<script setup lang="ts">
const props = defineProps<{
  path: string,
  image: string,
  imageCaption: string
}>()
</script>

<template>
  <section class="mx-auto flex gap-4 md:gap-[8ch] flex-col md:flex-row ">
    <AppContent :path="props.path" />
    <div class="md:ml-auto" v-if="props.image">
      <AppContentSectionImage :image="props.image" :imageCaption="props.imageCaption" class="md:w-[44ch]" />
    </div>
  </section>
</template>
