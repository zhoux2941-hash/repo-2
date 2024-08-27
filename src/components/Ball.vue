<script setup lang="ts">
import { ref, onMounted } from 'vue'

const tagBall = ref<any>()
const tagEle = ref<any>()
const paper = ref<any>()
const CX = ref<any>()
const CY = ref<any>()
const EX = ref<any>()
const EY = ref<any>()
const RADIUS = ref(250)
const fallLength = ref(1800)
const tags = ref<any>([])
const timing = ref<any>(null)
const angleX = ref<any>(Math.PI / 600)
const angleY = ref<any>(Math.PI / 600)

onMounted(() => {
    tagEle.value = tagBall.value.children
    paper.value = tagBall.value
    CX.value = paper.value.offsetWidth / 2
    CY.value = paper.value.offsetHeight / 2
    EX.value =
        paper.value.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft
    EY.value = paper.value.offsetTop + document.body.scrollTop + document.documentElement.scrollTop
    innit()
    animate()
})

const innit = () => {
    for (var i = 0; i < tagEle.value.length; i++) {
        var a: any, b: any
        var k = (2 * (i + 1) - 1) / tagEle.value.length - 1
        var a: any = Math.acos(k)
        var b: any = a * Math.sqrt(tagEle.value.length * Math.PI)
        var x = RADIUS.value * Math.sin(a) * Math.cos(b)
        var y = RADIUS.value * Math.sin(a) * Math.sin(b)
        var z = RADIUS.value * Math.cos(a)
        // 随机颜色
        tagEle.value[i].style.color =
            'rgb(' +
            Math.floor(Math.random() * 255) +
            ',' +
            Math.floor(Math.random() * 255) +
            ',' +
            Math.floor(Math.random() * 255) +
            ')'
        tags.value.push({ ele: tagEle.value[i], x, y, z })
    }
}
const tagFun = ({ ele, x, y, z }: any) => {
    var scale = fallLength.value / (fallLength.value - z)
    var alpha = (z + RADIUS.value) / (2 * RADIUS.value)
    ele.style.fontSize = 16 * scale + 'px'
    ele.style.opacity = alpha + 0.5
    ele.style.filter = 'alpha(opacity = ' + (alpha + 0.5) * 100 + ')'
    ele.style.zIndex = Math.floor(scale * 100)
    ele.style.left = x + CX.value - ele.offsetWidth / 2 + 'px'
    ele.style.top = y + CY.value - ele.offsetHeight / 2 + 'px'
}
// 旋转时间修改
const animate = () => {
    timing.value = setInterval(() => {
        rotateX()
        rotateY()
        tags.value.forEach((item: any) => {
            tagFun(item)
        })
    }, 30)
}
const rotateX = () => {
    var cos = Math.cos(angleX.value)
    var sin = Math.sin(angleX.value)
    tags.value.forEach((item: any) => {
        var y1 = item.y * cos - item.z * sin
        var z1 = item.z * cos + item.y * sin
        item.y = y1
        item.z = z1
    })
}
const rotateY = () => {
    var cos = Math.cos(angleY.value)
    var sin = Math.sin(angleY.value)
    tags.value.forEach((item: any) => {
        var x1 = item.x * cos - item.z * sin
        var z1 = item.z * cos + item.x * sin
        item.x = x1
        item.z = z1
    })
}
// 数据
const ballData = ref<string[]>([
    '可视化数据展示',
    '可视化数据展示',
    '可视化数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '可视化数据展示',
    '数据展示',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '可视化数据展示',
    '可视化',
    '可视化',
    '可视化',
    '可视化',
    '可视化数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
    '数据展示',
])
</script>

<template>
    <div id="tagBall" class="tagBall" ref="tagBall">
        <p v-for="(item, index) in ballData" :key="index" class="tag">
            {{ item }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.tagBall {
    width: 80vw;
    height: 80vh;
    position: relative;
}
.tag {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
}
</style>
