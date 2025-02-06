<template>
  <el-row class="custom-header">
    <el-col :span="4" class="logo-container">
      <a href="#"><img src="../assets/logocute.png" alt="Logo" /></a>
    </el-col>

    <el-col :span="12" class="menu-container">
      <router-link to="/" active-class="active">{{ $t("home") }}</router-link>
      <router-link to="/overview" active-class="active">{{ $t("about") }}</router-link>
      <router-link to="/menu" active-class="active">{{ $t("menu") }}</router-link>
      <router-link to="/sales" active-class="active">{{ $t("promo") }}</router-link>
      <router-link to="/contact" active-class="active">{{ $t("contact") }}</router-link>
      <el-dropdown class="language" trigger="click" placement="bottom-end">
        <template #dropdown>
          <el-menu>
            <el-menu-item index="1-1" @click="changeLang('vi')">
              <img src="../assets/Flag/VietNam_Flag.png" alt="Vietnamese" class="icon" />
              Tiếng Việt
            </el-menu-item>
            <el-menu-item index="1-2" @click="changeLang('en')">
              <img src="../assets/Flag/United_KingDom_Flag.png" alt="English" class="icon" />
              English
            </el-menu-item>
            <el-menu-item index="1-3" @click="changeLang('zh-cn')">
              <img src="../assets/Flag/China_Flag.png" alt="Chinese Simplified" class="icon" />
              简体中文
            </el-menu-item>
            <el-menu-item index="1-4" @click="changeLang('zh-tw')">
              <img src="../assets/Flag/Taiwan_Flag.png" alt="Chinese Traditional" class="icon" />
              繁體中文
            </el-menu-item>
          </el-menu>
        </template>
        <el-button class="icon-btn">
          <img src="../assets/language.svg" alt="Language" class="icon" />
        </el-button>
      </el-dropdown>
    </el-col>

    <el-col :span="4" class="icon-container">
      <router-link to="/account" active-class="active">
        <el-icon :size="28" class="orange-icon"><UserFilled /></el-icon>
      </router-link>
      <router-link to="/payments" active-class="active">
        <el-badge :value="3" class="item">
          <el-icon :size="28" class="orange-icon"><ShoppingCart /></el-icon>
        </el-badge>
      </router-link>
    </el-col>

    <el-col :span="4" class="menu-toggle" @click="toggleMenu">
      <el-icon :size="28"><Menu /></el-icon>
    </el-col>

    <transition name="slide">
      <div v-if="mobileMenu" class="mobile-menu">
        <router-link to="/" active-class="active" @click="toggleMenu">{{ $t("home") }}</router-link>
        <router-link to="/overview" active-class="active" @click="toggleMenu">{{ $t("about") }}</router-link>
        <router-link to="/menu" active-class="active" @click="toggleMenu">{{ $t("menu") }}</router-link>
        <router-link to="/sales" active-class="active" @click="toggleMenu">{{ $t("promo") }}</router-link>
        <el-dropdown class="language" trigger="click" placement="bottom-end">
          <template #dropdown>
            <el-menu>
              <el-menu-item index="1-1" @click="changeLang('vi')">
                <img src="../assets/Flag/VietNam_Flag.png" alt="Vietnamese" class="icon" />
                Tiếng Việt
              </el-menu-item>
              <el-menu-item index="1-2" @click="changeLang('en')">
                <img src="../assets/Flag/United_KingDom_Flag.png" alt="English" class="icon" />
                English
              </el-menu-item>
              <el-menu-item index="1-3" @click="changeLang('zh-cn')">
                <img src="../assets/Flag/China_Flag.png" alt="Chinese Simplified" class="icon" />
                简体中文
              </el-menu-item>
              <el-menu-item index="1-4" @click="changeLang('zh-tw')">
                <img src="../assets/Flag/Taiwan_Flag.png" alt="Chinese Traditional" class="icon" />
                繁體中文
              </el-menu-item>
            </el-menu>
          </template>
          <el-button class="icon-btn">
            <img src="../assets/language.svg" alt="Language" class="icon" />
          </el-button>
        </el-dropdown>
      </div>
    </transition>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const mobileMenu = ref(false);

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

const changeLang = (lang) => {
  store.dispatch("language/changeLanguage", lang);
};
</script>

<style lang="scss" scoped>@use "@/assets/styles/variables" as *;

.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 26px;
  height: 80px;
  padding: 0 20px;
  background-color: $background-color-1;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
  
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
  font-size: 16px;
  font-weight: bold;
  color: $color-3;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.menu-container a:hover,
.menu-container a.active {
  color: $color-1;
  font-weight: bold;
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

.icon-container {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  margin-right: 30px;
}

.icon-container a {
  position: relative;
  display: inline-block;
  color: $color-3;
}

.icon-container .active {
  color: $color-1;
}

.icon-container .active::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: $color-1;
}

.icon {
  width: 26px;
  height: 20px;
}

.orange-icon {
  color: $color-1;
}

.language .el-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  height: 100%;
}

.language .el-button .icon {
  width: 22px;
  height: 22px;
  display: inline-block;
  vertical-align: middle;
}

.language .el-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.el-menu-item img.icon {
  margin-right: 8px;
  vertical-align: middle;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: $background-color-1;
  padding: 20px;
}

.mobile-menu a {
  font-size: 16px;
  font-weight: bold;
  color: $color-3 !important;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.mobile-menu a:hover,
.mobile-menu a.active {
  color: $color-1 !important;
  font-weight: bold;
}

@media (max-width: 768px) {
  .menu-container,
  .icon-container {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
  .mobile-menu {
    display: flex;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
.item{
  margin-right:7px;
}
</style>
