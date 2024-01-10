<template>
  <!-- 基础饼图_旭日图 -->
  <div id="chart4" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

let color = ['#00ffff', '#006ced', '#40005C', '#ffe000', '#fedadd']
const initChart = (data: any): echarts.ECharts => {
  const charEle = document.getElementById('chart4') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: any = {
    legend: {
      orient: 'vertical', // 设置图例竖排显示
      right: 0, // 调整图例位置
      textStyle: {
        color: '#000' // 设置图例字体颜色
      }
    },
    series: [
      {
        name: '圆环图',
        type: 'pie',
        clockwise: false,
        radius: ['40%', '90%'],
        center: ['50%', '50%'],
        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000'
          }
        },
        color: color,
        label: {
          show: false,
          position: 'inner'
        },
        data: data
      }
    ]
  }

  charEch.setOption(option)
  return charEch
}
defineExpose({
  initChart
})
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
