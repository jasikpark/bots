const { resolve } = require('path/posix')
const { connection } = require('./db')
const { UserQueries } = require('./db/queries')

class DBUtil {
  constructor() {
    this.dbConnection = connection
  }

  async insertUser(userId, githubUsername) {
    return new Promise((resolve, reject) => {
      try {
        this.dbConnection.query(
          UserQueries.insertUser(userId, githubUsername),
          (err, res) => {
            if (err) reject(err)
            else resolve(res)
          }
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  async getUser(userId) {
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(UserQueries.getUser(userId), (err, res) => {
          if (err) reject(err)
          else resolve(res)
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}

module.exports = DBUtil
