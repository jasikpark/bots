// const local = require('../../local.settings.json')

const Config = {
  authToken: process.env.DISCORD_TOKEN,
  commandPrefix: process.env.COMMAND_PREFIX,
  invite: process.env.INVITE,
  homeChannel: process.env.HOME_CHANNEL,
  ownerIds: process.env.OWNER_IDS.split(',')
}

module.exports = Config