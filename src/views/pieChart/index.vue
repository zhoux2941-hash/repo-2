<script setup lang="ts">
import { Histogram } from '@element-plus/icons-vue'
// import axios from 'axios'
import { ECharts } from 'echarts'
import { onMounted, ref } from 'vue'
import type { ChartProps } from '../../types/chart'

// 监听到切换页面自动刷新
window.onresize = function () {
  location.reload()
}

const dataScreen: ChartProps = {
  chart1: null,
  chart2: null
}
// 获取子组件的ref
interface ChartExpose {
  initChart: (params: any) => ECharts
}
const Chart1Ref = ref<ChartExpose>()
// 初始化 charts
const initCharts = (): void => {
  dataScreen.chart1 = Chart1Ref.value?.initChart(lineDataOne.value) as ECharts
}

// 初始化 charts参数
const lineDataOne = ref()
onMounted(async () => {
  // const lineDataRes = await axios.get('src/assets/json/chartsData.json')

  initCharts()
})
</script>

<template>
  <div class="pie_chart_page">
    <el-scrollbar>
      <el-row :gutter="24">
        <el-col :span="8" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>基础饼图_荧光色展示</span>
              </template>
            </el-page-header>
            <div class="chart"></div>
          </el-card>
        </el-col>
        <el-col :span="8" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>南丁格尔玫瑰图</span>
              </template>
            </el-page-header>
            <div class="chart"></div>
          </el-card>
        </el-col>
        <el-col :span="8" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>圆环图</span>
              </template>
            </el-page-header>
            <div class="chart"></div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>旭日图</span>
              </template>
            </el-page-header>
            <div class="chart">
              <Chart2 ref="Chart2Ref" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.pie_chart_page {
  padding: 20px;
  width: 100%;
  background-color: #000;
  background-image: radial-gradient(circle, #2969e0 0%, #469ae9 20%, #0c3cd6 70%, #187ddb 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.chart {
  height: 40vh;
}
</style>
