const { Command } = require('discord.js-commando')
const { DBUtil, GHUtil } = require('../../lib/utils')

class ConfigCommand extends Command {
  constructor(client) {
    super(client, {
      description: '',
      group: 'users',
      memberName: 'config',
      name: 'config',
      aliases: ['cfg'],
      args: [
        {
          key: 'operation',
          prompt: 'What kind of operation (get|set) would you like to perform?',
          oneOf: ['get', 'set'],
          type: 'string'
        },
        {
          key: 'property',
          prompt: 'Which property would you like to get/set?',
          type: 'string'
        },
        {
          key: 'value',
          prompt: 'If setting the value, what should it be?',
          type: 'string',
          default: 'N/A'
        }
      ]
    })

    this.ghUtil = new GHUtil()
    this.dbUtil = new DBUtil()
  }

  async run(message, { operation, property, value }) {
    switch (operation.toLowerCase()) {
      case 'get': {
        if (property.toLowerCase() === 'username') {
          const dbRes = await this.dbUtil.getUser(message.author.id)

          return message.say(dbRes[0].GitHubUsername)
        }
        break
      }

      case 'set': {
        if (args.value === 'username') {
          this.dbUtil.dbConnection.query(
            `UPDATE Users (GitHubUsername = '${value}') WHERE UserID = '${message.author.id}'`
          )
        }
        break
      }

      default: {
        break
      }
    }

    return message.say('Hello, there!')
  }
}

module.exports = ConfigCommand
