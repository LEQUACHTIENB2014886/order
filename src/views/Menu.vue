<template>
  <div class="menu">
    <div class="menu-grid">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
        <div class="image-wrapper">
  
          <img :src="`../src/assets/img-drinks/${item.Images}`" alt="${item.Images}" />

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
    <div class="alert-container">
      <transition-group name="alert-move">
        <el-alert
          v-for="alert in alerts"
          :key="alert.id"
          :title="$t('AddToCartSuccess')"
          type="success"
          show-icon
          @close="removeAlert(alert.id)"
          class="alert"
        />
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const menuItems = ref([]);

const alerts = ref([]);
let alertId = 0;
onMounted(() => {
  axios
    .get("http://localhost:8081/api/v1/System/Getbases")
    .then((response) => {
      if (response.data.code === 200) {
        console.log("Dữ liệu API nhận được:", response.data.data);

        response.data.data.forEach((item) => {
          // console.log(item.Images);  
        });

        menuItems.value = response.data.data;
      } else {
        console.error("API Error:", response.data.message);
      }
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
});





const addToCart = (item) => {
  const id = alertId++;
  alerts.value.push({ id });
  setTimeout(() => {
    removeAlert(id);
  }, 2000);
};

const removeAlert = (id) => {
  alerts.value = alerts.value.filter((alert) => alert.id !== id);
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
  transform: scale(1);

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
}

.image-wrapper {
  width: 100%;
  min-height: 150px; /* Đảm bảo có chiều cao tối thiểu */
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