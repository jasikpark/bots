const mysql = require('mysql2')
const queries = require('./queries')

const connection = mysql.createConnection(process.env.DB_CONNECTION_STRING)

module.exports = {
  connection,
  queries
}

// const Sequelize = require('sequelize')
// const { db: config } = require('../Config')
// const UserModel = require('./models/User')

// const db = new Sequelize(config.dbName, config.username, config.password, {
//   host: config.hostname,
//   dialect: config.dialect,
//   logging: config.logging
// })

// UserModel(db).sync()

// module.exports = {
//   db,
//   models: {
//     Users: UserModel(db)
//   }
// }
