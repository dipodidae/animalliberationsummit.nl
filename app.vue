<template>
  <AppControls />
  <div class="min-h-screen flex">
    <div class="flex flex-1 justify-center items-center dark:bg-stone-800 bg-pink-50">
      <ContentDoc path="/intro" class="w-[32em] mx-auto p-4 prose lg:prose-xl text-stone-900 dark:text-pink-100 font-bold" />
    </div>

    <div class="flex-1 flex justify-center items-center dark:bg-stone-900 bg-pink-100">
      <AppLogo class="w-[40em]" />
    </div>
  </div>
</template>
