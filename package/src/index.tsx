import React from 'react'

interface Props {
  propNumber?: number,
  propString?: string,
}

const Package: React.SFC<Props> = (props): React.ReactElement => {
  console.log('** <Package /> render', { props })
  return (
    <h1>My React TypeScript package</h1>
  )
}

export default Package
