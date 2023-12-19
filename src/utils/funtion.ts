/**
 * 防抖代码
 * @param fn 传入的函数
 * @param delay 传入的时间
 * @returns 返回函数
 */
export const debounce = (fn: Function, delay: number) => {
  let timer: any = null
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
