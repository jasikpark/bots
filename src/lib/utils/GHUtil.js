const { Octokit } = require('@octokit/rest')

class GHUtil {
  constructor() {
    this.gh = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })
  }

  async validateUsername(username) {
    try {
      const { data, status, headers, url } = await this.gh.users.getByUsername({
        username
      })

      if (status === 200) {
        return data
      } else {
        // console.log(status)
        // console.log(data)
        // console.log(headers)
        // console.log(url)

        return false
      }
    } catch (err) {
      return err
    }
  }
}

module.exports = GHUtil
