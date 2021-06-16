#!/bin/bash

# docker stop astro-bot && docker rm astro-bot

docker run -d \
  -e DISCORD_TOKEN='' \
  -e COMMAND_PREFIX='' \
  -e INVITE='' \
  -e HOME_CHANNEL='' \
  -e OWNER_IDS=',' \
  --name astro-bot snowpackjs/bot:latest

docker logs astro-bot --follow
