import React from 'react';

// components

import { View, Text, Image } from 'react-native';

// style

import { Container, Title, SubTitle } from './styles';

// modules

function Titles({ title, subTitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}

export default Titles;
// Desenvolvido por Hubert Ryan
