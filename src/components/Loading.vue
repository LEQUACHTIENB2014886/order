<template>
  <div class="loading-overlay">
    <svg class="loading-icon" viewBox="0 0 50 50">
      <circle class="loading-circle" cx="25" cy="25" r="20"></circle>
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
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-icon {
  width: 60px;
  height: 60px;
  animation: spin 1.5s linear infinite;
}

.loading-circle {
  fill: none;
  stroke: $color-1;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 126; 
  stroke-dashoffset: 0;
  animation: draw 1.5s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes draw {
  0% {
    stroke-dashoffset: 126;
  }
  50% {
    stroke-dashoffset: 63;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
