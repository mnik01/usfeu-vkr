<template>
  <article class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-4 h-fit">
      <div class="sr-only">personal info</div>
      <a
        class="md:w-fit w-full flex justify-center md:block"
        href="mailto:pobedinskiyvv@m.usfeu.ru"
      >
        <img
          class="min-w-[183px] h-[250px]"
          width="183"
          height="250"
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
      <a href="mailto:pobedinskiyvv@m.usfeu.ru" class="text-green-800 underline"
        >pobedinskiyvv@m.usfeu.ru</a
      >
      <p class="font-semibold">Телефон:</p>
      <a href="tel:83432212214">(343) 221-22-14</a>
      <p class="font-semibold">Адрес кафедры:</p>
      <a href="https://go.2gis.com/9a4h3">
        Адрес: 620100, г. Екатеринбург, ул. Сибирский тракт, 37, кабинет 301,302
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
</template>
