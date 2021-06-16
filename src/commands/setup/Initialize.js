const { Command } = require('discord.js-commando')
const DBUtil = require('../../lib/DBUtil')

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
          label: 'GitHub Username',
          type: 'string'
        }
      ]
    })
  }

  async run(message, args) {
    const dbUtil = new DBUtil()
    const dbRes = await dbUtil.createUser(message.author.id, args.ghUsername)
    console.log(dbRes)
    return message.say(
      `I think I stored it correctly...`
    )
  }
}

module.exports = InitializeCommand
