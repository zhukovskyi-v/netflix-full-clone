import JumbotronContainer from '../containers/jumbotrone'
import FaqContainer from '../containers/jaq'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import OptForm from '../components/opt-form'
import Feature from '../components/feauture'
import { useHistory } from 'react-router-dom'
import * as ROUTERS from '../constans/routes'

export default function HomePage() {
  const history = useHistory()
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited movies, TV shows, and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel anytime.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email" />
            <OptForm.Button
              onClick={() => {
                history.push(ROUTERS.SIGN_UP)
              }}
            >
              Try it now
            </OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart
              you membership
            </OptForm.Text>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  )
}
