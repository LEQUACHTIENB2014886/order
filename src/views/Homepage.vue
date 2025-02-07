<template>
  <div>
    <div class="carousel">
      <el-carousel :interval="5000" arrow="always" height="700px">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <el-image :src="image" alt="Carousel Image" class="carousel-image" fit="cover" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container-content">
      <div class="content1">
        <el-image v-for="(img, index) in imgs" :key="index" :src="img" fit="cover" class="content-image1" />
      </div>
      <h1>Sản phẩm nổi bật</h1>
      <div class="content2">
        <el-image v-for="(img2, index) in imgs2" :key="index" :src="img2" fit="cover" class="content-image2" />
      </div>
    </div>
  </div>
</template>

<script setup>

const images = [
  "/images/image1.png",
  "/images/image2.png",
];

const imgs = [
  "/images/img1.png",

];

const imgs2 = [
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
];
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
}

.container-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ff6600;
}



.content1 {
  padding: 50px 0;
}

.content-image1 {
  flex-wrap: wrap;
  width: calc(100% - 40px);
  max-height: 800px;
}

.content2 {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  max-width: 1500px;
  max-height: 800px;
  gap: 40px;
}

.content-image2 {
  width: calc(33.33% - 40px);
  padding: 20px 0;
}
</style>
