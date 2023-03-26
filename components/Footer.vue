<template>
  <footer
    class="dark:bg-stone-700 border-stone-300 border-t-[1px] bg-stone-100 mt-8"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-22">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <Logo />
          <p class="text-sm capitalize leading-6 font-heading">
            уральский государственный лесотехнический университет
          </p>
          <div class="flex space-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-500 hover:text-gray-400"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="text-xs">
              <h3 class="text-sm capitalize leading-6 font-heading">
                контакты
              </h3>
              <hr class="mt-2 mb-6" />
              <p>
                Федеральное государственное бюджетное образовательное учреждение
                высшего образования
              </p>
              <p class="font-semibold font-heading">
                «УРАЛЬСКИЙ ГОСУДАРСТВЕННЫЙ ЛЕСОТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ»
              </p>
              <ul role="list" class="mt-6 space-y-2">
                <li v-for="item in navigation.contacts" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs leading-6 text-stone-700 hover:text-brand hover:underline before:content-['-'] before:pr-2"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm capitalize leading-6 font-heading">
                приемная комиссия
              </h3>
              <hr class="mt-2 mb-6" />
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.comission" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs leading-6 text-stone-700 hover:text-brand hover:underline before:content-['-'] before:pr-2"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm capitalize leading-6 font-heading">
                связаться с нами
              </h3>
              <hr class="mt-2 mb-6" />
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.feedback" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs leading-6 text-stone-700 hover:text-brand hover:underline before:content-['-'] before:pr-2"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm capitalize leading-6 font-heading">меню</h3>
              <hr class="mt-2 mb-6" />
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.menu" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs leading-6 text-stone-700 hover:text-brand hover:underline before:content-['-'] before:pr-2"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">
          &copy; 2023 УГЛТУ. Кафедра интеллектуальных систем.
          <a
            class="hover:text-brand hover:underline mr-1"
            href="https://mnik01.vercel.app/cv"
            >Никонов Максим</a
          >
          <a class="hover:text-brand hover:underline" href="https://t.me/mnik01"
            >@mnik01</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";

const navigation = {
  contacts: [
    {
      name: "г.Екатеринбург, ул.Сибирский тракт 37",
      href: "https://go.2gis.com/9a4h3",
    },
    { name: "8 (343) 221-21-00", href: "tel:83432212100" },
    { name: "general@m.usfeu.ru", href: "mailto:general@m.usfeu.ru" },
    { name: "rector@m.usfeu.ru", href: "mailto:rector@m.usfeu.ru" },
  ],
  comission: [
    {
      name: "г.Екатеринбург, ул.Сибирский тракт 37, кабинет:1-133",
      href: "https://go.2gis.com/9a4h3",
    },
    { name: "8-800-350-61-10 (звонок бесплатный)", href: "tel:88003506110" },
    { name: "8 (343) 221-22-00", href: "tel:83432212200" },
  ],
  feedback: [
    {
      name: "Прием обращений граждан",
      href: "https://usfeu.ru/universitet/priem-obrashenij-grazhdan/",
    },
    {
      name: "Консультации по оказываемым услугам",
      href: "https://usfeu.ru/universitet/konsultacii-po-okazyvaemym-uslugam/",
    },
    {
      name: "Часто задаваемые вопросы",
      href: "https://usfeu.ru/deyatelnost/chasto-zadavaemye-voprosy/",
    },
  ],
  menu: [
    { name: "главная", href: "https://usfeu.ru/" },
    {
      name: "университет",
      href: "http://usfeu.ru/universitet/ob-universitete/?edit",
    },
    { name: "структура", href: "https://usfeu.ru/struktura/" },
    { name: "деятельность", href: "https://usfeu.ru/deyatelnost/" },
    { name: "абитуриенту", href: "https://usfeu.ru/abiturientu/" },
    { name: "студенту", href: "https://usfeu.ru/studentu/" },
    { name: "работнику", href: "https://usfeu.ru/sotrudniku/" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/mnik01/usfeu-vkr",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "VK",
      href: "https://vk.com/usfeu_66",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M18.9182 2H5.08185C3.3798 2 2 3.3798 2 5.08185V18.9182C2 20.6202 3.3798 22 5.08185 22H18.9182C20.6202 22 22 20.6202 22 18.9182V5.08185C22 3.3798 20.6202 2 18.9182 2ZM12.6502 16.0006H11.8321C11.8321 16.0006 10.027 16.1093 8.43713 14.454C6.70336 12.6488 5.17232 9.06663 5.17232 9.06663C5.17232 9.06663 5.08402 8.83186 5.17998 8.71821C5.28785 8.59054 5.58137 8.58235 5.58137 8.58235L7.53713 8.56957C7.53713 8.56957 7.72139 8.60027 7.85326 8.69715C7.96199 8.77711 8.02287 8.92648 8.02287 8.92648C8.02287 8.92648 8.339 9.72593 8.75754 10.4491C9.57459 11.8609 9.95516 12.1696 10.2325 12.0184C10.6368 11.7979 10.5155 10.0227 10.5155 10.0227C10.5155 10.0227 10.5229 9.37838 10.312 9.09136C10.1487 8.86917 9.84069 8.80415 9.70462 8.78603C9.59454 8.77133 9.77519 8.51588 10.0093 8.40122C10.3613 8.22882 10.9827 8.21908 11.7171 8.22655C12.2892 8.23238 12.454 8.2681 12.6777 8.32208C13.1968 8.4474 13.1806 8.84898 13.1457 9.71546C13.1352 9.97437 13.1231 10.2748 13.1231 10.6217C13.1231 10.6999 13.1208 10.7831 13.1185 10.8688C13.1064 11.3125 13.0924 11.8204 13.3846 12.0091C13.5344 12.1059 13.9008 12.0236 14.8173 10.4674C15.2515 9.72988 15.5774 8.86276 15.5774 8.86276C15.5774 8.86276 15.6484 8.70814 15.759 8.64197C15.8721 8.5743 16.0248 8.59507 16.0248 8.59507L18.0828 8.58235C18.0828 8.58235 18.7013 8.5086 18.8013 8.78776C18.9064 9.08076 18.5703 9.76487 17.7295 10.8855C16.931 11.9498 16.5429 12.3409 16.5794 12.6874C16.6059 12.94 16.8581 13.1688 17.3414 13.6173C18.3545 14.5577 18.6246 15.0515 18.6887 15.1687C18.6939 15.1782 18.6978 15.1852 18.7006 15.1898C19.1539 15.9416 18.1978 16.0006 18.1978 16.0006L16.3699 16.0262C16.3699 16.0262 15.9771 16.1039 15.4602 15.7489C15.1899 15.5634 14.9257 15.2604 14.6739 14.9718C14.2889 14.5304 13.9331 14.1224 13.6294 14.2187C13.12 14.3804 13.136 15.4781 13.136 15.4781C13.136 15.4781 13.1397 15.7125 13.0236 15.8375C12.8972 15.9734 12.6502 16.0006 12.6502 16.0006Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Telegram",
      href: "https://t.me/usfe05051930",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.0433 14.8196C12.8823 15.3989 13.7856 16.0399 14.1752 16.375C14.2404 16.4384 14.3178 16.4879 14.4026 16.5207C14.4874 16.5536 14.578 16.5689 14.6689 16.566C15.0388 16.5521 15.1421 16.1458 15.1421 16.1458C15.1421 16.1458 16.8678 9.20176 16.9254 8.27135C16.9276 8.23608 16.9301 8.20576 16.9324 8.17821C16.936 8.1346 16.939 8.09792 16.9395 8.05951C16.9425 7.98707 16.9354 7.91457 16.9183 7.8441C16.9097 7.8042 16.8906 7.76732 16.863 7.73723C16.8354 7.70714 16.8003 7.68492 16.7613 7.67285C16.6036 7.61293 16.3363 7.70301 16.3363 7.70301C16.3363 7.70301 6.86817 11.1061 6.32742 11.483C6.21075 11.5639 6.17175 11.611 6.15242 11.6663C6.05851 11.9347 6.35017 12.053 6.35017 12.053L8.79067 12.8482C8.79789 12.8494 8.80515 12.8504 8.81242 12.8511L9.95546 16.0148C9.95546 16.0148 10.0626 16.2368 10.1923 16.3034C10.2753 16.3578 10.4395 16.3148 10.7605 15.9937C11.2829 15.4712 11.7895 15.033 12.0433 14.8196Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Odnoklassniki",
      href: "https://ok.ru/group/59526331367451",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M19.0152 21.8973C20.6068 21.8973 21.8971 20.6004 21.8971 19.0006V4.99934C21.8971 3.39962 20.6068 2.10272 19.0152 2.10272H4.98438C3.39282 2.10272 2.10254 3.39957 2.10254 4.99934V19.0006C2.10254 20.6004 3.39277 21.8973 4.98438 21.8973H19.0152ZM8.3999 8.59642C8.3999 6.60415 10.0067 4.98904 11.9889 4.98904C13.971 4.98904 15.5778 6.60415 15.5778 8.59642C15.5778 10.5887 13.971 12.204 11.9889 12.204C10.0067 12.204 8.3999 10.5887 8.3999 8.59642ZM10.5053 8.59648C10.5053 9.42003 11.1695 10.0877 11.9889 10.0877C12.8082 10.0877 13.4725 9.42003 13.4725 8.59648C13.4725 7.77292 12.8082 7.10527 11.9889 7.10527C11.1695 7.10527 10.5053 7.77292 10.5053 8.59648ZM13.2557 15.0744C14.6925 14.7802 15.5535 14.0962 15.5991 14.0595C16.0195 13.7206 16.0871 13.1033 15.7499 12.6807C15.4128 12.2581 14.7987 12.1902 14.3781 12.529C14.3692 12.5363 13.4515 13.2439 11.9413 13.2454C11.941 13.2454 11.9407 13.2454 11.9403 13.2454C11.9403 13.2454 11.9403 13.2454 11.9403 13.2454C11.9393 13.2454 11.9387 13.2453 11.9408 13.2453C11.943 13.2453 11.9423 13.2454 11.9413 13.2454C11.9411 13.2454 11.941 13.2454 11.9408 13.2454C11.9406 13.2454 11.9405 13.2454 11.9403 13.2454C11.9402 13.2454 11.9401 13.2454 11.9399 13.2454C10.429 13.2443 9.49126 12.5363 9.48237 12.529C9.06183 12.1902 8.44772 12.2581 8.11059 12.6807C7.7734 13.1033 7.84094 13.7206 8.26138 14.0595C8.30755 14.0968 9.2041 14.7985 10.6812 15.0858L8.6226 17.2482C8.24849 17.6382 8.25974 18.2591 8.64771 18.6351C8.83708 18.8187 9.08115 18.9099 9.32501 18.9099C9.58068 18.9099 9.83609 18.8095 10.0276 18.6098L11.94 16.5622L14.0456 18.6231C14.4271 19.0059 15.0448 19.0053 15.4256 18.622C15.8064 18.2387 15.8059 17.6176 15.4245 17.2349L13.2557 15.0744Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCZJPqcqGS3IsAE5ce6ejf7Q",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>
