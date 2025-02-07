<template>
    <div>
      <p>{{ translatedText || originalText }}</p>
  
      <select v-model="targetLang" @change="translateText">
        <option v-for="(name, code) in languages" :key="code" :value="code">
          {{ name }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    computed: {
      ...mapState("translate", ["originalText", "translatedText", "languages", "targetLang"])
    },
    methods: {
      ...mapActions("translate", ["fetchLanguages", "translateText"])
    },
    mounted() {
      this.fetchLanguages();
    }
  };
  </script>
  
  <style scoped>
  p {
    margin-bottom: 20px;
    font-size: 18px;
  }
  
  select {
    padding: 8px;
    font-size: 16px;
  }
  </style>
  