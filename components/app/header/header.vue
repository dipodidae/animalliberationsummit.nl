<template>
  <header class="bg-background/75 backdrop-blur -mb-px fixed right-0 left-0 top-0 z-50  flex items-center justify-between gap-3 h-[--header-height] p-6 border-b dark:border-stone-600/20 border-pink-300/30">
    <div class="lg:flex-1 flex items-center gap-1.5">
      <LanguageLink :to="{ name: 'index' }" class="flex gap-3">
        <AppLogoGraphicsOnly />
        <div>
          Animal Liberation Summit
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
      <AppHeaderItem :path="{ name: 'index' }">
        {{ $t('contact') }}
      </AppHeaderItem>
      <AppHeaderItem to="https://facebook.com/animalliberationsummit">
        <UIcon class="w-6 h-6" name="mdi-facebook" />
      </AppHeaderItem>
      <AppHeaderItem to="https://instagram.com/animalliberationsummit">
        <UIcon class="w-6 h-6" name="mdi-instagram" />
      </AppHeaderItem>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <LanguagePicker />
      <AppButtonColorMode />
    </div>
  </header>
</template>
