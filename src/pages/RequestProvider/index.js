import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Status } from './styles';

export default function RequestProvider() {
  const status = useSelector(state => state.user.profile.status);

  return (
    <Container>
      <Status status={status} />
    </Container>
  );
}
