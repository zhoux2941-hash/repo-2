<template>
    <!-- 基础折柱图+自定义图标 -->
    <div id="chart2" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ICON } from '../../../assets/base64/icon.js'

let icon = 'image://' + ICON.BarIcon
const initChart = (data: any): echarts.ECharts => {
    const charEle = document.getElementById('chart2') as HTMLElement
    const charEch: echarts.ECharts = echarts.init(charEle)
    const option: any = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            backgroundColor: 'rgba(12, 51, 115,0.8)',
            borderColor: 'rgba(3, 11, 44, 0.5)',
            textStyle: {
                color: 'rgba(255, 255, 255, 1)',
            },
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '4%',
            top: '10%',
            containLabel: true,
        },
        legend: {
            textStyle: {
                color: '#000', // 设置图例字体颜色
            },
        },
        xAxis: [
            {
                type: 'category',
                data: data.title,
                axisPointer: {
                    type: 'shadow',
                },
                axisTick: {
                    show: true,
                },
                axisLine: {
                    show: true,
                },
                axisLabel: {
                    color: '#000',
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                },
                axisLabel: {
                    color: '#000',
                },
            },
            {
                type: 'value',
                splitLine: {
                    show: true,
                },
                axisLabel: {
                    color: '#000',
                },
            },
        ],
        series: [
            {
                name: '自定义图标柱子',
                // 自定义柱子内样式
                type: 'pictorialBar',
                barWidth: 28,
                itemStyle: {
                    borderRadius: 50,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#DF0BFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#C600FF', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
                symbol: icon,
                animationEasing: 'elasticOut',
                symbolSize: ['100%', '90%'],
                symbolMargin: '1', //图形垂直间隔
                symbolRepeat: true,
                symbolClip: true,
                data: data.bOne,
            },
            // {
            //   name: '柱子二',
            //   type: 'bar',
            //   barWidth: 14,
            //   itemStyle: {
            //     borderRadius: 50,
            //     color: {
            //       type: 'linear',
            //       x: 0,
            //       y: 0,
            //       x2: 0,
            //       y2: 1,
            //       colorStops: [
            //         {
            //           offset: 0,
            //           color: '#03F7F5' // 0% 处的颜色
            //         },
            //         {
            //           offset: 1,
            //           color: '#01B3F6' // 100% 处的颜色
            //         }
            //       ],
            //       global: false // 缺省为 false
            //     }
            //   },
            //   data: data.bTwo
            // },
            // 双折线
            {
                name: '不平滑折线',
                type: 'line',
                lineStyle: {
                    width: '2',
                },
                itemStyle: {
                    color: '#02f444',
                },
                // smooth: 1,
                yAxisIndex: 1,
                data: data.lOne,
            },
            {
                name: '平滑折线',
                type: 'line',
                lineStyle: {
                    width: '2',
                },
                itemStyle: {
                    color: '#00eff2',
                },
                symbol: 'none', // 不显示折线点
                smooth: 1, // 平滑度
                yAxisIndex: 1, // 使用哪一条Y轴
                data: data.lTwo,
            },
        ],
    }

    charEch.setOption(option)
    return charEch
}
defineExpose({
    initChart,
})
</script>

<style lang="scss" scoped>
.echarts {
    width: 100%;
    height: 100%;
}
</style>
