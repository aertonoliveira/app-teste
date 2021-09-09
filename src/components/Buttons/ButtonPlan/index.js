import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonPlan({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
      <Text />
    </Container>
  );
}

ButtonPlan.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

ButtonPlan.defaultProps = {
  loading: false,
};
