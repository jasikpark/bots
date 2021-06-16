const getUsers = 'SELECT * FROM Users'
const getUser = userId => `SELECT * FROM USERS WHERE UserID = '${userId}'`
const insertUser = (userId, githubUsername) => {
  return `
  INSERT INTO Users (UserID, GitHubUsername, CreateTimestamp, LastUpdateTimestamp)
  VALUES ('${userId}', '${githubUsername}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  `
}

module.exports = {
  getUser,
  getUsers,
  insertUser
}
