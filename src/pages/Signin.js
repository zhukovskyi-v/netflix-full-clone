import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import Form from '../components/form'
import { FirebaseContext } from '../context/firebase'
import * as ROUTERS from '../constans/routes'

export default function Signin() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = password === '' || email === ''

  const handleSignIn = (event) => {
    event.preventDefault()
    //firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((el) => {
        localStorage.setItem('userInfo', JSON.stringify(el))
        history.push(ROUTERS.BROWSE)
      })
      .catch((error) => {
        setEmail('')
        setPassword('')
        setError(error.message)
      })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to="/signup">Sing Up now.</Form.Link>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure
              you're not a bot.
              <Form.Link to="">Learn more.</Form.Link>
            </Form.TextSmall>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
