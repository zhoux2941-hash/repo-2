<template>
  <!-- 基础饼图_旭日图 -->
  <div id="chart5" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const initChart = (data: any): echarts.ECharts => {
  let num = 0
  for (let i = 0; i < data.value.length; i++) {
    num += data.value[i]
  }

  const charEle = document.getElementById('chart5') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: any = {
    // 1.鼠标移入提示
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(12, 51, 115,0.8)',
      borderColor: 'rgba(3, 11, 44, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true
    },
    // 2.图例组件
    legend: {
      orient: 'vertical', // 设置图例竖排显示
      top: '0%',
      right: '0%',
      itemGap: 20,
      // itemWidth: 10,
      // itemHeight: 10,
      icon: 'circle',
      selectedMode: false,
      // 文本样式
      textStyle: {
        color: '#000',
        fontSize: 14
      }
    },
    // 3.图表内容
    series: [
      getItem({
        name: data.name[0],
        radius: ['10%', '18%'],
        startAngle: -10,
        value: data.value[0],
        color1: '#ffd87b',
        color2: '#8d815e'
      }),
      getItem({
        name: data.name[1],
        radius: ['21%', '29%'],
        startAngle: -10,
        value: data.value[1],
        color1: '#70bb89',
        color2: '#77c58e'
      }),
      getItem({
        name: data.name[2],
        radius: ['32%', '40%'],
        startAngle: -10,
        value: data.value[2],
        color1: '#00cff4',
        color2: '#00d0f5'
      }),
      getItem({
        name: data.name[3],
        radius: ['43%', '51%'],
        startAngle: -10,
        value: data.value[3],
        color1: '#f47d47',
        color2: '#fa8048'
      }),
      getItem({
        name: data.name[4],
        radius: ['54%', '62%'],
        startAngle: -10,
        value: data.value[4],
        color1: '#00b57c',
        color2: '#00b47b'
      }),
      getItem({
        name: data.name[5],
        radius: ['65%', '73%'],
        startAngle: 50,
        value: data.value[5],
        color1: '#f72f48',
        color2: '#f44179'
      }),
      getItem({
        name: data.name[6],
        radius: ['76%', '84%'],
        startAngle: 260,
        value: data.value[6],
        color1: '#96c6e2',
        color2: '#9bcbe7'
      }),
      getItem({
        name: data.name[7],
        radius: ['87%', '95%'],
        startAngle: 150,
        value: data.value[7],
        color1: '#5966c5',
        color2: '#7e87fb'
      })
    ]
  }

  /* { name:标题 , radius:[内圆直径,外圆直径] ,startAngle:起始圆心角  value:数据 ,  color1: 颜色, color2: 颜色 } */
  function getItem(data: any) {
    return {
      name: '靶状图示例',
      type: 'pie',
      center: ['40%', '50%'],
      radius: data.radius,
      // startAngle: data.startAngle,
      // avoidLabelOverlap: false,
      labelLine: {
        show: false
      },
      label: {
        show: false
      },
      data: [
        {
          value: data.value,
          name: data.name,
          itemStyle: {
            // 渐变颜色
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: data.color1
              },
              {
                offset: 1,
                color: data.color2
              }
            ])
          }
        },
        {
          value: 100 - (data.value / num) * 100,
          name: data.name, //设置name防止legend错位
          itemStyle: {
            // 颜色设置为none,则该片段不渲染
            color: 'none'
          },
          label: { show: false }
        }
      ]
    }
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
