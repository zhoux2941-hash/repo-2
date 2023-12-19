<template>
  <!-- 人力资源单位/项目分布  单位 -->
  <div id="hrUnitChart" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { debounce } from '../../../utils/funtion'

interface DataItem {
  value: number
  name: string
  id: string
}
const emit = defineEmits(['eventData'])

const initChart = (hrData: any): echarts.ECharts => {
  console.log(hrData)

  const charEle = document.getElementById('hrUnitChart') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(12, 51, 115,0.8)',
      borderColor: 'rgba(3, 11, 44, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      }
    },
    legend: {
      data: ['A级', 'B级'],
      textStyle: {
        color: '#000' // 设置图例字体颜色
      },
      right: 0,
      selectedMode: false
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '2%',
      top: '5%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: hrData.title,
        triggerEvent: true,
        // 坐标轴
        axisLine: {
          show: false,
          lineStyle: {
            color: '#000'
          }
        },
        // 坐标点
        axisTick: {
          show: false
        },
        // 横坐标文字显示方式
        axisLabel: {
          // formatter: function (value: any) {
          //   if (value.length > 4) {
          //     return value.substring(0, 4) + '...'
          //   }
          //   return value
          // }
        }
      }
    ],
    yAxis: [
      {
        show: false,
        type: 'value'
      }
    ],
    // 滚动条
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        handleSize: 0, //滑动条的 左右2个滑动条的大小
        height: 5, //组件高度
        bottom: 0, //右边的距离
        borderColor: '#74838e', //滚动条边框颜色
        fillerColor: '#3286e9', //滑块颜色
        backgroundColor: '#74838e', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime: true, //是否实时更新
        zlevel: -10,
        endValue: 11 // 一次性展示多少个
      },
      //以下重点： 让鼠标滚动从缩放变成移动
      {
        type: 'inside',
        xAxisIndex: [0],
        zoomOnMouseWheel: false, //滚轮不触发缩放
        moveOnMouseMove: true, //鼠标移动触发平移
        moveOnMouseWheel: true //鼠标滚轮触发平移
      }
    ],
    animationDurationUpdate: 500,
    series: [
      {
        name: 'A级',
        type: 'bar',
        stack: 'HR',
        barWidth: 24,
        itemStyle: {
          // 柱子形状颜色
          borderRadius: [0, 0, 5, 5],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#02f946' // 起始颜色
              },
              {
                offset: 1,
                color: '#10ab28' // 结束颜色
              }
            ]
          }
        },
        data: hrData.aData,
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      },
      {
        name: 'B级',
        type: 'bar',
        stack: 'HR',
        itemStyle: {
          // 柱子形状颜色
          borderRadius: [5, 5, 0, 0],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#00b1ff' // 起始颜色
              },
              {
                offset: 1,
                color: '#0180ff' // 结束颜色
              }
            ]
          }
        },
        data: hrData.bData,
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      }
    ],
    // 返回字样处理
    graphic: [
      {
        type: 'text',
        left: 20,
        top: 10,
        style: {
          text: ''
        }
      }
    ]
  }

  charEch.on('click', debounce(onClick, 500))

  function onClick(event: any) {
    if (event.componentType === 'xAxis') {
      // 筛选子级
      var subData = hrData.aData.find(function (data: any) {
        return data.name === event.value
      })
      if (!subData) {
        return
      }
      var subData2 = hrData.bData.find(function (data: any) {
        return data.name === event.value
      })
      if (!subData2) {
        return
      }

      // 将数据传给父组件
      const eventData = subData
      emit('eventData', eventData)

      charEch.setOption<echarts.EChartsOption>({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(12, 51, 115,0.8)',
          borderColor: 'rgba(3, 11, 44, 0.5)',
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          }
        },
        xAxis: {
          data: subData.data.map(function (item: any) {
            return Object.keys(item)[0]
          })
        },
        // 滚动条
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            height: 5, //组件高度
            bottom: 0, //右边的距离
            borderColor: '#74838e', //滚动条边框颜色
            fillerColor: '#3286e9', //滑块颜色
            backgroundColor: '#74838e', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            realtime: true, //是否实时更新
            // filterMode: 'filter',
            zlevel: -10,
            endValue: 11 // 一次性展示多少个
          },
          //以下重点： 让鼠标滚动从缩放变成移动
          {
            type: 'inside',
            xAxisIndex: [0],
            zoomOnMouseWheel: false, //滚轮不触发缩放
            moveOnMouseMove: true, //鼠标移动触发平移
            moveOnMouseWheel: true //鼠标滚轮触发平移
          }
        ],
        series: [
          {
            name: 'A级',
            type: 'bar',
            stack: 'HR',
            barWidth: 22,
            data: subData.data.map(function (item: any) {
              return item[Object.keys(item)[0]]
            })
          },
          {
            name: 'B级',
            type: 'bar',
            stack: 'HR',
            data: subData2.data.map(function (item: any) {
              return item[Object.keys(item)[0]]
            })
          }
        ],
        // 返回字样出现
        graphic: [
          {
            type: 'text',
            left: 20,
            top: 10,
            style: {
              text: '返回',
              fontSize: 12,
              fill: '#000'
            },
            onclick: function () {
              charEch.setOption<echarts.EChartsOption>(option)
            }
          }
        ]
      })
    } else if (event.componentType === 'series') {
      if (event.data) {
        // 筛选子级
        var subData = hrData.aData.find(function (data: any) {
          return data.name === (event.data as DataItem).name
        })
        if (!subData) {
          return
        }
        var subData2 = hrData.bData.find(function (data: any) {
          return data.name === (event.data as DataItem).name
        })
        if (!subData2) {
          return
        }

        // 将数据传给父组件
        const eventData = event.data
        emit('eventData', eventData)

        charEch.setOption<echarts.EChartsOption>({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor: 'rgba(12, 51, 115,0.8)',
            borderColor: 'rgba(3, 11, 44, 0.5)',
            textStyle: {
              color: 'rgba(255, 255, 255, 1)'
            }
          },
          xAxis: {
            data: subData.data.map(function (item: any) {
              return Object.keys(item)[0]
            })
          },
          // 滚动条
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              handleSize: 0, //滑动条的 左右2个滑动条的大小
              height: 5, //组件高度
              bottom: 0, //右边的距离
              borderColor: '#74838e', //滚动条边框颜色
              fillerColor: '#3286e9', //滑块颜色
              backgroundColor: '#74838e', //两边未选中的滑动条区域的颜色
              showDataShadow: false, //是否显示数据阴影 默认auto
              showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
              realtime: true, //是否实时更新
              // filterMode: 'filter',
              zlevel: -10,
              endValue: 11 // 一次性展示多少个
            },
            //以下重点： 让鼠标滚动从缩放变成移动
            {
              type: 'inside',
              xAxisIndex: [0],
              zoomOnMouseWheel: false, //滚轮不触发缩放
              moveOnMouseMove: true, //鼠标移动触发平移
              moveOnMouseWheel: true //鼠标滚轮触发平移
            }
          ],
          series: [
            {
              name: 'A级',
              type: 'bar',
              stack: 'HR',
              barWidth: 22,
              data: subData.data.map(function (item: any) {
                return item[Object.keys(item)[0]]
              })
            },
            {
              name: 'B级',
              type: 'bar',
              stack: 'HR',
              data: subData2.data.map(function (item: any) {
                return item[Object.keys(item)[0]]
              })
            }
          ],
          // 返回字样出现
          graphic: [
            {
              type: 'text',
              left: 20,
              top: 10,
              style: {
                text: '返回',
                fontSize: 12,
                fill: '#000'
              },
              onclick: function () {
                charEch.setOption<echarts.EChartsOption>(option)
              }
            }
          ]
        })
      }
    } else {
      const eventData = { name: '示例name', id: 'ID' }
      emit('eventData', eventData)
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
