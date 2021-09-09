import React from 'react';

import {
  Container,
  ImageView,
  InfoView,
  Name,
  Office,
  InfoText,
  BtnRequest,
  BtnArea,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProviderProfile() {
  return (
    <Container>
      <ImageView>
        <Icon name="account-circle" size={200} color={'#fff'} />
      </ImageView>
      <Name>Fulano Da Silva</Name>
      <Office>Developer</Office>
      <InfoView>
        <InfoText>ID -</InfoText>
        <InfoText>CPF -</InfoText>
        <InfoText>Status -</InfoText>
        <InfoText>Cidade -</InfoText>
        <InfoText>Estado -</InfoText>
        <InfoText>Avaliação profissional -</InfoText>
        <InfoText>Biografia -</InfoText>
      </InfoView>
      <BtnArea>
        <BtnRequest>SOLICITAR SERVIÇO</BtnRequest>
      </BtnArea>
    </Container>
  );
}
