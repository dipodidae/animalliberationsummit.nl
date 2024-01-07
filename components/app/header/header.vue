<template>
  <header class="bg-background/75 backdrop-blur -mb-px fixed right-0 left-0 top-0 z-50  flex items-center justify-between gap-3 min-h-[6em] p-3 lg:p-6 border-b dark:border-stone-600/20 border-pink-300/30">
    <div class="lg:flex-1 flex items-center gap-1.5">
      <div class="flex lg:hidden gap-2 items-center leading=[0.8]">
        <AppHeaderMenuMobile />
        <div class="text-xs md:text-md text-pink-400 dark:text-stone-400">
          Animal Liberation Summit
        </div>
      </div>
      <LanguageLink :path="{ name: 'index' }" class="hidden lg:flex gap-3 group hover:text-pink-700 dark:hover:text-pink-400 ">
        <AppLogoGraphicsOnly class="group-hover:text-pink-700 dark:group-hover:text-pink-400  w-[6em] h-[6em]" />
        <div class="flex items-center leading-none flex-col justify-center">
          <div>
            <div class="text-bold text-lg mb-1 font-bold">
              Animal Liberation Summit
            </div>
            <div class="text-sm">
              {{ $t('event-date') }} - Plantage Doklaan 8-12, Amsterdam
            </div>
          </div>
        </div>
      </LanguageLink>
    </div>
    <ul class="items-center gap-x-8 hidden lg:flex">
      <AppHeaderItem :path="{ name: 'index' }">
        {{ $t('home') }}
      </AppHeaderItem>
      <AppHeaderItem :path="{ name: 'program' }">
        {{ $t('program') }}
      </AppHeaderItem>
      <AppHeaderItem :path="{ name: 'contact' }">
        {{ $t('contact') }}
      </AppHeaderItem>
      <AppHeaderItem to="https://facebook.com/animalliberationsummit" target="_blank">
        <UIcon class="w-6 h-6" name="mdi:facebook" />
      </AppHeaderItem>
      <AppHeaderItem to="https://instagram.com/animalliberationsummit" target="_blank">
        <UIcon class="w-6 h-6" name="mdi:instagram" />
      </AppHeaderItem>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <LanguagePicker />
      <AppButtonColorMode />
    </div>
  </header>
</template>
