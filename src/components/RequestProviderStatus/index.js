import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  IconStatus,
  Description,
  ButtonActivate,
} from './styles';

export default function RequestProviderStatus({ status, ...rest }) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('SendDocuments');
  }

  return status === 'pending' ? (
    <Container {...rest}>
      <IconStatus name="timer" />
      <Title>Cadastro em Análise</Title>
      <Description>
        Estamos análisando seus documentos para a aprovação do seu cadastro
      </Description>
    </Container>
  ) : (
    <Container {...rest}>
      <IconStatus name="lock-outline" />
      <Title>Ative o acesso Prestador</Title>
      <Description>
        Complete o cadastro e preste serviços com a servisale
      </Description>
      <ButtonActivate onPress={handleNavigate}>Ativar</ButtonActivate>
    </Container>
  );
}
