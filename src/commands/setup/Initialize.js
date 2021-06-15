const { Command } = require('discord.js-commando')

class InitializeCommand extends Command {
  constructor(client) {
    super(client, {
      description: 'The first command to run when joining the Astro community.',
      group: 'setup',
      memberName: 'init',
      name: 'initialize',
      aliases: ['init'],
      args: [
        {
          key: 'ghUsername',
          prompt: 'What is your GitHub username?',
          label: 'GitHub Username'
        }
      ]
    })
  }

  async run(message, args) {
    return message.say(
      `If I'm not mistaken, your GitHub username is @${args.ghUsername}`
    )
  }
}

module.exports = InitializeCommand
