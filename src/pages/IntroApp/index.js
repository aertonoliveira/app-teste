import React from 'react';

import {
  Container,
  TopContainer,
  ContentImage1,
  TextInContent,
  ButtonContainer,
  ButtonText,
  BottomContainer,
  ServisaleLogo,
} from './styles';

export default function IntroApp({ navigation }) {
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
      <ContentImage1>
        <TopContainer>
          <ServisaleLogo />
        </TopContainer>
        <BottomContainer>
          <TextInContent>
            Realize seu cadastro para que clientes possam encontrar você
          </TextInContent>
          <ButtonContainer
            onPress={() => navigation.navigate('IntroAppSecond')}
          >
            <ButtonText>Próximo</ButtonText>
          </ButtonContainer>
        </BottomContainer>
      </ContentImage1>
    </Container>
  );
}
