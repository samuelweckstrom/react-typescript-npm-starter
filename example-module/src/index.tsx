import React from 'react'

interface Props {
  propNumber?: number,
  propString?: string,
}

const ExampleModule: React.SFC<Props> = (props): React.ReactElement => {
  console.log('** <ExampleModule />', { props })
  return (
    <h1>My example module</h1>
  )
}

export default ExampleModule
