import React from 'react';

import { Container } from './styles';

export default function List({ ...rest }) {
  return <Container {...rest} />;
}
