import { env } from 'node:process'

import axios from 'axios'

const { WEBHOOK_URL: webhookUrl } = env

function sendWebhook (message) {
  axios.post(webhookUrl, {
    content: message,
    allowed_mentions: { parse: [] }
  })
}

export {
  sendWebhook
}
