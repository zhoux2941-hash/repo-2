<template>
  <!-- 滚动条形图 -->
  <div id="chart4" class="eCharts"></div>
</template>

<script setup lang="ts">
import * as eCharts from 'echarts'

const initChart = (data: any): eCharts.ECharts => {
  const charEle = document.getElementById('chart4') as HTMLElement
  const charEch: eCharts.ECharts = eCharts.init(charEle)
  const option: any = {
    tooltip: {
      show: true,
      trigger: 'item',
      padding: [8, 15],
      backgroundColor: 'rgba(12, 51, 115,0.8)',
      borderColor: 'rgba(3, 11, 44, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      }
    },
    grid: {
      left: '20%',
      right: '15%',
      top: '0%',
      bottom: '0%'
    },
    xAxis: [
      {
        splitLine: {
          show: false
        },
        type: 'value',
        show: false,
        axisLine: {
          //x轴坐标轴，false为隐藏，true为显示
          show: false
        }
      }
    ],
    yAxis: [
      {
        show: true,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        type: 'category',
        axisTick: {
          show: false
        },
        inverse: true,
        axisLabel: {
          show: false
        }
      },
      {
        type: 'category',
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        show: true,
        axisLabel: {
          inside: true,
          // lineHeight: 54,
          margin: -30, //刻度标签与轴线之间的距离
          show: true,
          textStyle: {
            fontSize: 14,
            color: '#000'
          }
        },
        data: data.map((obj: any) => obj.value)
      }
    ],
    series: [
      {
        type: 'bar',
        data: data,
        barWidth: 18, // 柱子宽度
        showBackground: true,
        label: {
          show: true,
          // 坐标位置
          color: '#000',
          fontSize: 16,
          position: 'left',
          formatter: function (params: any) {
            return params.data.name
          }
        },
        itemStyle: {
          borderRadius: [10, 10, 10, 10],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(69, 152, 233, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(69, 152, 233, 1)'
              }
            ]
          }
        }
      },
      {
        // name: '前边的图标',
        type: 'scatter',
        // symbol: icon,
        symbolOffset: ['-20%', 0],
        symbolSize: [20, 20], // 进度条白点
        data: data,
        itemStyle: {
          color: 'rgba(13, 64, 214, 1)'
        }
      }
    ],
    // 滚动条
    dataZoom: [
      {
        type: 'slider',
        show: true,
        yAxisIndex: [0, 1],
        handleSize: 10, //滑动条的 左右2个滑动条的大小
        width: 10, //组件高度
        right: 0, //右边的距离
        borderColor: '#fff', //滚动条边框颜色
        fillerColor: '#898989', //滑块颜色
        backgroundColor: '#fff', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        zLevel: -10,
        startValue: 0,
        endValue: 6 // 一次性展示多少个
      },
      //以下重点： 让鼠标滚动从缩放变成移动
      {
        type: 'inside',
        yAxisIndex: [0, 1],
        zoomOnMouseWheel: false, //滚轮不触发缩放
        moveOnMouseMove: true, //鼠标移动触发平移
        moveOnMouseWheel: true //鼠标滚轮触发平移
      }
    ]
    // dataZoom: [
    //     {
    //         yAxisIndex: [0, 1], // 这里是从X轴的0刻度开始
    //         show: false, // 是否显示滑动条，不影响使用
    //         type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    //         startValue: 0, // 从头开始。
    //         endValue: 2 // 展示到第几个。
    //     }
    // ]
  }
  // 定时轮播自动滚动展示数据
  // setInterval(() => {
  //     if (option.dataZoom[0].endValue >= data.length) {
  //         option.dataZoom[0].endValue = 2;
  //         option.dataZoom[0].startValue = 0;
  //     } else {
  //         option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
  //         option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
  //     }
  //     charEch.setOption(option);
  // }, 4000);

  charEch.setOption(option)
  return charEch
}
defineExpose({
  initChart
})
</script>

<style lang="scss" scoped>
.eCharts {
  width: 100%;
  height: 100%;
}
</style>
