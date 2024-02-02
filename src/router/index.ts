import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HistogramChart from '../views/histogramChart/index.vue'
import LargeScreenStyle from '../views/largeScreenStyle/index.vue'
import LineChart from '../views/lineChart/index.vue'
import MapChart from '../views/mapChart/index.vue'
import PieChart from '../views/pieChart/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/lineChart',
    name: 'LineChart',
    component: LineChart
  },
  {
    path: '/histogramChart',
    name: 'HistogramChart',
    component: HistogramChart
  },
  {
    path: '/pieChart',
    name: 'PieChart',
    component: PieChart
  },
  {
    path: '/mapChart',
    name: 'MapChart',
    component: MapChart
  },
  {
    path: '/largeScreenStyle',
    name: 'LargeScreenStyle',
    component: LargeScreenStyle
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
