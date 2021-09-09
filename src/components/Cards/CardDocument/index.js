import React from 'react';

import {
  Container,
  Info,
  Title,
  Description,
  StatusView,
  Status,
} from './styles';

export default function CardDocument({ name, description, approved, ...rest }) {
  return (
    <Container {...rest}>
      <Info>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Info>
      {/* <StatusView>
        <Status approved={approved} name={approved ? 'check' : 'close'} />
     </StatusView> */}
    </Container>
  );
}
