# ✍ Installation

### 🚀 Setup

* You can see the [Heroku installation guide here](deploy-to-heroku.md)
* You can see the [Replit installation guide here](replit.md)
* Or you can set it up on your machine.

### <img src="https://cdn.discordapp.com/emojis/1009754836314628146.gif" alt="" data-size="line">》Requirements

* [Git](https://git-scm.com/downloads)
* [MongoDB](https://www.mongodb.com)
* [Nodejs](https://nodejs.org/en/): (18 or above)
* Java v13 for lavalink server.
* [pm2](https://pm2.io/docs/runtime/guide/installation/): To keep your bot alive 24/7
* Discord Token. Get it from [Discord Developers Portal](https://discord.com/developers/applications)
* Mongo Database URL. Get it from [MongoDB](https://cloud.mongodb.com/v2/635277bf9f5c7b5620db28a4#clusters)
* Giphy API Token. Get it from [Giphy Developers Portal](https://developers.giphy.com/)
* OpenAI API Key `for ai chatbot`. Get it from [OpenAi Developers Portal](https://beta.openai.com/account/api-keys)
* ClientID `for loading slash commands.`
* Spotify client ID `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)
* Spotify client Secret `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)

### Creating a Discord Bot

Please set up a discord bot [here](https://discord.com/developers/applications/) and add it to your server.

Scopes:

* bot
* application.commands

Bot Permissions:

* read messages/view channels
* send messages
* create public threads
* create private threads
* send messages in threads
* embed links
* attach files
* use slash commands

You also need to enable the Message Content Intent:

<details>

<summary>Expand to see image</summary>

<img src="https://user-images.githubusercontent.com/108406948/210853245-31728f5a-3017-4a26-9caa-0541b6fe1aae.png" alt="image" data-size="original">

</details>

### 》Installation Guide

#### Installing via [NPM](https://www.npmjs.com/)

* Clone the repo and install dependencies by running

```bash
git clone https://github.com/vixshan/amina.git
cd amina
npm install
```

* After cloning Fill all requirement in `.env` **(rename `.env.example` to `.env`)**

### Setting up Environment Variables

The following environment variables are required for amina to work correctly.

You can set the environment variables in any way you like or place a .env file at the root of your project (rename `.env.example` to `.env`), Ensure that your `.env` looks like this:

<details>

<summary>[EXPAND] Click to see .env</summary>

```bash
# Bot Token [Required]
BOT_TOKEN=

# Mongo Database Connection String [Required]
MONGO_CONNECTION=

# Webhooks [Optional]
ERROR_LOGS=
JOIN_LEAVE_LOGS=
FEEDBACK_URL=

# Dashboard [Required for dashboard]
BOT_SECRET=
SESSION_PASSWORD=

# Required for Weather Command (https://weatherstack.com)
WEATHERSTACK_KEY=

# Required for image commands (https://strangeapi.fun/docs)
STRANGE_API_KEY=

# SPOTFIY [Required for Spotify Support]
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=

# Required for OpenAI (https://beta.openai.com/)
OPENAI=


```

MongoDB:

* MONGODB\_CONNECTION: The MongoDB connection string.
  * Should look something like this: mongodb+srv://:..mongodb.net/?retryWrites=true\&w=majority

Bot Token:

* BOT\_TOKEN: The Discord bot token
  * You can get it from your [Discord Dev Portal](https://discord.com/developers/applications) by selecting your app and then selecting "Bot."

Discord Server Details:

* ERROR\_LOGS: (Optional) The webhook for error log messages
* JOIN\_LEAVE\_LOGS: (Optional) The webhook for join/leave log messages

Extras:

* WEATHERSTACK\_KEY: (Optional) The API key for weatherstack.com
* STRANGE\_API\_KEY: (Optional) The API key for strangeapi.fun
* SPOTIFY\_CLIENT\_ID: (Optional) The client ID for Spotify
* SPOTIFY\_CLIENT\_SECRET: (Optional) The client secret for Spotify
* OPENAI: (Optional) The API key for OpenAI

</details>

### Start your bot

Set up the environment variables as described above.

* Install pm2 globally by running

```js
npm i -g pm2
```

* Start the bot

```bash
npm start
```

> You can also run `npm run start` to start the bot.

* NOTE: running `npm start` or `npm run start` will start the bot without, so eventually it will stop once the terminal is killed. You can add the followingline of code in its start script to make it start with PM2 and give it the name "amina." You can replace "amina" with a name of your choice in [package.json](../package.json). It will also show logs for the bot and save the pm2 processes.

```json
"start": "pm2 start bot.js --name amina && pm2 save && pm2 logs",
```

<details>

<summary>[EXPAND] COMMON ERRORS</summary>

```bash
[PM2][ERROR] Script already launched, add -f option to force re-execution
```

It means that the bot is already running. You can restart it by running:

```
pm2 restart amina
```

</details>

* If you are in a dev environment, use `node .` or `npm run dev` to test your code:

```bash
node .
```

Once you are satisfied with the changes, run the following:

```bash
pm2 restart amina && pm2 logs
```

You can also restart it from the [pm2.io dashboard](https://pm2.io/) as shown bellow:

<details>

<summary>Expand to see image</summary>

<img src="https://cdn.discordapp.com/attachments/1072834906742345808/1076183450417123358/image.png" alt="" data-size="original">

</details>

***

### <img src="https://cdn.discordapp.com/emojis/1036083490292244493.png" alt="" data-size="line">》Support Server

<figure><img src="https://invidget.switchblade.xyz/uMgS9evnmv" alt=""><figcaption></figcaption></figure>

[![ko-fi](https://ko-fi.com/img/githubbutton\_sm.svg)](https://ko-fi.com/vikshan)