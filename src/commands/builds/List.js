const { Command } = require('discord.js-commando')

class ListCommand extends Command {
  constructor(client) {
    super(client, {
      description: 'List the latest builds within the Astro dev ecosystem.',
      group: 'builds',
      memberName: 'list',
      name: 'list'
    })
  }

  async run(message) {
    return message.say('Working!')
  }
}

module.exports = ListCommand
