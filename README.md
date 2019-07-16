# discord-bot-demo

![project template](https://img.shields.io/badge/project-template-blue.svg?style=flat-square)

> Template for making a discord bot with nodejs.

## Getting Started

```
# Go to https://discordapp.com/developers/applications/ and get you bot credentials

# clone the repository
https://github.com/pankaryp/discord-bot-demo.git
cd discord-bot-demo

# install dependencies
npm install

# authorize the bot to your server, by replacing CLIENTID with your client id
# https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8

# Run the bot
node bot.js
```

## Functionalities
* Static messages
* New member greeting message
* Custom sounds
* Send attachment
* Embed message box
* Music

### Packages
* [node-ytdl-core](https://github.com/fent/node-ytdl-core)

### Bot Authorization
Replace 'CLIENTID' with your client id
```
https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8
```

**Note:** You need [FFMPEG](https://www.ffmpeg.org/download.html) installed in order to use the audio functionality.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
