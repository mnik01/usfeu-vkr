<template>
  <Header />
  <BreadCrumbs />
  <main>
    <Layout>
      <ContentDoc class="grow text-sm pt-4 md:pt-0 md:px-6 md:max-w-[75%]" />
      <a
        v-if="$route.path !== '/'"
        class="hover:text-brand hover:underline text-sm mt-4"
        href="/"
      >
        Назад на главную
      </a>
    </Layout>
  </main>
  <Footer />
</template>

<style>
p {
  margin-bottom: 16px;
}
</style>

<script setup lang="ts">
useSeoMeta({
  ogImage: "https://i.postimg.cc/tCdFm62D/image.png",
});
</script>
