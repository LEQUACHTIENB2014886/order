<template>
  <div class="menu">
    <div class="menu-grid">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
        <div class="image-wrapper">
          <img :src="item.url || defaultImage" alt="Menu Item" />
        </div>
        <div class="item-info">
          <h3>{{ $t(item.name) }}</h3>
          <p>{{ item.price }} ₫</p>
          <div class="item-actions">
            <button class="btn add-to-cart" @click="addToCart(item)">
              {{ $t("add") }}
            </button>
            <button class="btn view-details">{{ $t("view") }}</button>
          </div>
        </div>
      </div>
    </div>

    <el-alert
      v-if="alertVisible"
      :title="$t('AddToCartSuccess')"
      type="success"
      show-icon
      @close="alertVisible = false"
      class="alert"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const menuItems = ref([]);
const defaultImage = "/images/default-image.jpg";
const alertVisible = ref(false);

onMounted(() => {
  axios
    .get("http://localhost:8081/api/v1/System/Getbases")
    .then((response) => {
      if (response.data.code === 200) {
        menuItems.value = response.data.data;
      } else {
        console.error("API Error: ", response.data.message);
      }
    })
    .catch((error) => {
      console.error("API Error: ", error);
    });
});

const addToCart = (item) => {
  alertVisible.value = true;
  setTimeout(() => {
    alertVisible.value = false;
  }, 2222);
};
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;

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

  &:hover {
    transform: translateY(-5px);
  }
}

.image-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 83.33%;
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.item-info h3:hover {
  color: color.mix(black, $color-1, 5%);
  transform: scale(1.1);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.item-info p {
  font-size: 1rem;
  color: $color-3;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

.item-actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    margin: 5px 0;
    width: auto;
  }
}

.btn:hover {
  background-color: color.mix(black, $color-1, 10%);
}

.el-alert {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 600px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
}

.el-alert__content {
  flex-grow: 1;
}

.el-alert__close-btn {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
