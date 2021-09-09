import React from 'react';

import { Background, Container } from './styles';

export default function BackgroundDefault({ children, ...rest }) {
  return (
    <Background {...rest}>
      <Container>{children}</Container>
    </Background>
  );
}
