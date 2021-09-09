import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonRounded({ children, color, ...rest }) {
  return (
    <Container {...rest}>
      <Text color={color}>{children}</Text>
    </Container>
  );
}

ButtonRounded.propTypes = {
  children: PropTypes.string.isRequired,
};

ButtonRounded.defaultProps = {};
