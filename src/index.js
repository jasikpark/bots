const { CommandoClient } = require('discord.js-commando')
const { join } = require('path')

const client = new CommandoClient({
  commandPrefix: 'a!',
  owner: [
    '709083909996019845',
    '219270060936527873',
    '217474298594590720',
    '812388028282437653'
  ],
  invite: 'https://discord.gg/uFdzTvtB2Z'
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

client
  .login('ODU0Mzg4ODMwODgzMDIwODEw.YMjNmw.9YSK9I-pAc1whMvsE0gVuFxh2cM')
  .then(() => {
    client.channels.cache.get('854359108820008960').send('Hello!')
  })
