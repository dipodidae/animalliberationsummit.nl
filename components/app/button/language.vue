<script setup>
const { locale, locales, setLocale } = useI18n()

const value = computed({
  get: () => {
    return {
      code: locale.value,
      label: locales.value.find(l => l.code === locale.value).label,
    }
  },
  set: (value) => {
    setLocale(value.code)
  },
})
</script>

<template>
  <ClientOnly><USelectMenu v-model="value" :options="locales" by="code" /></ClientOnly>
</template>
