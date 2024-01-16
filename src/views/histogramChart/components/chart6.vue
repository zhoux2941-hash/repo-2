<template>
  <!-- 下钻折线柱状图 -->
  <div id="chart6" class="Sign_Con_M_charts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const emit = defineEmits(['emitClick'])
const initChart = (data: any): echarts.ECharts => {
  console.log(data)

  const charEle = document.getElementById('chart6') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(33, 59, 148,0.8)',
      borderColor: 'rgba(33, 59, 18, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      top: '18%',
      containLabel: true
    },
    legend: {
      data: ['柱子', '折线'],
      right: 0,
      textStyle: {
        color: '#000'
      }
    },
    xAxis: [
      {
        type: 'category',
        data: data.map((item: any) => {
          return item.title
        }),
        // 设置X轴可点击
        triggerEvent: true,
        // 选中阴影
        axisPointer: {
          type: 'shadow'
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 坐标点
        axisTick: {
          show: false
        },
        // 坐标文字
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#000',
          formatter: function (value: string) {
            if (value.length > 10) {
              return value.substring(0, 10) + '...'
            }
            return value
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        position: 'left',
        // 坐标文字
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#000'
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 坐标轴长线
        splitLine: {
          show: false
        }
      },
      {
        type: 'value',
        position: 'right',
        // 坐标文字
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#000'
        },
        // 坐标轴
        axisLine: {
          show: false
        },
        // 坐标轴长线
        splitLine: {
          show: false
        }
      }
    ],
    dataGroupId: '',
    animationDurationUpdate: 500, // 动画过渡时长
    series: [
      {
        name: '柱子',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 24,
        itemStyle: {
          // 柱子形状颜色
          borderRadius: [3, 3, 0, 0], //（顺时针左上，右上，右下，左下）
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#1cace8' // 起始颜色
              },
              {
                offset: 1,
                color: '#1364db' // 结束颜色
              }
            ]
          }
        },
        data: data.map((item: any) => {
          return item.bar
        })
      },
      {
        name: '折线',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'none',
        itemStyle: { color: '#f2f40c' },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(215, 222, 36,0.8)'
            },
            {
              offset: 1,
              color: 'rgba(215, 222, 36,0.2)'
            }
          ])
        },
        data: data.map((item: any) => {
          return item.line
        })
      }
    ]
  }

  // echarts点击事件
  charEch.on('click', function (event) {
    // console.log(event)
    if (event.value === '下钻示例') {
      emit('emitClick', event.value)
    } else {
      return
    }
  })

  charEch.setOption(option)
  return charEch
}
defineExpose({
  initChart
})
</script>

<style scoped lang="scss">
.Sign_Con_M_charts {
  width: 100%;
  height: 100%;
}
</style>
