<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const icon = computed(() => isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid')
</script>

<template>
  <ClientOnly>
    <a href="#" @click="isDark = !isDark">
      <UIcon :name="icon" class="text-lg text-pink-50" />
    </a>
  </ClientOnly>
</template>
