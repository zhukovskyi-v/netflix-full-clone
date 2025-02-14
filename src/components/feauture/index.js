import React from 'react'
import { Container, SubTitle, Title } from './styles/feature'

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Feature.Title = function FeatureTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>
}
Feature.SubTitle = function FeatureSubTile({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
