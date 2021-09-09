import React from 'react';

// components

import {
  Container,
  ServiceImage,
  BottomContainer,
  Title,
  UserServiceContainer,
  ProfileContainer,
  Profile,
  ProfileUsername,
  Km,
  SubTitle,
  CheckoutService,
  IconSuccess,
} from './styles';

// modules

function Service({ navigation, data }) {
  function handleCheckout() {
    navigation.navigate('CheckService', { data });
  }

  return (
    <Container>
      <ServiceImage
        source={{
          uri: data.users.avatar
            ? data.users.avatar.path
            : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',
        }}
      />
      <BottomContainer>
        <UserServiceContainer>
          <ProfileContainer>
            <Profile
              source={{
                uri: data.servicesuser.service
                  ? data.servicesuser.service.icon
                  : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',
              }}
            />
            <ProfileUsername>client</ProfileUsername>
          </ProfileContainer>
          {/* <Km>{data.km}</Km> */}
        </UserServiceContainer>
        <Title>{data.title}</Title>
        <SubTitle>{data.description}</SubTitle>
      </BottomContainer>
      <CheckoutService onPress={() => handleCheckout()}>
        <IconSuccess />
      </CheckoutService>
    </Container>
  );
}

export default Service;
// Desenvolvido por Hubert Ryan
