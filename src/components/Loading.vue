<template>
  <div class="loading-overlay">
    <svg class="loading-icon" viewBox="-10 -10 50 50">
      <path
        d="M 30 15 L 28 17 M 25.61 25.61 A 15 15, 0, 0, 1, 15 30 A 15 15, 0, 1, 1, 27.99 7.5 L 15 15"
        style="stroke-width: 4px; fill: none"
        class="loading-path"
      />
    </svg>
  </div>
</template>
  
  <script setup>
</script>
  
<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-icon {
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

.loading-path {
  stroke: $primary-color;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
  