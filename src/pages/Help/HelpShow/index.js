import React from 'react';

import { Container, Title, Description } from './styles';

export default function HelpShow({
  route: {
    params: { name, description },
  },
}) {
  return (
    <Container>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
