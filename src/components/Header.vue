<template>
  <el-row class="custom-header">
    <el-col :span="4">
      <div class="logo-container">
        <a href="#"><img src="../assets/logocute.png" alt="Logo"/></a>
      </div>
    </el-col>
    <el-col :span="12" class="menu-container">
      <router-link to="/" active-class="active">Trang chủ</router-link>
      <router-link to="/overview" active-class="active">Giới thiệu</router-link>
      <router-link to="/menu" active-class="active">Menu</router-link>
      <el-dropdown
        class="language"
        trigger="click"
        placement="bottom-end"
        :dropdown-append-to-body="true"
      >
        <template #dropdown>
          <el-menu>
            <el-menu-item index="1-1">
              <a>
                <img
                  src="../assets/Flag/VietNam_Flag.png"
                  alt="Vietnamese"
                  class="icon"
                />
                Vietnamese
              </a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a>
                <img
                  src="../assets/Flag/China_Flag.png"
                  alt="Chinese"
                  class="icon"
                />
                Chinese
              </a>
            </el-menu-item>
            <el-menu-item index="1-3">
              <a>
                <img
                  src="../assets/Flag/United_KingDom_Flag.png"
                  alt="English"
                  class="icon"
                />
                English
              </a>
            </el-menu-item>
          </el-menu>
        </template>
        <el-button
          class="icon"
          style="background: none; border: none; padding: 0"
        >
          <img src="../assets/language.svg" alt="Language" class="icon" />
        </el-button>
      </el-dropdown>
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
  padding: 0 20px;
  background-color: #f9f9f9;
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
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ff6600;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  margin-right: 30px;
}

.icon {
  width: 26px;
  height: 20px;
}

.orange-icon {
  color: #ff6600;
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

</style>
