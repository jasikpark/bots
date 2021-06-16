# Astro Bot

> beep boop beep boop

This repository contains the code for the Astro Bot, which is a Discord chat bot for the [Astro][0] community Discord server.

## Usage

In order to use/start the bot you need the following values:

- Discord Auth Token
- Owner User IDs
- Home Channel ID
- Command Prefix

You can either build the docker image locally (docker build -t tag-name-here:latest), or use the latest image from GHCR. Either way, you must provide the following variables:

```sh
docker run -d \
  -e DISCORD_TOKEN='' \
  -e COMMAND_PREFIX='' \
  -e HOME_CHANNEL='' \
  -e OWNER_IDS=',' \
  --name astro-bot ghcr.io/snowpackjs/bot:latest
```

[0]: https://astro.build
