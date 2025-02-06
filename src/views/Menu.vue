<template>
  <div class="menu">
    <div class="menu-grid">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
        <div class="image-wrapper">
          <img :src="item.url || defaultImage" alt="Menu Item" />
        </div>
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} VND</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const menuItems = ref([]);
    const defaultImage = "/images/default-image.jpg";

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

    return { menuItems, defaultImage };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.menu {
  margin: 20px 200px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.menu-item {
  background-color: #f9f9f9;
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
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: $color-1;
}

.item-info p {
  font-size: 1rem;
  color: $color-3;
}
</style>
