import React from 'react'

const Results = (props) => (
  <div>
    <h3>Results</h3>
    <ul>
      {props.results.map(result => (
        <li
          key={result.id}>{result.title}</li>
			))}
    </ul>
  </div>
)

export default Results
