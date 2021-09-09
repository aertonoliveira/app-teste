import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { ViewHelp, BtnHelp, Name, ViewIcon } from './styles';

export default function CardHelp({ name, description }) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('HelpShow', { name, description });
  }

  return (
    <ViewHelp>
      <BtnHelp onPress={handleNavigate}>
        <Name>{name}</Name>
        <ViewIcon>
          <Icon name={'keyboard-arrow-right'} size={35} color={'#FFF'} />
        </ViewIcon>
      </BtnHelp>
    </ViewHelp>
  );
}
