import React from 'react'
import * as ROUTES from '../constans/routes'
import logo from '../netflix.svg'
import Header from '../components/header'
import { Profiles } from '../components/profiles'

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}
