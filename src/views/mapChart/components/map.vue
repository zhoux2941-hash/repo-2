<template>
  <!-- 地图 -->
  <div id="ChinaMap" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import mapJson from "../../../assets/json/china.json";

echarts.registerMap("china", mapJson);
// 颜色数组
const colorArr = [
  {
    value: 1,
    label: "东北",
    color: "#FFD700",
  },
  {
    value: 2,
    label: "华北",
    color: "#00BFFF",
  },
  {
    value: 3,
    label: "华东",
    color: "#ffd4a1",
  },
  {
    value: 4,
    label: "华中",
    color: "#7CFC00",
  },
  {
    value: 5,
    label: "华南",
    color: "#2edcfe",
  },
  {
    value: 6,
    label: "西南",
    color: "#48D1CC",
  },
  {
    value: 7,
    label: "西北",
    color: "#D2B48C",
  },
];
const initChart = (mapData: any): echarts.ECharts => {
  const charEle = document.getElementById("ChinaMap") as HTMLElement;
  const charEch: echarts.ECharts = echarts.init(charEle);
  const option: any = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
      backgroundColor: "rgba(12, 51, 115,0.8)",
      borderColor: "rgba(3, 11, 44, 0.5)",
      borderWidth: "2",
      extraCssText: "padding:10px;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
      show: true,
      axisPointer: {
        type: "shadow",
      },
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
      },
      formatter: function (params: any) {
        var res;
        if (params.value > 0) {
          res = params.data.value1 + "大区" + "<br/>";
          res += params.data.name + "<br/>";
        } else {
          res = "";
        }
        return res;
      },
    },
    visualMap: {
      min: 0,
      max: mapData.length,
      left: "right",
      bottom: "5%",
      show: !0,
      showLabel: !0,
      textStyle: {
        color: "#000",
      },
      pieces: colorArr,
    },
    geo: {
      map: "china",
      aspectScale: 0.9,
      layoutCenter: ["45%", "50%"], //地图位置
      layoutSize: "100%",
      zoom: 1.1, //当前视角的缩放比例
      roam: true,
      label: {
        normal: {
          show: false,
          color: "#333",
        },
        emphasis: {
          show: true,
          color: "#000",
        },
      },
      itemStyle: {
        normal: {
          areaColor: "rgb(239, 28, 38)",
          borderColor: "rgb(255, 255, 0)",
        },
        emphasis: {
          areaColor: "rgba(255, 255, 0,0.7)",
        },
      },
    },
    series: [
      {
        type: "map",
        name: "地图",
        mapType: "china",
        geoIndex: 0,
        roam: true,
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        data: mapData,
      },
    ],
  };

  charEch.setOption(option);
  return charEch;
};
defineExpose({
  initChart,
});
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
