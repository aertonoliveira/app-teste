import React from 'react';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderContainer,
  BtnMenu,
  Logo,
  Separator,
  IconClose,
  IconMenu,
} from './styles';

export default function HeaderDrawer({ close }) {
  const navigation = useNavigation();

  if (close) {
    return (
      <Container>
        <HeaderContainer>
          <Logo />
          <BtnMenu onPress={() => navigation.navigate('Home')}>
            <IconClose />
          </BtnMenu>
        </HeaderContainer>
        <Separator />
      </Container>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <BtnMenu onPress={() => navigation.navigate('MenuDrawer')}>
          <IconMenu />
        </BtnMenu>
      </HeaderContainer>
      <Separator />
    </Container>
  );
}
