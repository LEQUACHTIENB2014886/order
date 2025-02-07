<template>
  <div class="loading-container" v-show="show">
    <div class="loading-bar"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const show = ref(false);
let isLoading = false; // Tránh restart loading nếu chưa hoàn thành

const startLoading = () => {
  if (isLoading) return; // Nếu loading đang chạy, không restart
  isLoading = true;
  show.value = true;

  setTimeout(() => {
    stopLoading();
  }, 1500); // Đảm bảo chạy ít nhất 1.5s để không quá nhanh
};

const stopLoading = () => {
  setTimeout(() => {
    show.value = false;
    isLoading = false;
  }, 500);
};

router.beforeEach((to, from, next) => {
  startLoading();
  setTimeout(() => {
    next();
  }, 300);
});

router.afterEach(() => {
  stopLoading();
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  overflow: hidden;
  background: transparent;
  z-index: 9999;
}

.loading-bar {
  width: 100%;
  height: 100%;
  background: $color-1;
  transform: translateX(-100%);
  animation: slideRight 1.5s ease-out forwards;
}

@keyframes slideRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
