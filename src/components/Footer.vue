<template>
  <footer>
    <el-row>
      <el-col :span="12" class="left">
        <div class="logo-container">
          <a>{{ t.title }}</a>
          <a>
            <img src="../assets/logocute.png" alt="Logo" />
          </a>
        </div>
      </el-col>
      <el-col :span="12" class="right">
        <el-row class="right-first">
          <router-link to="/" active-class="active">{{ t.home }}</router-link>
          <router-link to="/overview" active-class="active">{{ t.introduce }}</router-link>
          <router-link to="/menu" active-class="active">{{ t.menu }}</router-link>
          <router-link to="/sales" active-class="active">{{ t.promo }}</router-link>
        </el-row>
        <br />
        <hr />
        <div class="contact-info">
          <p><el-icon><PhoneFilled /></el-icon>+84 345 324 989</p>
          <p><el-icon><Message /></el-icon>lequachtien123</p>
          <p><el-icon><Location /></el-icon> Bình Minh, Vĩnh Long</p>
        </div>
      </el-col>
    </el-row>
    <el-backtop :right="50" :bottom="50" />
  </footer>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const locale = computed(() => store.state.language.locale);

const t = ref({
  title: "Trà sữa",
  home: "Trang chủ",
  introduce: "Giới thiệu",
  menu: "Thực đơn",
  promo: "Khuyến mãi",
});

const updateTranslations = async () => {
  t.value = {
    title: await store.dispatch("language/translate", "Trà sữa"),
    home: await store.dispatch("language/translate", "Home"),
    introduce: await store.dispatch("language/translate", "Introduce"),
    menu: await store.dispatch("language/translate", "Menu"),
    promo: await store.dispatch("language/translate", "Promotions"),
  };
};

// Chạy dịch khi ngôn ngữ thay đổi
watch(locale, async () => {
  await updateTranslations();
}, { immediate: true });

onMounted(updateTranslations);
</script>
<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  position: relative;
  width: 100%;
  height: 120px;
  background-color: #fff;
  margin-top: auto;
}

.left,
.right {
  padding: 15px 30px;
}

.left {
  background: $color-1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: color.mix(black, $color-1, 10%);
  }
}

.right {
  background: $background-color-1;
  align-items: center;
}

.right-first {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  color: $color-3;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

img {
  width: 120px;
}

.logo-container a {
  font-size: 58px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 215, 0, 0.8),
    0 0 20px rgba(255, 140, 0, 0.8);
  animation: glow 1.5s infinite alternate;
}

.contact-info {
  margin-top: 20px;
  color: $color-3;
  font-weight: normal;
}

.contact-info p {
  display: flex;
  align-items: center;
}

.right-first a {
  color: $color-3;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.right-first a:hover {
  transform: scale(1.04);
  color: $color-1;
}

hr {
  border: none;
  width: 500px;
  height: 2px;
  background: linear-gradient(to right, $color-3, rgba(0, 0, 0, 0));
  margin-left: 0;
}

.el-icon {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .left,
  .right {
    padding: 15px;
  }

  .logo-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-container a {
    font-size: 40px;
  }

  img {
    width: 100px;
  }

  .right-first {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .contact-info {
    margin-top: 10px;
  }

  hr {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .logo-container a {
    font-size: 30px;
  }

  img {
    width: 80px;
  }

  .right-first {
    gap: 5px;
  }

  hr {
    width: 100%;
  }
}

.el-backtop {
  --el-backtop-text-color: #{$color-1};
}
</style>
