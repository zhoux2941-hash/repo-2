<template>
  <!-- 立体柱状图 -->
  <div id="numberChart" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

let colorArr = [['#0ce2ed'], ['#4deffa', 'rgba(0, 152, 197,1)'], ['#00cdd7', 'rgba(4, 108, 145,1)']]
const initChart = (data: any): echarts.ECharts => {
  // 绘制部分是找社区的
  const offsetX = 12 //bar宽
  const offsetY = 6 //倾斜角度
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint
      // console.log(shape);
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x - offsetX, shape.y - offsetY]
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
      const c3 = [xAxisPoint[0], xAxisPoint[1]]
      ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
  })
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c1 = [shape.x, shape.y]
      const c2 = [xAxisPoint[0], xAxisPoint[1]]
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
      const c4 = [shape.x + offsetX, shape.y - offsetY]
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
  })
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y]
      const c2 = [shape.x + offsetX, shape.y - offsetY] //右点
      // const c3 = [shape.x, shape.y - offsetX];
      const c3 = [shape.x, shape.y - offsetY * 2]
      const c4 = [shape.x - offsetX, shape.y - offsetY]
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
  })
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft)
  echarts.graphic.registerShape('CubeRight', CubeRight)
  echarts.graphic.registerShape('CubeTop', CubeTop)

  const charEle = document.getElementById('numberChart') as HTMLElement
  const charEch: echarts.ECharts = echarts.init(charEle)
  const option: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params: any, _ticket: any, _callback: any) {
        const item = params[1]
        return item.name + ' : ' + item.value
      }
    },
    grid: {
      left: '2%',
      right: '2%',
      top: '15%',
      bottom: '2%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.title,
      axisLine: {
        show: false,
        lineStyle: {
          width: 2,
          color: '#2B7BD6'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 12,
        color: '#000'
      }
    },
    yAxis: {
      type: 'value',
      name: '立体柱状图示例',
      nameTextStyle: {
        color: '#000',
        fontSize: 13
      },
      axisLine: {
        show: false,
        lineStyle: {
          width: 2,
          color: '#163b5c'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#153D7D'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 12,
        color: '#000'
      }
      // boundaryGap: ['20%', '20%'],
    },
    // 滚动条
    // dataZoom: [
    //   {
    //     type: 'slider',
    //     show: true,
    //     xAxisIndex: [0],
    //     handleSize: 0, //滑动条的 左右2个滑动条的大小
    //     height: 5, //组件高度
    //     bottom: 0, //右边的距离
    //     borderColor: '#74838e', //滚动条边框颜色
    //     fillerColor: '#3286e9', //滑块颜色
    //     backgroundColor: '#74838e', //两边未选中的滑动条区域的颜色
    //     showDataShadow: false, //是否显示数据阴影 默认auto
    //     showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
    //     realtime: true, //是否实时更新
    //     // filterMode: 'filter',
    //     zlevel: -10,
    //     endValue: 4 // 一次性最多展示4个。
    //   },
    //   //以下重点： 让鼠标滚动从缩放变成移动
    //   {
    //     type: 'inside',
    //     xAxisIndex: [0],
    //     zoomOnMouseWheel: false, //滚轮不触发缩放
    //     moveOnMouseMove: true, //鼠标移动触发平移
    //     moveOnMouseWheel: true //鼠标滚轮触发平移
    //   }
    // ],
    series: [
      {
        type: 'custom',
        renderItem: (_params: any, api: any) => {
          const location = api.coord([api.value(0), api.value(1)])
          return {
            type: 'group',
            children: [
              {
                type: 'CubeLeft',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorArr[1][0]
                    },
                    {
                      offset: 1,
                      color: colorArr[1][1]
                    }
                  ])
                }
              },
              {
                type: 'CubeRight',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorArr[2][0]
                    },
                    {
                      offset: 1,
                      color: colorArr[2][1]
                    }
                  ])
                }
              },
              {
                type: 'CubeTop',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorArr[0][0]
                    },
                    {
                      offset: 1,
                      color: colorArr[0][0]
                    }
                  ])
                }
              }
            ]
          }
        },
        data: data.data
      },
      {
        type: 'bar',
        itemStyle: {
          color: 'transparent'
        },
        tooltip: {},
        data: data.data
        // 柱子上显示值
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top',
        //     formatter: (e: any) => {
        //       return e.value
        //     },
        //     fontSize: 14,
        //     color: '#000',
        //     fontFamily: 'siyuan',
        //     fontWeight: 'bold',
        //     offset: [0, -15]
        //   }
        // },
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
