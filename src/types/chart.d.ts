// 声明charts实例
export interface ChartProps {
  [key: string]: ECharts | null
}

export type lineDataOneType = {
  times: array<string>
  nowValue: array<number>
  yesValue: array<number>
}

export type lineDataTwoType = {
  times: array<string>
  value: array<number>
}
