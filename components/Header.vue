<template>
  <header
    class="relative dark:bg-stone-800 py-6 gap-4 flex flex-col items-center justify-center w-full"
    :class="{ 'shadow-lg': !isMenuExpanded }"
  >
    <a href="/">
      <img class="w-64" src="https://usfeu.ru/static/logo.png" alt="logo" />
    </a>
    <div class="w-full flex px-6 justify-end gap-2">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <button
        @click="isMenuExpanded = !isMenuExpanded"
        class="p-2 rounded-full dark:hover:bg-brand hover:bg-green-100 text-slate-700 dark:text-white transition-colors"
      >
        <svg
          v-if="!isMenuExpanded"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuExpanded"
      class="absolute px-6 -translate-y-[1px] -bottom-[325%] dark:bg-stone-800 bg-white w-full shadow-md pb-6"
    >
      <ul class="flex flex-col gap-3 text-sm">
        <li
          class="w-full hover:bg-green-100 transition-colors dark:bg-stone-700 dark:hover:bg-green-800 bg-stone-100 rounded-md"
          v-for="link of links"
          :key="link.title"
        >
          <a class="block p-2 first-letter:capitalize" :href="link.href">
            {{ link.title }}
          </a>
        </li>
      </ul>
      <hr class="my-4" />
      <ul class="flex flex-col gap-3 text-sm">
        <li
          class="w-full hover:bg-green-100 transition-colors dark:bg-stone-700 dark:hover:bg-green-800 bg-stone-100 rounded-md"
          v-for="link of additionalLinks"
          :key="link.title"
        >
          <a class="block p-2 first-letter:capitalize" :href="link.href">
            {{ link.title }}
          </a>
        </li>
      </ul>
      <!-- <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation> -->
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuExpanded = ref(false);

const links = ref([
  {
    title: "главная",
    href: "https://usfeu.ru/",
  },
  {
    title: "университет",
    href: "http://usfeu.ru/universitet/ob-universitete/?edit",
  },
  {
    title: "структура",
    href: "https://usfeu.ru/struktura/",
  },
  {
    title: "деятельность",
    href: "https://usfeu.ru/deyatelnost/",
  },
  {
    title: "абитуриенту",
    href: "https://usfeu.ru/abiturientu/",
  },
  {
    title: "студенту",
    href: "https://usfeu.ru/studentu/",
  },
  {
    title: "аспиранту и докторанту",
    href: "https://usfeu.ru/aspirantu/",
  },
  {
    title: "работнику",
    href: "https://usfeu.ru/sotrudniku/",
  },
]);
const additionalLinks = ref([
  {
    title: "сведения об образовательной организации",
    href: "https://usfeu.ru/sveden/Common/",
  },
  {
    title: "ЭИОС",
    href: "http://lmsstudy.usfeu.ru/",
  },
  {
    title: "поиск",
    href: "https://usfeu.ru/universitet/poisk/",
  },
]);
</script>
