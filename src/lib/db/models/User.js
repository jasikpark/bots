const Sequelize = require('sequelize')

const UserModel = db => db.define('user', {
  UserId: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false
  },
  GitHubUsername: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false
  },
  CreateTimestamp: {
    type: Sequelize.DATE,
    allowNull: true
  },
  LastUpdateTimestamp: {
    type: Sequelize.DATE,
    allowNull: false,
    default: new Date()
  }
})

module.exports = UserModel
