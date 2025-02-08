<template>
  <div id="app">
    <Loading />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


const router = useRouter();
const loadingRef = ref(null);

onMounted(() => {
  loadingRef.value?.startLoading();
  setTimeout(() => {
    loadingRef.value?.stopLoading();
  }, 800);
});

router.beforeEach((to, from, next) => {
  loadingRef.value?.startLoading();
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    loadingRef.value?.stopLoading();
  }, 1500);
});
</script>

<style>
*{
  font-family: 'Comic Sans MS', cursive;
}
</style>