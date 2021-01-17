import React from 'react'
import {
  LockBody,
  ReleaseBody,
  Spinner,
  Picture,
} from './styles/loading'

export function Loading({ src, ...rest }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}
