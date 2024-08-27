// 声明charts实例
export interface ChartProps {
    [key: string]: ECharts | null
}

export type lineDataOneType = {
    times: Array<string>
    nowValue: Array<number>
    yesValue: Array<number>
}

export type lineDataTwoType = {
    times: Array<string>
    value: Array<number>
}

export type hisDataOneType = {
    aData: Array<hisDataOneObjType>
    bData: Array<hisDataOneObjType>
    title: Array<string>
}
type hisDataOneObjType = {
    data: Array<string>
    id: string
    name: string
    value: number
}

export type hisDataTwoType = {
    bOne: Array<number>
    bTwo: Array<number>
    lOne: Array<number>
    lTwo: Array<number>
    title: Array<string>
}

export type hisDataThreeType = {
    one: Array<number>
    two: Array<number>
    title: Array<string>
}

export type hisDataFourType = {
    data: Array<dataArrType>
}
type dataArrType = {
    name: string
    value: number
}

export type hisDataFiveType = {
    data: Array<number>
    title: Array<string>
}

export type pieDataOneType = {
    name: string
    value: number
}

export type pieDataTwoType = {
    name: Array<string>
    value: Array<number>
}

export type pieDataThreeType = {
    name: string
    children?: Array<pieDataThreeChildrenType>
}
type pieDataThreeChildrenType = {
    name: string
    value: number
}
