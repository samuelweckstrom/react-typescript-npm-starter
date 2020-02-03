import React from 'react'
import ReactDOM from 'react-dom'
import Package from 'package'
import './styles.css'

const App: React.SFC = (): React.ReactElement => {
  return (
    <div className="wrapper">
      <Package propNumber={333} propString="test-string" />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))