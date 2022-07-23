import { env } from 'node:process'

// import axios from 'axios'

const { WEBHOOK_URL: webhookUrl } = env

function sendWebhook (message) {
  // axios.post(webhookUrl, {
  //   content: message,
  //   allowed_mentions: { parse: [] }
  // })

  fetch(webhookUrl, {
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
