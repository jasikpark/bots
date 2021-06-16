const { Command } = require('discord.js-commando')
const { DBUtil, GHUtil } = require('../../lib/utils')

class LinkCommand extends Command {
  constructor(client) {
    super(client, {
      description: 'Links your Discord user id to your GitHub username.',
      group: 'setup',
      memberName: 'link',
      name: 'link',
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
    try {
      const ghUtil = new GHUtil()
      const dbUtil = new DBUtil()

      const user = await ghUtil.validateUsername(args.ghUsername)
      if (user.status === 404) {
        return message.say(
          `The provided username (${args.ghUsername}) does not exist. Please try again.`
        )
      } else {
        await dbUtil.insertUser(message.author.id, args.ghUsername)

        return message.say(
          'Congratulations! Your Discord account is now associated with your GitHub Username.'
        )
      }
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return message.say(
          'There is already a GitHub account associated with your User ID.'
          // 'Please use the `a!update` command to change any settings.'
        )
      } else {
        console.error(
          'Generic error caught when attempting to run the insert command.'
        )
        console.error(err)
        return message.say(
          'I seem to have encountered an error my creators did not anticipate. ' +
            'Please let the developers know so they can refer to the logs and ' +
            'find out what happened.'
        )
      }
    }
  }
}

module.exports = LinkCommand
