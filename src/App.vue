<script setup lang="ts"></script>

<template>
  <div class="home_page">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <h2 class="home_title">可视化图表</h2>
          <el-menu>
            <router-link to="/"> <el-menu-item>导航台 </el-menu-item></router-link>
            <el-sub-menu index="1">
              <template #title>图表</template>
              <router-link to="/lineChart"> <el-menu-item>折线图 </el-menu-item></router-link>
              <router-link to="/histogramChart"> <el-menu-item>柱状图 </el-menu-item></router-link>
              <router-link to="/pieChart"> <el-menu-item>饼图 </el-menu-item></router-link>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>地图展示</template>
              <router-link to="/mapChart"> <el-menu-item>echarts地图展示 </el-menu-item></router-link>
              <router-link to="/worldMap"> <el-menu-item>世界地图 </el-menu-item></router-link>
            </el-sub-menu>
            <router-link to="/LargeScreenStyle"> <el-menu-item>部分样式示例 </el-menu-item></router-link>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.home_page {
  height: 100vh;
  .home_title {
    text-align: center;
    padding: 14.5px;
  }
}

.el-container {
  height: 100%;
}
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.el-menu {
  border-right: none;
  background: var(--el-color-primary-light-8);
}
</style>
