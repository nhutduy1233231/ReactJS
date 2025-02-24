import dayjs from 'dayjs'

class DateUtils {
  static formatDate(date: string, format: string) {
    return dayjs(date).format(format)
  }

  static getAllDatesInMonth(date: string): string[] {
    const dates: string[] = []

    const newDate = this.formatDate(date, 'YYYY/MM')

    const numDays = this.getLastDateOfMonth(`${newDate}/01`) ?? 0

    for (let i = 1; i <= +numDays; i++) {
      dates.push(`${date}/` + `${i}`.padStart(2, '0'))
    }

    return dates
  }

  static getLastDateOfMonth(date: string): string | undefined {
    try {
      return dayjs(date).endOf('month').format('DD')
    } catch {
      return undefined
    }
  }
}

export const dateUltils = DateUtils
