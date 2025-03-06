#! /usr/bin/env node
'use strict'
import dotenv from 'dotenv'
import { networkInterfaces } from 'os'
import app from './app.js'

dotenv.config()

const nets = networkInterfaces()
const localIP = Object.values(nets).flat().filter(item => item.family === 'IPv4')
const usedIP = localIP[0].address || '127.0.0.1'
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server listening on http://${usedIP}:${port}`)
})
