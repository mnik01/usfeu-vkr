<!-- тема языки меню -->
<template>
  <header
    class="dark:bg-stone-900 py-6 gap-4 flex flex-col items-center justify-center shadow-lg w-full"
  >
    <img class="w-64" src="https://usfeu.ru/static/logo.png" alt="logo" />
    <div class="w-full flex justify-end gap-2">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <div>menu</div>
    </div>
  </header>
  <!-- <ContentNavigation v-slot="{ navigation }">
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </ContentNavigation> -->
</template>
