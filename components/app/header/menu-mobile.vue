<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

const items = [
  [
    {
      label: t('home'),
      icon: 'mdi:home',
      to: localePath({ name: 'index' }),
    },
  ],
  [
    {
      label: t('program'),
      icon: 'mdi:calendar',
      to: localePath({ name: 'program' }),
    },
    {
      label: t('contact'),
      icon: 'mdi:mail',
      to: localePath({ name: 'contact' }),
    },
  ],
  [
    {
      label: 'Facebook',
      icon: 'mdi:facebook',
      to: 'https://facebook.com/animalliberationsummit',
      target: '_blank',
    },
    {
      label: 'Instagram',
      icon: 'mdi:instagram',
      to: 'https://instagram.com/animalliberationsummit',
      target: '_blank',
    },
  ],
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" trailing-icon="mdi:menu-swap-outline" />
  </UDropdown>
</template>
