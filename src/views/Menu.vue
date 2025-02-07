<template>
  <div class="pd"></div>
  <div class="menu">
    <div class="menu-grid">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
        <div class="image-wrapper">
          <img
            :src="`../src/assets/img-drinks/${item.Images}.png`"
            :alt="item.Images"
          />
        </div>
        <div class="item-info">
          <h3>{{ item.translatedName }}</h3>
          <p>{{ item.price }} ₫</p>
          <div class="item-actions">
            <button class="btn add-to-cart" @click="addToCart(item)">
              {{ t.add }}
            </button>
            <button class="btn view-details">{{ t.view }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

const store = useStore();
const menuItems = ref([]);
const t = ref({ add: "Thêm vào giỏ", view: "Xem chi tiết" });

const loadMenu = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8081/api/v1/System/Getbases"
    );
    if (response.data.code === 200) {
      menuItems.value = await Promise.all(
        response.data.data.map(async (item) => {
          const translatedName = await store.dispatch(
            "language/translate",
            item.name
          );
          return { ...item, translatedName };
        })
      );
    }
  } catch (error) {
    console.error("API Error:", error);
  }
};
const addToCart = async (item) => {
  const translatedMessage = await store.dispatch(
    "language/translate",
    `Đã thêm "${item.translatedName}" vào giỏ hàng !`
  );

  ElMessage({
    message: translatedMessage,
    type: "success",
    duration: 2000,
    offset: 80,
    showClose: true,
  });
};

const updateTranslations = async () => {
  t.value.add = await store.dispatch("language/translate", "Add to cart");
  t.value.view = await store.dispatch("language/translate", "View details");
};

watch(
  () => store.state.language.locale,
  async () => {
    await loadMenu();
    await updateTranslations();
  }
);

onMounted(async () => {
  await loadMenu();
  await updateTranslations();
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;
.pd {
  padding-top: 80px;
}
.menu {
  margin: 20px 200px;

  @media (max-width: 1200px) {
    margin: 20px 100px;
  }
  @media (max-width: 768px) {
    margin: 20px 50px;
  }
  @media (max-width: 480px) {
    margin: 20px 10px;
  }
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.menu-item {
  background-color: $background-color-1;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  transform: scale(1);

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
}
.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.item-info {
  margin-top: 10px;
}

.item-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: $color-1;
  text-transform: capitalize;
  margin-bottom: 10px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.item-info h3:hover {
  color: color.mix(black, $color-1, 5%);
  transform: scale(1.1);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.item-info p {
  font-size: 1rem;
  color: $color-3;
}

.item-actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.btn {
  background-color: $color-1;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1;
  margin: 0 5px;
}

.btn:hover {
  background-color: color.mix(black, $color-1, 10%);
}
.background {
  position: relative;
  width: 100%;
  // height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.alert-container {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.alert-move-enter-active,
.alert-move-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.alert-move-enter-from,
.alert-move-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>