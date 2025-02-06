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
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

const store = useStore();
const router = useRouter();
const { t } = useI18n();
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 666);
});

watch(
  () => store.state.language.locale,
  () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 666);
  }
);

watch(
  () => router.currentRoute.value,
  () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 666);
    document.title = `${t("title")} | ${router.currentRoute.value.name}`;
  }
);
</script>
