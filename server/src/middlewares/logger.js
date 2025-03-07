import dotenv from 'dotenv'
import morgan from 'morgan'
import dayjs from '../utils/timezone.js'

dotenv.config()

morgan.token('date', () => {
  return dayjs(new Date()).tz('Asia/Jakarta').format('DD/MM/YYYY-HH:mm:ss:SSS')
})

const logger = morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined')

export default logger
