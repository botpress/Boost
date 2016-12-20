<a href='https://m.me/BoostFuel'><img src='/assets/banner.png' height='300px'></a>

# Boost

An open-source motivational bot for Messenger.

## Features

- Three different categories of videos (**work**, **life** and **gym**)
- Fetch videos metadata from YouTube
- Subscription to send daily videos at 8AM (users timezone)

## Roadmap

- Personalize the send time (currently only 8AM)
- Don't send the same user the same videos

## Requirements

Botpress requires [node](https://nodejs.org) (version >= 4.2) and uses [npm](https://www.npmjs.com) as package manager.

Boost is powered by [**Botpress**](https://github.com/botpress/botpress), an open-source bot platform.

## Getting started

You should get familiar with [Botpress](https://github.com/botpress/botpress) and the main modules this bot uses (botpress-messenger, botpress-broadcast, botpress-scheduler, botpress-subscriptions).

### Running the bot

Simply run `npm install` then `npm start` in the project root. The bot should be running at `http://localhost:3000`.

To develop and test locally, we suggest you setup [ngrok](https://ngrok.com/) in the botpress-messenger module.

You must re-run (`npm start`) after every change to the bot code.

## Contributing

Everybody is welcomed to contribute to Boost. Note that only contributions addressing open GitHub issues will be considered. Please open an issue before contributing!

1) Fork this repo
2) Make changes in your repo
3) Submit pull request on this repo

## Community (Botpress)

We have a [Public Chatroom](https://gitter.im/botpress/core), everybody is invited to come and share ideas, issues or simply get in touch.

## License

Boost is licensed under [AGPL-3.0](/LICENSE)
