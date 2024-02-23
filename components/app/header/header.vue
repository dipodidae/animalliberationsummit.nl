<script setup lang="ts">
import socialMediaLinks from '~/data/social-media-links.json'
import pages from '~/data/pages.json'
</script>

<template>
  <header class="fixed inset-x-0 top-0 flex flex-col justify-end bg-cover bg-center shadow-lg shadow-stone-300 md:h-[50ch] dark:shadow-stone-950" style="background-image: url('/images/header.jpg')">
    <nav class="sticky top-0 flex items-center justify-between gap-2 border-pink-200/20 bg-stone-950/50 p-5 md:border-t">
      <div class="flex items-center gap-1.5 lg:flex-1">
        <div class="flex items-center gap-2 leading-[0.8] lg:hidden">
          <AppHeaderMenuMobile />
          <div class="text-xs md:text-base ">
            Animal Liberation Summit
          </div>
        </div>
        <LanguageLink :path="{ name: 'index' }" class="group hidden gap-3 text-pink-50 hover:text-pink-200 lg:flex ">
          <AppLogoGraphicsOnly class="size-[6em] text-pink-50  group-hover:text-pink-200" />
          <AppHeaderLogoText />
        </LanguageLink>
      </div>
      <ul class="hidden items-center gap-x-8 lg:flex">
        <AppHeaderItem v-for="page in pages" :key="page.path.name" :path="page.path">
          {{ $t(page['i18n-key']) }}
        </AppHeaderItem>
        <AppHeaderItem v-for="socialMediaLink in socialMediaLinks" :key="socialMediaLink.url" :to="socialMediaLink.url" target="_blank">
          <UIcon class="size-6" :name="socialMediaLink.icon" />
        </AppHeaderItem>
      </ul>
      <div class="flex items-center justify-end gap-1.5 lg:flex-1">
        <LanguagePicker />
        <AppButtonColorMode />
      </div>
    </nav>
  </header>
</template>
