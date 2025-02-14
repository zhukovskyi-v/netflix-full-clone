import React from 'react'
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Break,
} from './styles/jumbotron'

const Jumbotron = ({
  children,
  direction = 'row',
  ...restProps
}) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}
export default Jumbotron

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}) {
  return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />
}
Jumbotron.Break = function JumbotronBreak({ ...restProps }) {
  return <Break {...restProps} />
}
