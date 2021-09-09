/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Touchable } from '../../../Touchable';

import { Container, Input, TitleInput } from './styles';

function InputIcon(
  { style, title, passwordField, useIcon, iconState, iconFunction, ...rest },
  ref
) {
  const validPasswrod = !!passwordField;
  const [showPassword, setShowPassword] = useState(validPasswrod);
  const [iconPassword, setIconPassword] = useState('visibility');

  const togglePassword = () => {
    setShowPassword(previousState => !previousState);

    if (showPassword === true) {
      setIconPassword('visibility-off');
    } else {
      setIconPassword('visibility');
    }
  };

  return (
    <Container style={style}>
      <TitleInput>{title}</TitleInput>
      <Input secureTextEntry={showPassword} ref={ref} {...rest} />

      {passwordField && (
        <Touchable
          style={{
            alignSelf: 'flex-end',
            top: '-33%',
            right: 10,
          }}
          onPress={togglePassword}
        >
          <Icon name={iconPassword} size={20} color={'#FFF'} />
        </Touchable>
      )}
    </Container>
  );
}

InputIcon.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputIcon.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(InputIcon);
