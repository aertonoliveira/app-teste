import React from 'react';

// components

import {
  Container,
  HeaderContainer,
  FaqBackIcon,
  FaqTitle,
  FaqTextContainer,
  FaqText,
} from './styles';

// modules

function CheckFaq({ route, navigation }) {
  const { faqid } = route.params;
  return (
    <Container>
      <HeaderContainer onPress={() => navigation.goBack()}>
        <FaqBackIcon />
        <FaqTitle>Voltar</FaqTitle>
      </HeaderContainer>

      {faqid === 1 ? (
        <FaqTextContainer>
          <FaqText>
            Assim que você realiza o seu cadastro os seus documentos são
            enviados para análise onde verificamos e avaliamos o seu perfil,
            logo após a validação você está disponível para receber solicitações
            de serviços Negocie e passe orçamentos para os clientes pelo Chat do
            APP Uma dica importante: sempre que finalizar um serviço, peça ao
            cliente que deixe uma avaliação no seu perfil. Assim, os futuros
            clientes têm referências sobre o seu trabalho e isso se torna um
            diferencial na hora da decisão final do cliente.
          </FaqText>
        </FaqTextContainer>
      ) : faqid === 2 ? (
        <FaqTextContainer>
          <FaqText>
            É bem simples ver suas solicitações, todas as solicitações
            apareceram no seu menu inicial, onde você pode aceitar ou recusar o
            serviço, na parte inferior do seu menu tem um botão escrito serviços
            Lá contem os seus serviços futuros e o seu histórico de serviços.
          </FaqText>
        </FaqTextContainer>
      ) : faqid === 3 ? (
        <FaqTextContainer>
          <FaqText>
            Receba após a finalização do serviço, solicite a transferência dos
            seus ganhos para um banco de sua preferência
          </FaqText>
        </FaqTextContainer>
      ) : null}
    </Container>
  );
}

export default CheckFaq;
// Desenvolvido por Guilherme Valerio
