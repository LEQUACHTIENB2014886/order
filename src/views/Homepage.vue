<template>
  <div class="layout">
    <!-- Carousel -->
    <el-row class="carousel">
      <el-col :span="24">
        <el-carousel :interval="5000" arrow="always" height="700px">
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <el-image :src="image" alt="Carousel Image" class="carousel-image" fit="cover" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <!-- Nội dung chính -->
    <el-row class="container-content" justify="center">
      <el-col :span="20">
        <!-- Hình ảnh lớn -->
        <el-row justify="center" class="content1">
          <el-col v-for="(img, index) in imgs" :key="index" :span="24">
            <el-image :src="img" fit="cover" class="content-image1" />
          </el-col>
        </el-row>

        <!-- Tiêu đề -->
        <h1 class="title">Sản phẩm nổi bật</h1>

        <!-- Danh sách sản phẩm -->
        <el-row class="content2" :gutter="10">
          <el-col v-for="(img2, index) in imgs2" :key="index" :xs="11" :sm="7" :md="5" :lg="5">
            <el-image :src="img2" fit="cover" class="content-image2" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- Footer -->

  </div>
</template>

<script setup>
const images = ["/images/image1.png", "/images/image2.png"];
const imgs = ["/images/img1.png"];
const imgs2 = [
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img4.png",
  "/images/img3.png",
];
</script>

<style scoped>
/* Bố cục tổng thể */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Định dạng carousel */
.carousel-image {
  width: 100%;
  height: 100%;
}

/* Nội dung chính */
.container-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff6600;
  text-align: center;
}

.content1 {
  padding: 50px 0;
}

.content-image1 {
  width: 100%;
  max-height: 800px;
}

/* Danh sách sản phẩm */
.content2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  padding: 20px 0;
  gap: 20px;
}

.content-image2 {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
}

/* Tiêu đề sản phẩm nổi bật */
.title {
  margin-top: 20px;
  font-size: 24px;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: auto;
}
</style>
