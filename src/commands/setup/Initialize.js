const { Command } = require('discord.js-commando')

class InitializeCommand extends Command {
  constructor(client) {
    super(client, {
      description: 'The first command to run when joining the Astro community.',
      group: 'setup',
      memberName: 'init',
      name: 'initialize',
      aliases: ['init']
    })
  }

  async run(message) {
    return message.say('Working!')
  }
}

module.exports = InitializeCommand
