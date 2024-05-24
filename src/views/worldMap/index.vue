<script setup lang="ts">
import axios from 'axios'
import WorldMap from './component/worldMap.vue'
import { ECharts } from 'echarts'
import { onMounted, ref } from 'vue'
import type { ChartProps } from '../../types/chart'

window.onresize = function () {
    location.reload()
}
const dataScreen: ChartProps = {
    chart1: null,
}
interface ChartExpose {
    initChart: (params: any) => ECharts
}
const MapRef = ref<ChartExpose>()
const initCharts = (): void => {
    dataScreen.chart1 = MapRef.value?.initChart(mapDataOne.value) as ECharts
}

const mapDataOne = ref<any>()
onMounted(async () => {
    const mapDataRes = await axios.get('src/assets/json/mapData.json')
    mapDataOne.value = mapDataRes.data.data

    initCharts()
})
</script>

<template>
    <div class="line_chart_page">
        <div class="map">
            <WorldMap ref="MapRef" />
        </div>
        <div class="statement">
            本地图仅作展示用途，部分省份/国家边界或存在不准确情况，请以官方资料为准。
        </div>
    </div>
</template>

<style lang="scss" scoped>
.line_chart_page {
    width: 100%;
    background-color: #62a8f7;
    position: relative;
    .map {
        height: 100%;
        width: 100%;
    }
    .statement {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 12px;
    }
}
</style>
