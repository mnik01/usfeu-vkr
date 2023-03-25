<template>
  <div class="containered flex flex-wrap gap-6 pt-6">
    <article class="text-sm md:max-w-[25%] w-full">
      <ol class="border divide-y">
        <li v-for="link in links">
          <a
            class="px-5 hover:bg-green-50 dark:bg-stone-800 dark:hover:bg-stone-600 py-3 block w-full text-xs"
            :href="link.url"
            >{{ link.title }}</a
          >
        </li>
      </ol>
    </article>
    <article class="grow md:max-w-[75%]">info</article>
  </div>
</template>

<script lang="ts" setup>
const links = ref([
  {
    title: "Ректорат",
    url: "https://usfeu.ru/struktura/rektorat/",
  },
  {
    title: "Ученый совет",
    url: "https://usfeu.ru/struktura/uchenyj-sovet/",
  },
  {
    title: "Управления, отделы, центры",
    url: "https://usfeu.ru/struktura/upravleniya/",
  },
  {
    title: "Уральский Лесотехнический Колледж",
    url: "https://usfeu.ru/struktura/uralskij-lesotehnicheskij-kolledzh/",
  },
  {
    title: "Институты, кафедры",
    url: "https://usfeu.ru/struktura/instituty-fakultety-kafedry/",
  },
  {
    title: "Научная библиотека",
    url: "https://usfeu.ru/struktura/nauchnaya-biblioteka/",
  },
  {
    title: "Редакционно-издательский отдел",
    url: "https://usfeu.ru/struktura/redakcionno-izdatelskij-otdel-fgbou-vo-ugltu/",
  },
  {
    title: "Уральский сад лечебных культур им. профессора Л.И. Вигорова (УСЛК)",
    url: "http://usfeu.ru/deyatelnost/nauchnaya-deyatelnost-ugltu/nauchno-obrazovatelnye-centry/nauchno-obrazovatelnyj-centr-dendroekologii-i-sadovodstva/uralskij-sad-lechebnyh-kultur-im-professora-li-vigorova-uslk/?edit&language=ru",
  },
  {
    title: "Уральский учебно­-опытный лесхоз",
    url: "https://usfeu.ru/struktura/uralskij-uchebno-opytnyj-leshoz/",
  },
  {
    title: 'НОЦ "ЛЕСТЕХПРОЕКТ"',
    url: "http://lesteh-proekt.ru/",
  },
]);
</script>
