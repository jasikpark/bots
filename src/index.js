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
    ['builds', 'Commands related to the builds of Astro products/projects.'],
    [
      'users',
      'Commands related to all things user related. Such as displaying stored data, modifying existing data, etc.'
    ]
  ])
  .registerDefaultCommands()
  .registerCommandsIn(join(__dirname, 'commands'))

client.once('ready', () => {
  client?.user?.setActivity('with Astro.build')
})

client.on('error', console.error)

client.login(authToken).then(() => {
  client.channels.fetch(homeChannel).then(channel => {
    channel.send('Astro-bot has come online!')
    console.log('Astro-bot has come online!')
  })
})
