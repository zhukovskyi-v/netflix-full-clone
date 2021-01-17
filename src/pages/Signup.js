import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import Form from '../components/form'
import { FirebaseContext } from '../context/firebase'
import * as ROUTERS from '../constans/routes'

export default function Signup() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid =
    firstName === '' || password === '' || email === ''
  console.log(isInvalid)
  const handleSignup = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTERS.BROWSE)
          })
      })
      .catch((error) => {
        setEmail('')
        setPassword('')
        setFirstName('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user?{' '}
            <Form.Link to={ROUTERS.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure
            you're not a bot.
            <Form.Link to="">Learn more.</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
