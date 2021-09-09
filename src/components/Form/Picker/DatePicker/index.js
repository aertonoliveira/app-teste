import React from 'react';

import { Picker } from './styles';

function DatePicker({ ...rest }) {
  return (
    <Picker
      {...rest}
      timeZoneOffsetInMinutes={0}
      value={new Date()}
      is24Hour={true}
      display="spinner"
    />
  );
}

export default DatePicker;
