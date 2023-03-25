<template>
  <div class="relative w-9 h-9">
    <button
      class="w-9 flex dark:hover:bg-stone-700 bg-white items-center justify-center rounded-md"
      :class="[
        isOpened
          ? 'dark:bg-stone-700 z-10 shadow-lg py-2 absolute'
          : 'h-9 dark:bg-transparent',
      ]"
      ref="target"
      @click="isOpened = !isOpened"
    >
      <img
        v-if="!isOpened"
        class="w-[25px] h-[15px]"
        src="https://usfeu.ru/static/img/kk.png"
        alt="kazakh language"
      />
      <ul :class="[isOpened ? 'flex flex-col gap-2' : '']" v-if="isOpened">
        <li v-for="t in translations" :key="t.url">
          <a :href="t.url">
            <img class="w-[25px] h-[15px]" :src="t.imgUrl" :alt="t.alt" />
          </a>
        </li>
      </ul>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const isOpened = ref(false);
const target = ref(null);

onClickOutside(target, () => {
  isOpened.value = false;
});

const translations = ref([
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=en&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/gb.png",
    alt: "Перевод сайта на английский",
  },
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=zh-CN&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/ch.png",
    alt: "Перевод сайта на китайский",
  },
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=fr&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/fr.png",
    alt: "Перевод сайта на французский",
  },
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=ar&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/ar.png",
    alt: "Перевод сайта на арабский",
  },
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=kk&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/kk.png",
    alt: "Перевод сайта на казахский",
  },
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=tg&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/tg.png",
    alt: "Перевод сайта на таджикский",
  },
  {
    url: "http://translate.google.com/translate?js=n&sl=ru&tl=uz&u=http://usfeu.ru",
    imgUrl: "https://usfeu.ru/static/img/uz.png",
    alt: "Перевод сайта на узбекский",
  },
]);
</script>
