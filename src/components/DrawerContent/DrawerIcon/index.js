import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { DrawerItems } from './styles';

function DrawerIcon({ icon, label }) {
  return (
    <DrawerItems
      icon={({ color, size }) => (
        <Icon name="exit-to-app" color="red" size={size} />
      )}
      label="Sair"
      labelStyle={{ color: 'red', fontWeight: 'bold' }}
      onPress={handleLogout}
    />
  );
}

export default DrawerIcon;
