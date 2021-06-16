const { Command } = require('discord.js-commando')
const { DBUtil } = require('../../lib')

class MyInfoCommand extends Command {
  constructor(client) {
    super(client, {
      description: 'List the latest builds within the Astro dev ecosystem.',
      group: 'users',
      aliases: ['me'],
      memberName: 'myinfo',
      name: 'myinfo'
    })
  }

  async run(message) {
    const dbUtil = new DBUtil()
    const dbRes = await dbUtil.getUser(message.author.id)

    await message.say('Here is all of the information we stored for you:')
    return message.say(
      `\`\`\`json\n${JSON.stringify(dbRes, undefined, 2)}\n\`\`\``
    )
  }
}

module.exports = MyInfoCommand
