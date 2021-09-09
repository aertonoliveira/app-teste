import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Balance,
  Name,
  Service,
  Date,
  Value,
  StatusView,
  StatusText,
  ContainerStatus,
  ContainerFooter,
} from './styles';

export default function CardRequest({ data }) {
  return (
    <Container elevation={5}>
      <ContainerStatus>
        <Date>Data: {data.date}</Date>
        <StatusView status={data.status}>
          <StatusText>{data.status}</StatusText>
        </StatusView>
      </ContainerStatus>
      <Service>Serviço: {data.service}</Service>
      <ContainerFooter>
        <Name>Profissional: {data.name}</Name>
        <Balance>R$ {data.value}</Balance>
      </ContainerFooter>
    </Container>
  );
}
