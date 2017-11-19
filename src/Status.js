import React, { Component } from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'

class Status extends Component {
  constructor () {
    super()
    this.state = {
      statuses: ['open', 'closed', 'all']
    }
  }

  render () {
    let statuses = this.state.statuses

    return (
      <div
        style={{ border: '2px solid lightblue '}}>
      Status
      <ul>
        {statuses.map(status => (
          <li key={status}>
            <button
              onClick={
                () => this.props.handleClickIssueStatus(status)}>{status}
            </button>
          </li>
        ))}
      </ul>
      </div>
    )
  }
}

Status.propTypes = {
  handleClickIssueStatus: func.isRequired
}

export default Status
