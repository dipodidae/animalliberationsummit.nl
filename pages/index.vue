<template>
  <div class="border-b  dark:border-stone-600/20 border-pink-300/30 p-4 flex flex-col items-center lg:hidden">
    <AppLogo class="mb-4" />
    <div class="text-xl">
      Animal Liberation Summit
    </div>
    <div class="text-sm">
      {{ $t('event-date') }} - Plantage Doklaan 8-12, Amsterdam
    </div>
  </div>
  <AppContentSection path="home" />
</template>
