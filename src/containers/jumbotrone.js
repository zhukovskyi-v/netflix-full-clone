import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import Jumbotron from '../components/jumbotrone'

export default function JumbotronContainer() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((el) => (
          <Jumbotron key={el.id} direction={el.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{el.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>
                {el.subTitle}
              </Jumbotron.SubTitle>
            </Jumbotron.Pane>

            <Jumbotron.Pane>
              <Jumbotron.Image
                src={el.image}
                alt={el.alt}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  )
}
