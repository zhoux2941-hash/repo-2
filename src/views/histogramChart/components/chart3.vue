<template>
  <!-- 子弹图 -->
  <div id="chart3" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const initChart = (data: any): echarts.ECharts => {
  const charEle = document.getElementById('chart3') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      left: 'right',
      textStyle: {
        color: '#000' // 设置图例字体颜色
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // x轴文字颜色
      axisLabel: {
        color: '#000',
        interval: 0,
        rotate: 45
      },
      // x轴坐标
      data: data.title
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed', // 将type设置为'dashed'表示虚线
          color: '#1e324e'
        }
      },
      // y轴文字颜色
      axisLabel: {
        color: '#000'
      }
    },
    series: [
      {
        type: 'bar',
        barWidth: 23,
        barGap: '-82%',
        data: data.one,
        itemStyle: {
          // 柱子形状颜色
          borderRadius: [10, 10, 10, 10],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#00a7ff' // 起始颜色
              },
              {
                offset: 1,
                color: '#0042ff' // 结束颜色
              }
            ]
          }
        },
        zlevel: -1
      },
      {
        type: 'bar',
        barWidth: 15,
        xAxisIndex: 0,
        data: data.two,
        itemStyle: {
          // 柱子形状颜色
          borderRadius: [10, 10, 10, 10],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#ffbb00' // 起始颜色
              },
              {
                offset: 1,
                color: '#ff6600' // 结束颜色
              }
            ]
          }
        },
        zlevel: 0
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
