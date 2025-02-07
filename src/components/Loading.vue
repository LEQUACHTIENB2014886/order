<template>
  <div v-show="show" class="loading-bar"></div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);

const startLoading = () => {
  show.value = true;
};

const stopLoading = () => {
  setTimeout(() => {
    show.value = false;
  }, 800);
};

defineExpose({ startLoading, stopLoading });
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: $color-1;
  z-index: 9999;
  animation: loading 0.8s linear forwards;
}

@keyframes loading {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
