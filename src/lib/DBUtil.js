const { connection } = require('./db')
const { UserQueries } = require('./db/queries')

/**
 * Formats the given array of rows into an easier to read format.
 *
 * @param {Object[]} rows The rows from the DB to format.
 */
const prettyRows = rows => {
  const rowsOut = []

  for (const row of rows) {
    const rowObj = {}

    for (const key of Object.keys(row)) {
      rowObj[key] = row[key]
    }

    rowsOut.push(rowObj)
  }

  return rowsOut
}

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
        this.dbConnection.query(UserQueries.getUser(userId), (err, res) => {
          if (err) reject(err)
          else resolve(prettyRows(res))
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  async getUsers() {
    return new Promise((resolve, reject) => {
      try {
        this.dbConnection.query(UserQueries.getUsers, (err, res) => {
          if (err) reject(err)
          else resolve(prettyRows(res))
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}

module.exports = DBUtil
