<template>
    <!-- 双曲线 -->
    <div id="chart1" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { lineDataOneType } from '../../../types/chart'

const initChart = (data: lineDataOneType): echarts.ECharts => {
    const charEle = document.getElementById('chart1') as HTMLElement
    const charEch: echarts.ECharts = echarts.init(charEle)
    const option: any = {
        // 鼠标悬浮提示
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
            top: '15%',
            containLabel: true,
        },
        // 图例项
        legend: {
            textStyle: {
                color: '#000',
            },
        },
        // 坐标轴项
        xAxis: {
            data: data.times,
            boundaryGap: false, // 是否贴两边展示
            // 坐标轴
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0c3f6c',
                },
            },
            // 坐标点
            axisTick: {
                show: false,
            },
            // 坐标轴刻度
            axisLabel: {
                color: '#000',
            },
        },
        yAxis: [
            {
                type: 'value',
                // 坐标轴
                axisLine: {
                    show: true,
                },
                // 坐标轴长线
                splitLine: {
                    show: true,
                },
                // 坐标点
                axisTick: {
                    show: false,
                },
                // 坐标轴刻度
                axisLabel: {
                    show: true,
                    color: '#000',
                },
            },
        ],
        series: [
            {
                name: '2023',
                type: 'line',
                data: data.nowValue,
                smooth: true,
                yAxisIndex: 0,
                label: {
                    show: false,
                },
                lineStyle: {
                    color: '#c6a82f', // 修改折线的颜色
                },
                symbol: 'none',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(211, 178, 48, 0.8)', // 渐变起始颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(211, 178, 48, 0)', // 渐变结束颜色
                            },
                        ],
                    },
                },
            },
            {
                name: '2022',
                type: 'line',
                data: data.yesValue,
                smooth: true,
                yAxisIndex: 0,
                label: {
                    show: false,
                },
                lineStyle: {
                    color: '#1f8bda', // 修改折线的颜色
                },
                symbol: 'none',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(29, 135, 211, 0.8)', // 渐变起始颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(29, 135, 211, 0)', // 渐变结束颜色
                            },
                        ],
                    },
                },
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
