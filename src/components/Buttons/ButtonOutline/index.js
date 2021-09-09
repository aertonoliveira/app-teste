import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonOutline({ children, color, ...rest }) {
  return (
    <Container color={color} {...rest}>
      <Text color={color}>{children}</Text>
    </Container>
  );
}

ButtonOutline.propTypes = {
  children: PropTypes.string.isRequired,
};

ButtonOutline.defaultProps = {};
