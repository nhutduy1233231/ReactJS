export const numberUtils = {
  isInteger: (num: string | number) => Number.isInteger(num),

  roundTo: (num: number, precision: number) => Number(num.toFixed(precision)),

  parseInt: (num: string | number) => {
    const regex = /^\d+$/

    const isValid = regex.test(`${num}`)

    if (!isValid) return -1

    return parseInt(`${num}`)
  },

  getRandomNumber: (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
