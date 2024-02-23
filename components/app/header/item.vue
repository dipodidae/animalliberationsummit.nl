<template>
  <li class="relative">
    <LanguageLink
      v-bind="$attrs"
      class="flex items-center gap-1 text-lg font-semibold text-pink-50 hover:text-pink-200"
      active-class="underline underline-offset-8 decoration-pink-200/80 decoration-2"
    >
      <slot />
    </LanguageLink>
  </li>
</template>
