<template>
  <div id="app">
    <Loading v-if="loading" />
    <div v-show="!loading">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const store = useStore();
const router = useRouter();
const loading = ref(true);

const updateTranslations = async () => {
  const titleKey = "Title";
  const translatedTitle = await store.dispatch("language/translate", titleKey);
  document.title = `${translatedTitle} | ${router.currentRoute.value.name || "Trang chủ"}`;
};

onMounted(async () => {
  let savedLocale = localStorage.getItem("locale") || "vi";
  localStorage.setItem("locale", savedLocale);

  await store.dispatch("language/changeLanguage", savedLocale);
  await updateTranslations();
  loading.value = false;
});

router.beforeEach(async (to, from, next) => {
  loading.value = true;
  await updateTranslations();
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>
