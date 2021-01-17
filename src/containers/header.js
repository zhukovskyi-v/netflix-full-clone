import React from 'react'
import Header from '../components/header'
import * as ROUTERS from '../constans/routes'
import logo from '../netflix.svg'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTERS.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTERS.SIGN_IN}>
          Sing In
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
