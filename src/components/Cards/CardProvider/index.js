import React from 'react';

import {
  ViewProviver,
  BtnProvider,
  ViewAvatar,
  Name,
  Office,
  ViewStar,
  StarText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CardProvider({ avatar, name, office }) {
  return (
    <ViewProviver>
      <BtnProvider>
        <ViewAvatar>
          <Icon name={avatar} size={70} color={'#4F4F4F'} />
        </ViewAvatar>
        <Name>{name}</Name>
        <Office>{office}</Office>
        <ViewStar>
          <StarText> 4,5 </StarText>
          <Icon name={'star'} size={25} color={'#FFD700'} />
        </ViewStar>
      </BtnProvider>
    </ViewProviver>
  );
}
