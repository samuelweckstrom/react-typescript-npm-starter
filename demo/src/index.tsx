import React from 'react'
import ReactDOM from 'react-dom'
import ExampleModule from 'example-module'
import './styles.css'

const App: React.SFC = (): React.ReactElement => {
  return (
    <div className="wrapper">
      <h1>Demo</h1>
      <ExampleModule propNumber={333} propString="test-string" />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))