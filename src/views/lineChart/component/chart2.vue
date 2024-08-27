<template>
    <!-- 自定义图标曲线 -->
    <div id="chart2" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ICON } from '../../../assets/base64/icon.js'
import type { lineDataTwoType } from '../../../types/chart'

let icon = 'image://' + ICON.LineIcon

const initChart = (data: lineDataTwoType): echarts.ECharts => {
    const charEle = document.getElementById('chart2') as HTMLElement
    const charEch: echarts.ECharts = echarts.init(charEle)
    const option: any = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '4%',
            top: '14%',
            containLabel: true,
        },
        xAxis: {
            data: data.times,
            boundaryGap: false,
            // 坐标点
            axisTick: {
                show: true,
            },
            // 坐标轴
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                },
            },
        },
        yAxis: [
            {
                type: 'value',
                // 坐标轴
                axisLine: {
                    show: false,
                },
                // 坐标轴长线
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#EEE8AA',
                    },
                },
                // 坐标点
                axisTick: {
                    show: false,
                },
                // 坐标轴刻度
                axisLabel: {
                    show: false,
                },
            },
        ],
        series: [
            {
                type: 'line',
                data: data.value,
                symbol: icon,
                symbolSize: 30,
                smooth: true,
                yAxisIndex: 0,
                label: {
                    show: true,
                    color: '#000',
                },
                lineStyle: {
                    color: '#FFD700', // 修改折线的颜色
                },
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
                                color: 'rgba(218,165,32, 0.8)', // 渐变起始颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(218,165,32, 0.3)', // 渐变结束颜色
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
