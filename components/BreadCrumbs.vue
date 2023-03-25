<template>
  <div class="w-full dark:bg-stone-700 bg-stone-100">
    <div class="containered">
      <h1 class="first-letter:capitalize pb-2 pt-6 text-3xl">
        {{ data?.title || "Кафедра интеллектуальных систем (ИС)" }}
      </h1>
      <nav>
        <ol
          class="flex mt-2 items-center gap-1 pb-6 text-xs dark:text-green-600 text-[#19472A] flex-wrap"
        >
          <li>
            <a href="https://usfeu.ru/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://usfeu.ru/struktura/"
              class="before:pr-1 before:content-['/']"
              >Структура</a
            >
          </li>
          <li>
            <a
              href="https://usfeu.ru/struktura/instituty/socialno-ekonomicheskij-fakultet-sef/"
              class="before:pr-1 before:content-['/']"
              >Социально-экономический институт (СЭИ)</a
            >
          </li>
          <li>
            <a
              href="https://usfeu.ru/struktura/instituty/socialno-ekonomicheskij-fakultet-sef/kafedry/"
              class="before:pr-1 before:content-['/']"
              >Кафедры</a
            >
          </li>
          <li>
            <a
              href="/"
              class="dark:text-green-700 font-heading text-stone-500 before:pr-1 before:content-['/']"
              >Кафедра интеллектуальных систем (ИС)</a
            >
          </li>
          <li v-for="(slug, index) in slugs">
            <a
              :href="`/${getSlug(slug, index)}`"
              class="dark:text-green-700 text-stone-500 before:pr-1 before:content-['/']"
            >
              {{ slug }}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).only(["title"]).findOne();
});
const slugs = ref(
  typeof route.params.slug === "string"
    ? [route.params.slug]
    : route.params.slug
);
const getSlug = (slug: string, i: number) => {
  if (!i) return slug;
  // @ts-ignore
  return route.params.slug.join("/");
};
</script>
