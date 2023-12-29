<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(availableLocale => availableLocale.code !== locale.value)
})
</script>

<template>
  <UDropdown :items="availableLocales" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" :label="locale.label" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>
