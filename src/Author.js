import React, { Component } from 'react'
import styled from 'styled-components'

class Author extends Component {
  constructor () {
    super()
    this.state = {
      issues: []
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
      Author
      </div>
    )
  }
}

export default Author
