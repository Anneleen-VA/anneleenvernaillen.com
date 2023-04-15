import dayjs from 'dayjs'

import('dayjs/locale/nl')
import('dayjs/locale/en')

export function useFormattedDate(d: string) {
  const { locale } = useI18n()
  const appConfig = useAppConfig()
  const date = dayjs(d)
  return date.locale(locale.value).format(appConfig.dateFormat)
}
