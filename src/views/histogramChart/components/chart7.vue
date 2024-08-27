<template>
    <!-- 重叠多轴柱状图 -->
    <div id="chart7Ref" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const initChart = (chartData: any[]): echarts.ECharts => {
    const charEle = document.getElementById('chart7Ref') as HTMLElement
    const charEch: echarts.ECharts = echarts.init(charEle)
    const option: any = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            show: true,
            textStyle: {
                color: '#000', // 设置图例字体颜色
                fontSize: 12,
            },
            selectedMode: false, // 图例是否可以进行数据操作
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '15%',
            containLabel: true,
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                color: '#000',
                fontSize: 12,
            },
            splitLine: {
                show: false,
            },
        },
        xAxis: [
            {
                triggerEvent: true,
                type: 'category',
                data: chartData.map((item: any) => {
                    return item.title
                }),
                // 坐标轴
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#000',
                    },
                },
                // 坐标点
                axisTick: {
                    show: false,
                },
                // 横坐标文字显示方式
                axisLabel: {
                    fontSize: 12,
                },
            },
            {
                type: 'category',
                data: chartData.map((item: any) => {
                    return item.title
                }),
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitArea: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [
            {
                name: '示例组一',
                type: 'bar',
                xAxisIndex: 1,
                barWidth: 30, //柱子宽度
                zlevel: -1, // 柱子层级
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                    position: 'top',
                },
                itemStyle: {
                    color: '#fff',
                },
                data: chartData.map((item: any) => {
                    return item.slzyy + item.slzye + item.slzys
                }),
            },
            {
                name: '示例组二',
                type: 'bar',
                xAxisIndex: 1,
                barWidth: 30, //柱子宽度
                zlevel: -1, // 柱子层级
                barGap: '120%', //调整下边柱子的位置
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                    position: 'top',
                },
                itemStyle: {
                    color: '#fff',
                },
                data: chartData.map((item: any) => {
                    return item.slzey + item.slzee + item.slzes
                }),
            },
            {
                name: '示例组一(1)',
                type: 'bar',
                barWidth: 30,
                stack: 'SLY',
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                },
                itemStyle: {
                    // 柱子形状颜色
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#38f7d0', // 起始颜色
                            },
                            {
                                offset: 1,
                                color: '#42ea83', // 结束颜色
                            },
                        ],
                    },
                },
                data: chartData.map((item: any) => {
                    return item.slzyy
                }),
            },
            {
                name: '示例组一(2)',
                type: 'bar',
                barWidth: 30, //柱子宽度
                stack: 'SLY',
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#facb28', // 起始颜色
                            },
                            {
                                offset: 1,
                                color: '#fe5c4d', // 结束颜色
                            },
                        ],
                    },
                },
                data: chartData.map((item: any) => {
                    return item.slzye
                }),
            },
            {
                name: '示例组一(3)',
                type: 'bar',
                barWidth: 30, //柱子宽度
                stack: 'SLY',
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00bcf9', // 起始颜色
                            },
                            {
                                offset: 1,
                                color: '#0165eb', // 结束颜色
                            },
                        ],
                    },
                },
                data: chartData.map((item: any) => {
                    return item.slzys
                }),
            },
            {
                name: '示例组二(1)',
                type: 'bar',
                barWidth: 30,
                stack: 'SLE',
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                },
                itemStyle: {
                    // 柱子形状颜色
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#38f7d0', // 起始颜色
                            },
                            {
                                offset: 1,
                                color: '#42ea83', // 结束颜色
                            },
                        ],
                    },
                },
                data: chartData.map((item: any) => {
                    return item.slzey
                }),
            },
            {
                name: '示例组二(2)',
                type: 'bar',
                barWidth: 30, //柱子宽度
                stack: 'SLE',
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#facb28', // 起始颜色
                            },
                            {
                                offset: 1,
                                color: '#fe5c4d', // 结束颜色
                            },
                        ],
                    },
                },
                data: chartData.map((item: any) => {
                    return item.slzee
                }),
            },
            {
                name: '示例组二(3)',
                type: 'bar',
                barWidth: 30, //柱子宽度
                barGap: '120%', //调整下边柱子的位置
                stack: 'SLE',
                // 用来显示柱子上的数值
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12,
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00bcf9', // 起始颜色
                            },
                            {
                                offset: 1,
                                color: '#0165eb', // 结束颜色
                            },
                        ],
                    },
                },
                data: chartData.map((item: any) => {
                    return item.slzes
                }),
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
