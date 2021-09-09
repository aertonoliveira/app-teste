import React from 'react';

import {
  Container,
  TopContainer,
  ContentImage2,
  TextInContent,
  AllButtonsContainer,
  ButtonContainer,
  ButtonOtherText,
  ButtonOtherBackText,
  BottomContainer,
  ServisaleLogo,
} from './styles';

export default function IntroAppSecond({ navigation }) {
  // const renderItem = ({ item: { title, image, text } }) => {
  //   return (
  //     <Content>
  //       <Image source={{ uri: image }} />
  //       <Title>{title}</Title>
  //       <Description>{text}</Description>
  //     </Content>
  //   );
  // };

  return (
    <Container>
      <ContentImage2>
        <TopContainer>
          <ServisaleLogo />
        </TopContainer>
        <BottomContainer>
          <TextInContent>
            Após a realizacao completa de seu cadastro levaremos 48 horas para
            analisar seu perfil
          </TextInContent>
          <AllButtonsContainer>
            <ButtonContainer onPress={() => navigation.goBack()}>
              <ButtonOtherBackText>Anterior</ButtonOtherBackText>
            </ButtonContainer>
            <ButtonContainer
              onPress={() => navigation.navigate('IntroAppThird')}
            >
              <ButtonOtherText>Próximo</ButtonOtherText>
            </ButtonContainer>
          </AllButtonsContainer>
        </BottomContainer>
      </ContentImage2>
    </Container>
  );
}
