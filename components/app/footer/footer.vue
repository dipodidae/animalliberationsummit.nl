<script setup lang="ts">
import socialMediaLinks from '~/data/social-media-links.json'
import pages from '~/data/pages.json'
import organizingGroups from '~/data/organizing-groups.json'
</script>

<template>
  <footer class="border-t border-stone-700  mt-10">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <AppFooterSection :title="$t('pages')">
            <ul class="font-medium">
              <li v-for="page in pages" :key="page['i18n-key']" class="mb-4">
                <AppFooterLink :path="page.path">
                  <UIcon :name="page.icon" class="mr-2" />
                  {{ $t(page['i18n-key']) }}
                </AppFooterLink>
              </li>
            </ul>
          </AppFooterSection>
          <AppFooterSection title="Initiative of">
            <ul class="font-medium">
              <li v-for="organizingGroup in organizingGroups" :key="organizingGroup.name" class="mb-4">
                <AppFooterLink :href="organizingGroup.url">
                  {{ organizingGroup.name }}
                </AppFooterLink>
              </li>
            </ul>
          </AppFooterSection>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><UIcon name="mdi:copyleft" class="text-lg" /> 2024 <a href="https://flowbite.com/" class="hover:underline">Animal Liberation Summit</a>.
        </span>
        <div class="flex mt-4 gap-4 sm:justify-center sm:mt-0">
          <NuxtLink v-for="network in socialMediaLinks" :key="network.url" :href="network.url" target="_blank" class="dark:text-pink-50 dark:hover:text-pink-200 text-stone-700 hover:text-stone-800">
            <UIcon :name="network.icon" class="w-6 h-6" />
            <span class="sr-only">{{ network.platform }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
