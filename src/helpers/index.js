import axios from 'axios'

export function getIssues(queryParams) {
  let { issueState } = queryParams

  return axios
		.get(`https://api.github.com/repos/atom/atom/issues?state=${issueState}`)
		.then(res => res.data)
}
