<template>
  <el-row class="custom-header">
    <el-col :span="4">
      <div class="logo-container">
        <img src="../assets/logocute.png" alt="Logo" />
      </div>
    </el-col>
    <el-col :span="12" class="menu-container">
      <router-link to="/" active-class="active">Trang chủ</router-link>
      <router-link to="/overview" active-class="active">Giới thiệu</router-link>
      <router-link to="/menu" active-class="active">Menu</router-link>
    </el-col>
    <el-col :span="4" class="icon-container">
      <router-link to="/account">
        <el-icon :size="28" class="orange-icon"><UserFilled /></el-icon>
      </router-link>
      <router-link to="/payments">
        <el-badge :value="3" class="item">
          <el-icon :size="28" class="orange-icon"><ShoppingCart /></el-icon>
        </el-badge>
      </router-link>
    </el-col>
  </el-row>
</template>
  <style scoped>
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 26px;
  height: 80px;
  border-bottom: 2px solid #ccc;
  background-color: #f9f9f9;
  padding: 0 20px;
  box-sizing: border-box;
}

.menu-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.logo-container img {
  width: 58px;
  height: auto;
}

.menu-container a {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.menu-container a:hover,
.menu-container a.active {
  color: #ff6600;
  font-weight: bold;
}

.menu-container a.active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px; 
  background-color: #ff6600; 
}

.orange-icon {
  color: #ff6600;
}

.icon-container a::after {
  content: none;
}
</style>
