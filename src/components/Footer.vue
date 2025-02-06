<template>
  <footer>
    <el-row>
      <el-col :span="10" class="left">
        <div class="logo-container">
          <a>{{ $t('title') }}</a>
          <a>
            <img src="../assets/logocute.png" alt="Logo" />
          </a>
        </div>
      </el-col>
      <el-col :span="14" class="right">
        <el-row class="right-first">
          <router-link to="/" active-class="active">{{ $t('home') }}</router-link> |
          <router-link to="/overview" active-class="active">{{ $t('about') }}</router-link> |
          <router-link to="/menu" active-class="active">{{ $t('menu') }}</router-link> |
          <router-link to="/sales" active-class="active">{{ $t('promo') }}</router-link>
        </el-row>
        <br />
        <hr />
        <div class="contact-info">
          <p>
            <el-icon><PhoneFilled /></el-icon> 0345 324 989
          </p>
          <p>
            <el-icon><Message /></el-icon> lequachtien123@email.com
          </p>
          <p>
            <el-icon><Location /></el-icon> Bình Minh, Vĩnh Long
          </p>
        </div>
      </el-col>
    </el-row>
    <el-backtop :right="50" :bottom="50" />
  </footer>
</template>

<script setup>
</script>



<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.left {
  background: $color-1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
}

.right {
  background:$background-color-1;
  align-items: center;
  padding: 30px;
}

.right-first {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: $color-3;
}

.el-backtop {
  --el-backtop-text-color: #{$color-1};
  transition: transform 0.3s ease;
  padding: 8px;
}

.el-backtop:hover {
  transform: scale(1.1);
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

@keyframes glow {
  0% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
      0 0 10px rgba(255, 215, 0, 0.6), 0 0 15px rgba(255, 140, 0, 0.6);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 1),
      0 0 20px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 140, 0, 0.9);
  }
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


.el-icon{
  margin-right: 5px;
}
</style>
