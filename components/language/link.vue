<script setup lang="ts">
const props = defineProps<{
  path?: {
    name: string
  }
  to?: string
  href?: string
  activeClass?: string
}>()

const localePath = useLocalePath()
const to = computed(() => props.to || localePath(props.path!))

const attributes = computed(() => {
  if (props.href)
    return { href: props.href, target: '_blank' }

  if (props.to || props.path)
    return { to: to.value }

  return {}
})
</script>

<template>
  <ULink :active-class="props.activeClass" v-bind="attributes">
    <slot />
  </ULink>
</template>
