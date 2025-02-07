<template>
  <el-container>
    <el-row>
      <el-col>
        <div>
          <el-image src="/src/assets/img-overview/bg-overview-1.png" fit="cover" />
        </div>
      </el-col>

      <el-col class="container-content">
        <el-row :span="16" class="content">
          <el-col :span="8">
            <el-image src="/src/assets/img-overview/bg-overview-2.png" fit="contain" />
          </el-col>
          <el-col :span="8">
            <h2>
              <strong><span style="color: #ff6600;">KHỞI NGUỒN THƯƠNG HIỆU</span></strong>
            </h2>
            <p style="text-align: justify;">
              <span style="font-size: 16px;">Bắt nguồn từ khát vọng chinh phục và mong muốn thổi làn gió mới vào thị
                trường trà sữa. Chúng tôi Ra đời với sứ mệnh cùng trách nhiệm mang đến những thức uống ngọt ngào và tinh
                tế nhất đến với mọi thực khách. Đến tận bây giờ, luôn nhận được sự trân quý, yêu thương từ mọi thực
                khách khắp các tỉnh thành. Đến gần hơn và luôn mang lại những hương vị diệu kì cho người thưởng thức là
                điều mà chúng tôi luôn nỗ lực hoàn thiện mỗi ngày.
              </span>
            </p>
          </el-col>
        </el-row>
      </el-col>

      <el-col class="container-content2">
        <el-row :span="16" class="content">
          <el-col :span="8">
            <h2>
              <strong><span style="color: #ff6600;">SỨ MỆNH MÔI TRƯỜNG</span></strong>
            </h2>
            <p style="text-align: justify;">
              <span style="font-size: 16px;">
                Chúng tôi cam kết đóng vai trò lãnh đạo môi trường trong tất cả các khía cạnh kinh doanh của chúng tôi.
                Chúng tôi thực hiện sứ mệnh này bằng cam kết:
                Hiểu các vấn đề về môi trường và chia sẻ thông tin với cộng sự của chúng tôi;
                Phát triển các giải pháp sáng kiến và linh hoạt để đưa ra thay đổi;
                Phấn đấu mua, bán và sử dụng các sản phẩm thân thiện với môi trường;
                Nhận thấy trách nhiệm về tài chính là cần thiết cho tương lai môi trường của chúng ta;
                Đưa trách nhiệm về môi trường thành giá trị của công ty;
                Đo và theo dõi tiến độ của chúng tôi cho từng dự án;
                Khuyến khích tất cả cộng sự tham gia vào sứ mệnh của chúng tôi;
              </span>
            </p>
          </el-col>
          <el-col :span="8">
            <el-image src="/src/assets/img-overview/bg-overview-2.png" fit="contain" />
          </el-col>
        </el-row>
      </el-col>

      <el-col class="container-content">
        <el-row :span="16" class="content">
          <el-col :span="8">
            <el-image src="/src/assets/img-overview/bg-overview-2.png" fit="contain" />
          </el-col>

          <el-col :span="8">
            <h2>
              <strong><span style="color: #ff6600;">ĐẠO ĐỨC VÀ TUÂN THỦ TRONG KINH DOANH</span></strong>
            </h2>
            <p style="text-align: justify;">
              <span style="font-size: 16px;">
                Chúng tôi tin rằng việc thực hiện kinh doanh có đạo đức và phấn đấu làm đúng việc là vấn đề sống còn cho
                sự thành công của chúng tôi. <br/>
                Đạo đức và Tuân thủ trong Kinh doanh là chương trình hỗ trợ Sứ mệnh của chúng tôi và giúp bảo
                vệ văn hóa cũng như danh tiếng của chúng tôi bằng cách cung cấp các tài nguyên giúp cộng sự đưa ra các
                quyết định có đạo đức khi làm việc.
              </span>
            </p>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </el-container>
</template>

<script setup>
</script>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.container-content {
  display: flex;
  justify-content: center;
  background-color: #fffed8;
  margin: 20px 0;
  padding: 50px 0;
}

.content {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.container-content2 {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 40px;
}
</style>