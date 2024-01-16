<template>
  <!-- 基础饼图_边缘发光效果 -->
  <div id="chart1" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

// 颜色数组
const color: string[] = ['#00ffff', '#409B5C', '#ffe000', '#1c68c5', '#ffa800', '#ff5b00', '#5fdeff', '#ffa801', '#f2d15c', '#ff3120', '#fefefe', '#afa801', '#fe5b10', '#fd3120']

const initChart = (data: any): echarts.ECharts => {
  const charEle = document.getElementById('chart1') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: any = {
    tooltip: {
      trigger: 'item', // 触发类型为坐标轴
      axisPointer: {
        type: 'line' // 指示器类型为线性
      },
      backgroundColor: 'rgba(12, 51, 115,0.8)',
      borderColor: 'rgba(3, 11, 44, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: color,
    series: [
      {
        name: '示例饼图',
        type: 'pie',
        radius: ['0%', '90%'],
        center: ['50%', '50%'],
        emphasis: {
          label: {
            show: false
          }
        },
        itemStyle: {
          borderWidth: 0,
          borderRadius: 2,
          shadowBlur: 10,
          borderColor: '#00ffff',
          shadowColor: '#00ffff'
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
