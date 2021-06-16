const UserConfigConstants = {
  properties: ['github.username', 'discord.id'],
  args: [
    {
      key: 'operation',
      prompt: 'What kind of operation (get|set) would you like to perform?',
      oneOf: ['get', 'set'],
      type: 'string'
    }
  ]
}

module.exports = { UserConfigConstants }
