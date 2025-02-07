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
import { ref, onMounted, watchEffect } from "vue";
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
  let savedLocale = localStorage.getItem("locale");
  if (!savedLocale) {
    savedLocale = "vi"; 
    localStorage.setItem("locale", savedLocale);
  }
  await store.dispatch("language/changeLanguage", savedLocale);
  await updateTranslations();
  loading.value = false;
});

watchEffect(async () => {
  const newLocale = store.state.language.locale;
  if (!newLocale || newLocale === localStorage.getItem("locale")) return;

  localStorage.setItem("locale", newLocale);
  loading.value = true;
  await store.dispatch("language/changeLanguage", newLocale);
  await updateTranslations();
  loading.value = false;
});

</script>
