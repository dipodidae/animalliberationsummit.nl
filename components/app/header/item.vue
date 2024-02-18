<template>
  <li class="relative">
    <LanguageLink v-bind="$attrs" class="text-lg font-semibold flex items-center gap-1  hover:text-pink-700 dark:hover:text-pink-200">
      <slot />
    </LanguageLink>
  </li>
</template>
