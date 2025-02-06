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
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Loading from '@/components/Loading.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const loading = ref(true);
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});

watch(() => router.currentRoute.value, () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>
