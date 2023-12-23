<script setup lang="ts"></script>

<template>
  <div class="home_page">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <div class="text text1">CSS字体样式示例1</div>
          <div class="text text2">CSS字体样式示例2</div>
          <div class="text text3">CSS字体样式示例3</div>
          <div class="text text4">CSS字体样式示例4</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.home_page {
  padding: 20px;
  width: 100%;
  background-color: #000;
  background-image: radial-gradient(circle, #2969e0 0%, #469ae9 20%, #0c3cd6 70%, #187ddb 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.text {
  box-sizing: border-box;
  // padding: 10px;
  // font: bold 40px/100% '微软雅黑', 'Lucida Grande', 'Lucida Sans', Helvetica, Arial, Sans;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 10px;
}
.text1 {
  color: #001aff;
  text-shadow: 1px 1px rgba(0, 162, 255, 0.8), 2px 2px rgba(8, 152, 248, 0.8), 3px 3px rgba(10, 255, 235, 0.8), 4px 4px rgba(129, 129, 129, 0.8), 5px 5px rgba(255, 255, 255, 0.8), 6px 6px rgba(0, 81, 255, 0.8);
}
.text2 {
  color: #f3ad15;
  text-shadow: -1px -1px rgba(253, 126, 7, 0.8), -2px -2px rgba(57, 149, 235, 0.8), -3px -3px rgba(4, 128, 245, 0.8), -4px -4px rgba(14, 125, 230, 0.8), -5px -5px rgba(15, 134, 245, 0.8), -6px -6px rgba(230, 230, 230, 0.8);
}
.text3 {
  color: #c300ff;
  text-shadow: 5px 5px 0 #b6a2be, 7px 7px 0 #e9b6b6;
}
.text4 {
  color: rgba(255, 179, 140, 0.5);
  text-shadow: 3px 3px 0 rgba(180, 255, 0, 0.5);
}
</style>
