#!/bin/bash

# docker stop astro-bot && docker rm astro-bot

docker run -d \
  -e DISCORD_TOKEN='' \
  -e COMMAND_PREFIX='' \
  -e INVITE='' \
  -e HOME_CHANNEL='' \
  -e OWNER_IDS='' \
  -e DB_CONNECTION_STRING='' \
  --name astro-bot ghcr.io/snowpackjs/bot:latest

docker logs astro-bot --follow
