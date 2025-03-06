import morgan from 'morgan'
import dayjs from '../utils/timezone.js'

morgan.token('date', () => {
  return dayjs(new Date()).tz('Asia/Jakarta').format('DD/MM/YYYY-HH:mm:ss:SSS')
})

const logger = morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev')

export default logger
