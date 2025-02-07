<template>
  <div>
    <p>{{ translatedText || originalText }}</p>

    <select v-model="targetLang" @change="translateText">
      <option v-for="(name, code) in languages" :key="code" :value="code">
        {{ name }}
      </option>
    </select>
  </div>
  <div class="pa"></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiKey: "AIzaSyDW4gj98s_w6L1dPiF-xOTbJpbnrS-1KuU", // Thay bằng API Key của bạn
      originalText: "con gà",
      translatedText: "",
      // sourceLang: "",
      targetLang: "en",
      languages: {} // Lưu danh sách ngôn ngữ
    };
  },
  mounted() {
    this.fetchLanguages(); // Lấy danh sách ngôn ngữ khi component được mount
  },
  methods: {
    async fetchLanguages() {
      const url = `https://translation.googleapis.com/language/translate/v2/languages?key=${this.apiKey}&target=vi`;
      
      try {
        const response = await axios.get(url);
        const langs = response.data.data.languages;
        
        // Chuyển danh sách về dạng { code: name }
        this.languages = langs.reduce((acc, lang) => {
          acc[lang.language] = lang.name;
          return acc;
        }, {});
      } catch (error) {
        console.error("Lỗi lấy danh sách ngôn ngữ:", error);
      }
    },
    async translateText() {
      const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
      const data = {
        q: this.originalText,
        source: this.sourceLang,
        target: this.targetLang,
        format: "text"
      };

      try {
        const response = await axios.post(url, data);
        this.translatedText = response.data.data.translations[0].translatedText;
      } catch (error) {
        console.error("Lỗi dịch thuật:", error);
      }
    }
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

.pa{
  height: 600px;
}
</style>
