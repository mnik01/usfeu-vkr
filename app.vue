<template>
  <div
    class="min-h-screen bg-white dark:bg-[#181818] text-stone-800 dark:text-slate-100 w-screen overflow-hidden"
  >
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
  ],
});
</script>
