# twitch-chat-webhook

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Ever dreamt of twitch chat sent to your discord channel? Well, don't... as it's here! 🎉

> Warning: there's no any kind of error or ratelimit handling (lol), using it on big channels will likely result in bad time[™](https://youtu.be/0FCvzsVlXpQ).

## Setup

* [Node.js](https://nodejs.org/en/download/) 12+
* [pnpm](https://pnpm.io/installation#using-npm) 7+

1. Run `pnpm install -P` to install dependencies skipping dev ones.
2. Copy `.env.sample` to `.env` and fill the values:
  - `BOT_NAME` - account name on which behalf messages will be read, can be your account too;
  - `OAUTH_TOKEN` - oauth token, use [this](https://twitchapps.com/tmi/) or any other method known to you, notice that token expires in around 60 days, so update token from time to time;
  - `CHANNEL_NAME` - channel chat name which will provide messages;
  - `WEBHOOK_URL` - discord webhook url which will send messages;
3. Run `pnpm start`
