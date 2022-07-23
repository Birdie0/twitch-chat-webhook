import { env } from 'node:process'

import 'dotenv/config'
import { Client } from 'tmi.js'

import { sendWebhook } from './lib/send-webhook.js'

const {
  BOT_NAME: botName,
  OAUTH_TOKEN: oauthToken,
  CHANNEL_NAME: channelName
} = env

const client = new Client({
  options: { debug: true },
  identity: {
    username: botName,
    password: oauthToken
  },
  channels: [channelName]
})

client.connect()

client.on('message', (_channel, { username }, message, self) => {
  if (self) return

  sendWebhook(`\`${username}\`: ${message}`)
})
