<template>
    <div class="loading-overlay" v-if="loading"></div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const loading = ref(true)
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.7);
    z-index: 10;
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  