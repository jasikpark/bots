// const local = require('../../local.settings.json')

/**
 * The object containing all of the properties that are needed for the bot to
 * function properly.
 */
const Config = {
  /** The bot token provided by Discord. */
  authToken: process.env.DISCORD_TOKEN,

  /** The character(s) to precede every command message. */
  commandPrefix: process.env.COMMAND_PREFIX,

  /** An optional string that is an invite to the bot support server. */
  invite: process.env.INVITE,

  /**
   * The channel where the bot should post "system" messages, such as when it
   * comes online.
   */
  homeChannel: process.env.HOME_CHANNEL,

  /** The user IDs of the bot owners. */
  ownerIds: process.env.OWNER_IDS.includes(',')
    ? process.env.OWNER_IDS.split(',')
    : process.env.OWNER_IDS,

  /** Contains the necessary properties to connect to the DB. */
  db: {
    /** Username to use for authentication. */
    username: process.env.DB_USERNAME,

    /** Password to use for authentication. */
    password: process.env.DB_PASSWORD,

    /** The HOSTNAME/DNS address of the DB. */
    hostname: process.env.DB_HOSTNAME,

    /** The Sequelize dialect to use for the DB. */
    dialect: process.env.DB_DIALECT,

    /** The name of the database to connect to. */
    dbName: process.env.DB_NAME,

    /** Whether or not to enable Sequelize logging. */
    logging: true
  }
}

module.exports = Config
