<template>
  <div class="containered flex flex-wrap pt-6">
    <article class="text-sm md:max-w-[25%] w-full">
      <nav>
        <ol class="border divide-y">
          <li v-for="link in links">
            <a
              class="px-5 hover:bg-green-50 dark:bg-stone-800 dark:hover:bg-stone-600 py-3 block w-full text-xs"
              :href="link.url"
              >{{ link.title }}</a
            >
          </li>
        </ol>
      </nav>
    </article>
    <article
      class="grow pt-4 md:pt-0 md:px-6 flex flex-col gap-2 md:max-w-[75%]"
    >
      <div class="flex flex-wrap gap-4 h-fit">
        <div class="sr-only">personal info</div>
        <a
          class="md:w-fit w-full flex justify-center md:block"
          href="mailto:pobedinskiyvv@m.usfeu.ru"
        >
          <img
            class="min-w-[183px] h-[250px]"
            src="https://usfeu.ru/media/filer_public_thumbnails/filer_public/3b/30/3b308f24-8369-40b5-8e25-971829bca3be/pobedinskii_vv.jpg__404x250.0_q85_subsampling-2.jpg"
            alt="Фото профессора Побединского"
          />
        </a>
        <div class="sm:text-left text-center sm:w-[unset] w-full">
          <p class="font-bold">Побединский Владимир Викторович</p>
          <p class="text-stone-600 text-sm">Заведующий кафедрой</p>
          <p class="text-stone-600 text-sm">
            Профессор, кандидат технических наук, доктор технических наук
          </p>
        </div>
      </div>
      <div class="sm:grid-cols-2 max-sm:mb-8 grid mt-4 gap-3 text-sm">
        <p class="font-semibold">E-mail заведующего кафедрой:</p>
        <a
          href="mailto:pobedinskiyvv@m.usfeu.ru"
          class="text-green-800 underline"
          >pobedinskiyvv@m.usfeu.ru</a
        >
        <p class="font-semibold">Телефон:</p>
        <a href="tel:83432212214">(343) 221-22-14</a>
        <p class="font-semibold">Адрес кафедры:</p>
        <a href="https://go.2gis.com/9a4h3">
          Адрес: 620100, г. Екатеринбург, ул. Сибирский тракт, 37, кабинет
          301,302
        </a>
      </div>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li
            class="list-disc ml-3 hover:text-brand hover:underline"
            v-for="link of navigation"
            :key="link._path"
          >
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </article>
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
