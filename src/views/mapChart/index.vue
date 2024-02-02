<script setup lang="ts">
import axios from "axios";
import Map from "./components/map.vue";
import { ECharts } from "echarts";
import { onMounted, ref } from "vue";
import type { ChartProps } from "../../types/chart";

window.onresize = function () {
  location.reload();
};
const dataScreen: ChartProps = {
  chart1: null,
};
interface ChartExpose {
  initChart: (params: any) => ECharts;
}
const MapRef = ref<ChartExpose>();
const initCharts = (): void => {
  dataScreen.chart1 = MapRef.value?.initChart(mapDataOne.value) as ECharts;
};

const mapDataOne = ref<any>();
onMounted(async () => {
  const mapDataRes = await axios.get("src/assets/json/mapData.json");
  mapDataOne.value = mapDataRes.data.data;

  initCharts();
});
</script>

<template>
  <div class="line_chart_page">
    <h1>大区数据为随机选配用于展示，可能存在部分省份大区不准</h1>
    <div class="map">
      <Map ref="MapRef" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line_chart_page {
  padding: 20px;
  width: 100%;
  background-image: radial-gradient(
    circle,
    #e78484 0%,
    #e2b896 20%,
    #8fd8d4 70%,
    #a8f0e6 100%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    flex-basis: 5%;
  }
  .map{
    flex-basis: 95%;
  }
}
</style>
