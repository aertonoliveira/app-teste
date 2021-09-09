import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { ContainerOther, Text } from './styles';

export default function ButtonPlanOther({ children, loading, ...rest }) {
  return (
    <ContainerOther {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
      <Text />
    </ContainerOther>
  );
}

ButtonPlanOther.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

ButtonPlanOther.defaultProps = {
  loading: false,
};
