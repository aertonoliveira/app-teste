import React, { useContext } from 'react';

import {
  Container,
  TopContainer,
  ContentImage4,
  TextInContent,
  AllButtonsContainer,
  ButtonContainer,
  ButtonOtherText,
  ButtonOtherBackText,
  BottomContainer,
  ServisaleLogo,
} from './styles';

import { useDispatch } from 'react-redux';

export default function IntroAppFourth({ navigation }) {
  async function handleFinishRegister() {
    navigation.navigate('SingIn');
  }

  return (
    <Container>
      <ContentImage4>
        <TopContainer>
          <ServisaleLogo />
        </TopContainer>
        <BottomContainer>
          <TextInContent>
            Faça negocios com clientes proximos a sua localização
          </TextInContent>
          <AllButtonsContainer>
            <ButtonContainer onPress={() => navigation.goBack()}>
              <ButtonOtherBackText>Anterior</ButtonOtherBackText>
            </ButtonContainer>
            <ButtonContainer onPress={() => handleFinishRegister()}>
              <ButtonOtherText>Próximo</ButtonOtherText>
            </ButtonContainer>
          </AllButtonsContainer>
        </BottomContainer>
      </ContentImage4>
    </Container>
  );
}
