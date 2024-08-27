<template>
    <!-- 地图 -->
    <div id="worldMap" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import world from '../../../assets/json/world.json'
import china from '../../../assets/json/china.json'

// 深拷贝一份世界地图数据
let worldAndChina = Object.assign({}, world)
// 进行两份json数据重绘
worldAndChina.features = worldAndChina.features.concat(china.features as any)
// 初始化世界地图
echarts.registerMap('world', worldAndChina as any)
// 取消世界其他国家label
world.features.map((item: any) => {
    if (
        item.properties.name !== '中华人民共和国' &&
        item.properties.name !== '沙特阿拉伯' &&
        item.properties.name !== '俄罗斯'
    ) {
        item.properties.name = ''
    }
    return item
})

const initChart = (mapData: any): echarts.ECharts => {
    const charEle = document.getElementById('worldMap') as HTMLElement
    const charEch: any = echarts.init(charEle)
    const option: any = {
        tooltip: {
            trigger: 'item',
        },
        geo: {
            map: 'world',
            zoom: 4.5,
            center: [105, 35],
            scaleLimit: {
                min: 0.4,
            },
            label: {
                color: '#fff',
                show: true,
                formatter: function (value: any) {
                    console.log(value)
                    return value.name
                },
            },
            emphasis: {
                label: {
                    color: '#fff',
                    show: true,
                },
                itemStyle: {
                    areaColor: 'rgba(9, 53, 127,0.5)',
                },
            },
            roam: true,
            itemStyle: {
                areaColor: 'rgba(75, 116, 241,1)',
                borderColor: '#B0E0E6',
                shadowColor: '#47cbfc',
                shadowOffsetY: 0,
                shadowBlur: 1,
                borderWidth: 1,
            },
            tooltip: {
                show: false,
            },
        },
        series: [
            {
                name: '',
                type: 'lines',
                coordinateSystem: 'geo',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: 'red',
                    symbolSize: 3,
                },
                lineStyle: {
                    color: '#fff',
                    width: 0,
                    curveness: 0.2,
                },
                data: [],
            },
        ],
    }

    // 缩放事件处理
    charEch.on('georoam', function (params: any) {
        var options = charEch.getOption() //获得option对象
        if (!params.originX) return // 不是缩放就返回
        let zoom = options.geo[0].zoom
        // 进行缩放判断
        if (zoom > 4) {
            // 展示重叠图层
            let worldAndChina = Object.assign({}, world)
            worldAndChina.features = worldAndChina.features.concat(china.features as any)
            echarts.registerMap('world', worldAndChina as any)
            options.geo[0].label.show = true
        } else {
            // 仅展示世界图层
            echarts.registerMap('world', world as any)
            options.geo[0].label.show = false
        }
        charEch.setOption(options)
    })

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
