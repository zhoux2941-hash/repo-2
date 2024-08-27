<script setup lang="ts">
import Ball from '../components/Ball.vue'

const clickLink = () => {
    window.open('https://code.juejin.cn/pen/7224061088659144743')
}
</script>

<template>
    <div class="home_page">
        <Ball ref="BallRef" class="ball_ref" />
        <h2 class="link" @click="clickLink">球体组件展示_点击跳转组件原作者链接</h2>
    </div>
</template>

<style lang="scss" scoped>
.home_page {
    padding: 20px;
    width: 100%;
    background-color: #000;
    background-image: radial-gradient(circle, #2969e0 0%, #469ae9 20%, #0c3cd6 70%, #187ddb 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .ball_ref {
        margin: 5vh auto;
    }
    .link {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 18px;
    }
}
</style>
