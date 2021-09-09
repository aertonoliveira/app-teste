import React from 'react';

import { Check } from './styles';

export default function Checkbox({ data, acceptDate, ...rest }) {
  return (
    <Check
      {...rest}
      onValueChange={value => {
        value ? acceptDate(new Date()) : acceptDate('');
      }}
    />
  );
}
