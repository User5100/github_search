import React, { Component } from 'react'
import styled from 'styled-components'
import { getIssues } from './helpers'

import Author from './Author'
import Labels from './Labels'
import Status from './Status'
import Results from './Results'

class App extends Component {
  constructor () {
    super()
    this.state = {
      queryParams: {
        issueState: 'open'
      },
      issues: []
    }

    this.handleClickIssueStatus = this.handleClickIssueStatus.bind(this)
  }

  handleClickIssueStatus (issueState) {
    let queryParams = Object.assign({}, this.state.queryParams, { issueState })

    getIssues(queryParams)
    .then(issues => {
      this.setState({ issues, queryParams })
    })
  }

  componentDidMount () {
    getIssues(this.state.queryParams)
      .then(issues => {
        this.setState({ issues })
      })
  }

  render () {
    let displayResults

    // Only display query results only if at least one issue is returned from gitHub
    if (this.state.issues.length) {
      displayResults = (
        <Results
          results={this.state.issues} />)
    }

    return (
      <div>
        <h1>Search Github App</h1>
        <Author />
        <Labels />
        <Status
          handleClickIssueStatus={this.handleClickIssueStatus} />
        {displayResults}
      </div>
    )
  }
}

export default App
