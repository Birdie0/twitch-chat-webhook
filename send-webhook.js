import { env } from 'node:process'

const { WEBHOOK_URL: webhookUrl } = env

function sendWebhook (message) {
  return fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      content: message,
      allowed_mentions: { parse: [] }
    })
  })
}

export {
  sendWebhook
}
