import { env } from 'node:process'

import 'dotenv/config.js'
import axios from 'axios'
import { Client } from 'tmi.js'

const {
  BOT_NAME: botName,
  OAUTH_TOKEN: oauthToken,
  CHANNEL_NAME: channelName,
  WEBHOOK_URL: webhookUrl
} = env

const client = new Client({
  options: { debug: true },
  identity: {
    username: botName,
    password: oauthToken
  },
  channels: [channelName]
})

await client.connect()

client.on('message', (_channel, { username }, message, self) => {
  if (self) return

  sendWebhook(`\`${username}\`: ${message}`)
})

function sendWebhook (message) {
  axios.post(webhookUrl, {
    content: message,
    allowed_mentions: { parse: [] }
  })
}
