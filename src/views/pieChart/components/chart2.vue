<template>
    <!-- 基础饼图_南丁格尔玫瑰图 -->
    <div id="chart2" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const initChart = (data: any): echarts.ECharts => {
    const charEle = document.getElementById('chart2') as HTMLElement
    const charEch: echarts.ECharts = echarts.init(charEle)
    const option: any = {
        tooltip: {
            trigger: 'item', // 触发类型为坐标轴
            axisPointer: {
                type: 'line', // 指示器类型为线性
            },
            backgroundColor: 'rgba(12, 51, 115,0.8)',
            borderColor: 'rgba(3, 11, 44, 0.5)',
            textStyle: {
                color: 'rgba(255, 255, 255, 1)',
            },
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
            {
                name: '南丁格尔玫瑰图',
                type: 'pie',
                radius: ['0%', '90%'],
                center: ['50%', '50%'],
                // 开启玫瑰图
                roseType: 'radius',
                emphasis: {
                    label: {
                        show: false,
                    },
                },
                data: data,
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
