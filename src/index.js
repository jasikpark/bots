const { CommandoClient } = require('discord.js-commando')
const { join } = require('path')
const {
  authToken,
  commandPrefix,
  homeChannel,
  invite,
  ownerIds
} = require('./lib/Config')

const client = new CommandoClient({
  owner: ownerIds,
  commandPrefix,
  invite
})

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerGroups([
    ['setup', 'Commands to help you get started working with Astro.'],
    ['builds', 'Commands related to the builds of Astro products/projects.']
  ])
  .registerDefaultCommands()
  .registerCommandsIn(join(__dirname, 'commands'))

client.once('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}! (${client?.user?.id})`)
  client?.user?.setActivity('with Commando')
})

client.on('error', console.error)

client.login(authToken).then(() => {
  client.channels.fetch(homeChannel).then(channel => {
    channel.send('Astro-bot has come online!')
    console.log('Astro-bot has come online!')
  })
})
