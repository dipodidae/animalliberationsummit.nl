<template>
  <header class="bg-background/75 backdrop-blur border-b -mb-px fixed right-0 left-0 top-0 z-50 border-primary-200/75 dark:border-primary-900/50  flex items-center justify-between gap-3 h-[--header-height] p-6">
    <div class="lg:flex-1 flex items-center gap-1.5">
      <NuxtLink to="/" class="flex gap-3">
        <AppLogoGraphicsOnly />
        <div class="">
          Animal Liberation Summit
        </div>
      </NuxtLink>
    </div>
    <ul class="items-center gap-x-8 hidden lg:flex">
      <li class="relative">
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/">
          Home
        </NuxtLink>
      </li>
      <li class="relative">
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/program">
          Programma
        </NuxtLink>
      </li>
      <li class="relative">
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/">
          Contact
        </NuxtLink>
      </li>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <AppButtonLanguage />
      <AppButtonColorMode />
    </div>
  </header>
</template>
