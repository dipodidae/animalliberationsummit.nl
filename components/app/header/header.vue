<script setup lang="ts">
import socialMediaLinks from '~/data/social-media-links.json'
import pages from '~/data/pages.json'
</script>

<template>
  <header class="md:h-[50ch] flex fixed flex-col justify-end top-0 left-0 right-0 bg-cover bg-center shadow-lg shadow-stone-300 dark:shadow-stone-950" style="background-image: url('/images/header.jpg')">
    <nav class="flex items-center justify-between gap-2 p-5 sticky top-0 bg-stone-950/50 md:border-t border-pink-200/20">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <div class="flex lg:hidden gap-2 items-center leading=[0.8]">
          <AppHeaderMenuMobile />
          <div class="text-xs md:text-md ">
            Animal Liberation Summit
          </div>
        </div>
        <LanguageLink :path="{ name: 'index' }" class="hidden lg:flex gap-3 group hover:text-pink-200 ">
          <AppLogoGraphicsOnly class="group-hover:text-pink-200  w-[6em] h-[6em]" />
          <AppHeaderLogoText />
        </LanguageLink>
      </div>
      <ul class="items-center gap-x-8 hidden lg:flex">
        <AppHeaderItem v-for="page in pages" :key="page.path" :path="page.path">
          {{ $t(page['i18n-key']) }}
        </AppHeaderItem>
        <AppHeaderItem v-for="socialMediaLink in socialMediaLinks" :key="socialMediaLink.url" :to="socialMediaLink.url" target="_blank">
          <UIcon class="w-6 h-6" :name="socialMediaLink.icon" />
        </AppHeaderItem>
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <LanguagePicker />
        <AppButtonColorMode />
      </div>
    </nav>
  </header>
</template>
