import React from 'react';

import {
  Container,
  TopContainer,
  ContentImage3,
  TextInContent,
  AllButtonsContainer,
  ButtonContainer,
  ButtonOtherText,
  ButtonOtherBackText,
  BottomContainer,
  ServisaleLogo,
} from './styles';

export default function IntroAppThird({ navigation }) {
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
      <ContentImage3>
        <TopContainer>
          <ServisaleLogo />
        </TopContainer>
        <BottomContainer>
          <TextInContent>
            Receba 50% para iniciar o serviço e o restante após a finalização
            com o cliente
          </TextInContent>
          <AllButtonsContainer>
            <ButtonContainer onPress={() => navigation.goBack()}>
              <ButtonOtherBackText>Anterior</ButtonOtherBackText>
            </ButtonContainer>
            <ButtonContainer
              onPress={() => navigation.navigate('IntroAppFourth')}
            >
              <ButtonOtherText>Próximo</ButtonOtherText>
            </ButtonContainer>
          </AllButtonsContainer>
        </BottomContainer>
      </ContentImage3>
    </Container>
  );
}
