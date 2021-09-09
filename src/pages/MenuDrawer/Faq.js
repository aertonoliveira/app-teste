import React, { useState } from 'react';

// components

import {
  Container,
  SearchContainer,
  SearchSubContainer,
  SearchIcon,
  SearchItem,
  CancelButtonContainer,
  CancelButtonText,
  FaqListContainer,
  FaqComponentContainer,
  FaqComponentSubContainer,
  FaqComponentTitle,
  FaqComponentSubTitle,
  FaqIcon,
} from './styles';

// modules

function Faq({ navigation }) {
  const [text, setText] = useState('');

  function manangeFaq(faqid) {
    navigation.navigate('CheckFaq', { faqid });
  }
  return (
    <Container>
      <SearchContainer>
        <SearchSubContainer>
          <SearchIcon />
          <SearchItem value={text} onChangeText={setText} />
        </SearchSubContainer>
        <CancelButtonContainer onPress={() => navigation.goBack()}>
          <CancelButtonText>Cancelar</CancelButtonText>
        </CancelButtonContainer>
      </SearchContainer>

      <FaqListContainer>
        <FaqComponentContainer onPress={() => manangeFaq(1)}>
          <FaqComponentSubContainer>
            <FaqComponentTitle>Como funciona a Servisale ?</FaqComponentTitle>
            <FaqComponentSubTitle>Clique para saber mais</FaqComponentSubTitle>
          </FaqComponentSubContainer>
          <FaqIcon />
        </FaqComponentContainer>
        <FaqComponentContainer onPress={() => manangeFaq(2)}>
          <FaqComponentSubContainer>
            <FaqComponentTitle>
              Como vejo minhas solicitações ?
            </FaqComponentTitle>
            <FaqComponentSubTitle>Clique para saber mais</FaqComponentSubTitle>
          </FaqComponentSubContainer>
          <FaqIcon />
        </FaqComponentContainer>
        <FaqComponentContainer onPress={() => manangeFaq(3)}>
          <FaqComponentSubContainer>
            <FaqComponentTitle>Como receberei meus ganhos ?</FaqComponentTitle>
            <FaqComponentSubTitle>Clique para saber mais</FaqComponentSubTitle>
          </FaqComponentSubContainer>
          <FaqIcon />
        </FaqComponentContainer>
      </FaqListContainer>
    </Container>
  );
}

export default Faq;
// Desenvolvido por Guilherme Valerio
