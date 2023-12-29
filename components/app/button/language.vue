<script setup>
const { locale, locales, setLocale } = useI18n()

const value = computed({
  get: () => {
    return {
      code: locale.value,
      id: locale.value,
      label: locales.value.find(l => l.id === locale.value).label,
    }
  },
  set: (value) => {
    setLocale(value.code)
  },
})
</script>

<template>
  <USelectMenu v-model="value" :options="locales" by="code" />
</template>
