import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, Icon } from './styles';

export default function CardCategory({
  dataItem: { name, icon, id },
  ...rest
}) {
  const navigation = useNavigation();

  function handleNavigate(id_category) {
    navigation.navigate('Serviços', { id_category });
  }

  return (
    <Container onPress={() => handleNavigate(id)} {...rest}>
      <Icon source={{ uri: icon }} />
      <Text>{name}</Text>
    </Container>
  );
}

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

CardCategory.defaultProps = {};
