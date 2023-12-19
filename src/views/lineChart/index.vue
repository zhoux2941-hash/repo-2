<script setup lang="ts">
import { Histogram } from '@element-plus/icons-vue'
import { ECharts } from 'echarts'
import { onMounted, ref } from 'vue'
import type { ChartProps } from '../../types/chart'
import Chart1 from './component/chart1.vue'

// 监听到切换页面自动刷新
window.onresize = function () {
  location.reload()
}

const dataScreen: ChartProps = {
  chart1: null
}
// 获取子组件的ref
interface ChartExpose {
  initChart: (params: any) => ECharts
}
const Chart1Ref = ref<ChartExpose>()
// 初始化 charts参数
const data = ref({})
// 初始化 charts
const initCharts = (): void => {
  dataScreen.chart1 = Chart1Ref.value?.initChart(data.value) as ECharts
}

onMounted(() => {
  initCharts()
})
</script>

<template>
  <div class="line_chart_page">
    <el-scrollbar>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>折线图</span>
              </template>
            </el-page-header>
            <div class="chart1">
              <Chart1 ref="Chart1Ref" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>折线图</span>
              </template>
            </el-page-header>
            <div class="chart1"></div>
          </el-card>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.line_chart_page {
  padding: 20px;
  width: 100%;
  background-color: #000;
  background-image: radial-gradient(circle, #2969e0 0%, #469ae9 20%, #0c3cd6 70%, #187ddb 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.chart1 {
  height: 50vh;
}
</style>
