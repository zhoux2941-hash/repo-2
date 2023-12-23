<script setup lang="ts">
import { Histogram } from '@element-plus/icons-vue'
import axios from 'axios'
import { ECharts } from 'echarts'
import { onMounted, ref } from 'vue'
import type { ChartProps, hisDataFourType, hisDataOneType, hisDataThreeType, hisDataTwoType } from '../../types/chart'
import Chart1 from './components/chart1.vue'
import Chart2 from './components/chart2.vue'
import Chart3 from './components/chart3.vue'
import Chart4 from './components/chart4.vue'

// 监听到切换页面自动刷新
window.onresize = function () {
  location.reload()
}

const dataScreen: ChartProps = {
  chart1: null,
  chart2: null,
  chart3: null,
  chart4: null
}
// 获取子组件的ref
interface ChartExpose {
  initChart: (params: any) => ECharts
}
const Chart1Ref = ref<ChartExpose>()
const Chart2Ref = ref<ChartExpose>()
const Chart3Ref = ref<ChartExpose>()
const Chart4Ref = ref<ChartExpose>()
// 初始化 charts
const initCharts = (): void => {
  dataScreen.chart1 = Chart1Ref.value?.initChart(hisDataOne.value) as ECharts
  dataScreen.chart2 = Chart2Ref.value?.initChart(hisDataTwo.value) as ECharts
  dataScreen.chart3 = Chart3Ref.value?.initChart(hisDataThree.value) as ECharts
  dataScreen.chart4 = Chart4Ref.value?.initChart(hisDataFour.value) as ECharts
}

// 初始化 charts参数
const hisDataOne = ref<hisDataOneType>()
const hisDataTwo = ref<hisDataTwoType>()
const hisDataThree = ref<hisDataThreeType>()
const hisDataFour = ref<hisDataFourType>()
onMounted(async () => {
  const hisDataRes = await axios.get('src/assets/json/hisData.json')
  console.log(hisDataRes)
  hisDataOne.value = hisDataRes.data.hisDataOne
  hisDataTwo.value = hisDataRes.data.hisDataTwo
  hisDataThree.value = hisDataRes.data.hisDataThree
  hisDataFour.value = hisDataRes.data.hisDataFour.data

  initCharts()
})

// 下钻点击数据
const eventName = ref('示例name')
const eventId = ref('ID')
const eventData = (e: any) => {
  eventName.value = e.name
  eventId.value = e.id
}
</script>

<template>
  <div class="histogram_chart_page">
    <el-scrollbar>
      <el-row :gutter="24">
        <el-col :span="24" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>带下钻堆叠柱状图</span>
              </template>
            </el-page-header>
            <div class="box">
              下钻数据展示===>
              <span style="color: red">{{ eventName }}</span>
              <span>：</span>
              <span style="color: red">{{ eventId }}</span>
            </div>
            <div class="chart">
              <Chart1 ref="Chart1Ref" @event-data="eventData" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>基础折柱图+自定义图标</span>
              </template>
            </el-page-header>
            <div class="chart">
              <Chart2 ref="Chart2Ref" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>子弹图</span>
              </template>
            </el-page-header>
            <div class="chart">
              <Chart3 ref="Chart3Ref" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" style="margin-bottom: 20px">
          <el-card shadow="always">
            <el-page-header :icon="Histogram">
              <template #title>
                <span>滚动条形图</span>
              </template>
            </el-page-header>
            <div class="chart">
              <Chart4 ref="Chart4Ref" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.histogram_chart_page {
  padding: 20px;
  width: 100%;
  background-color: #000;
  background-image: radial-gradient(circle, #2969e0 0%, #469ae9 20%, #0c3cd6 70%, #187ddb 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .box {
    position: absolute;
    top: 2.9vh;
    left: 13vw;
  }
}
.chart {
  height: 50vh;
}
</style>
