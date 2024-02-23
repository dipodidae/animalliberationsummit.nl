<script setup lang="ts">
const props = defineProps<{
  image: string
  imageCaption?: string
}>()
</script>

<template>
  <div class="overflow-hidden rounded-md border border-stone-700">
    <img :src="props.image" class="w-full">
    <div v-if="props.imageCaption" class="border-t border-stone-700 p-4 text-center text-stone-700">
      {{ props.imageCaption }}
    </div>
  </div>
</template>
