<template>
  <el-row class="custom-header">
    <el-col :span="2" class="logo-container">
      <a href="#"><img src="../assets/logocute.png" alt="Logo" /></a>
    </el-col>
    <el-col :span="2"></el-col>

    <el-col :span="16" class="menu-container">
      <router-link to="/" active-class="active">{{
        translations.home
      }}</router-link>
      <router-link to="/overview" active-class="active">{{
        translations.about
      }}</router-link>
      <router-link to="/menu" active-class="active">{{
        translations.menu
      }}</router-link>
      <router-link to="/sales" active-class="active">{{
        translations.promo
      }}</router-link>
      <router-link to="/contact" active-class="active">{{
        translations.contact
      }}</router-link>
      <el-dropdown class="language" trigger="click" placement="bottom-end">
  <template #dropdown>
    <el-menu>
      <el-menu-item index="1-1" @click="changeLang('vi')">
        <img src="@/assets/Flag/VietNam_Flag.png" class="flag" alt="VN" /> Tiếng Việt
      </el-menu-item>
      <el-menu-item index="1-2" @click="changeLang('en')">
        <img src="@/assets/Flag/United_KingDom_Flag.png" class="flag" alt="EN" /> English
      </el-menu-item>
      <el-menu-item index="1-3" @click="changeLang('zh-cn')">
        <img src="@/assets/Flag/China_Flag.png" class="flag" alt="CN" /> 简体中文
      </el-menu-item>
      <el-menu-item index="1-4" @click="changeLang('zh-tw')">
        <img src="@/assets/Flag/Taiwan_Flag.png" class="flag" alt="TW" /> 繁體中文
      </el-menu-item>
    </el-menu>
  </template>
  <el-button class="icon-btn">
    <span class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <text
          x="2"
          y="11"
          font-size="13"
          font-weight="900"
          font-family="Arial"
        >
          文
        </text>
        <text
          x="11"
          y="21"
          font-size="15"
          font-weight="900"
          font-family="Arial"
        >
          A
        </text>
      </svg>
    </span>
  </el-button>
</el-dropdown>

    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3" class="menu-container">
      <router-link to="/account" active-class="active">
        <el-icon :size="34" class="orange-icon"><UserFilled /></el-icon>
      </router-link>
      <router-link to="/payments" active-class="active">
        <el-badge :value="`99+`" class="item">
          <el-icon :size="28" class="orange-icon"><ShoppingCart /></el-icon>
        </el-badge>
      </router-link>
    </el-col>
    
  </el-row>

  <Loading v-show="loading" />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import Loading from "@/components/Loading.vue";

const store = useStore();
const translations = ref({
  home: "Trang chủ",
  about: "Giới thiệu",
  menu: "Thực đơn",
  promo: "Khuyến mãi",
  contact: "Liên hệ",
});
const loading = ref(false);

const changeLang = async (lang) => {
  loading.value = true; 
  localStorage.setItem("locale", lang);
  await store.dispatch("language/changeLanguage", lang);
  await updateTranslations();
  setTimeout(() => {
    loading.value = false; 
  }, 1500);
};

const updateTranslations = async () => {
  const keys = ["Home", "Introduce", "Menu", "Promotion", "Contact"];
  const [home, about, menu, promo, contact] = await Promise.all(
    keys.map((key) => store.dispatch("language/translate", key))
  );
  translations.value = { home, about, menu, promo, contact };
};

onMounted(() => {
  const savedLocale = localStorage.getItem("locale") || "vi";
  store.dispatch("language/changeLanguage", savedLocale);
  updateTranslations();
});

watch(() => store.state.translate?.locale, updateTranslations);
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.custom-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: $background-color-1;
  border-bottom: 2px solid #ccc;
  z-index: 1000;
}

.flag{
  width: 26px;
  margin-right: 5px ;
}
.item{
  padding-right: 5px;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: right;
}

.logo-container img {
  width: 58px;
  height: auto;
}

.menu-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
}

.menu-container a {
  position: relative;
  font-size: 16px;
  font-weight: bold;
  color: $color-3;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.menu-container a:hover,
.menu-container a.active {
  color: $color-1;
  transform: scale(1.1);
}

.menu-container a.active::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: $color-1;
}

.el-menu-item:hover {
  color: $color-1;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: fill 0.3s ease-in-out;
}

.icon-btn svg {
  width: 24px;
  height: 24px;
  fill: black;
}

.icon-btn:hover svg {
  fill: $color-1;
}

.language .el-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
}

.language .el-button .icon {
  width: 22px;
  height: 22px;
}

@media (max-width: 768px) {
  .menu-container {
    display: none;
  }
}

.orange-icon {
  transition: all 0.3s ease-in-out;
  color: $color-1;
}

.orange-icon:hover {
  transform: scale(1.2);
}

.el-menu-item.is-active {
  color: $color-1;
  font-weight: bold;
}
</style>