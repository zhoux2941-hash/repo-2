<script setup lang="ts"></script>

<template>
  <div class="home_page">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">导航台 </el-card>
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
</style>
