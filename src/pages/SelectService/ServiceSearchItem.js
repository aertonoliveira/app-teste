import React from 'react';

// components

import {
  ServiceSearchItemContainer,
  ServiceSearchSubContainer,
  ServiceSearchTitle,
  ServiceSearchCategory,
  ServiceSearchIcon,
} from './styles';

// modules

function ServiceSearchItem({ item, navigation }) {
  function goNewRequests() {
    navigation.navigate('NewRequest', {
      name: item.name,
      categoryName: item.categoryName,
    });
  }

  return (
    <ServiceSearchItemContainer onPress={() => goNewRequests()}>
      <ServiceSearchSubContainer>
        <ServiceSearchTitle>{item.name}</ServiceSearchTitle>
        <ServiceSearchCategory>{item.categoryName}</ServiceSearchCategory>
      </ServiceSearchSubContainer>
      <ServiceSearchIcon />
    </ServiceSearchItemContainer>
  );
}

export default ServiceSearchItem;
// Desenvolvido por Hubert Ryan
