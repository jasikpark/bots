const { connection, queries } = require('./db')

class DBUtil {
  constructor() {
    this.dbConnection = connection
  }

  insertUser(userId, githubUsername) {
    return this.db.models.Users.create({
      UserId: userId,
      GitHubUsername: githubUsername,
      createTimestamp: new Date(),
      lastUpdateTimestamp: new Date()
    })
  }

  async getUser(userId) {
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(
          queries.UserQueries.getUser(userId),
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
}

module.exports = DBUtil
