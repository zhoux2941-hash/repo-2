<template>
    <!-- 旭日图 -->
    <div id="chart4" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const initChart = (data: any): echarts.ECharts => {
    const charEle = document.getElementById('chart4') as HTMLElement
    const charEch: echarts.ECharts = echarts.init(charEle)
    const option: any = {
        series: {
            type: 'sunburst',
            data: data,
            radius: ['0%', '90%'],
            itemStyle: {
                borderRadius: 7,
                borderWidth: 2,
            },
            label: {
                show: true,
            },
        },
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
