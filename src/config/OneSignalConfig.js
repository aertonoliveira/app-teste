import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';

import api from '../services/api';

export default class OneSignalConfig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: '',
      user: '',
    };

    OneSignal.init('0379bd9b-ca58-4e02-9ca0-750b376811be');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);

    this.state = { user: props.idUser };
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (data) => {};
  onOpened = (notification) => {};

  onIds = (id, props) => {
    this.state = { user: this.props.idUser, playerId: id.userId };

    async function save(user, playerId) {
      const response = await api.put('/user-notification', {
        id: user.id,
        notification: playerId,
      });
    }

    if (this.props.idUser) {
      save(this.state.user, this.state.playerId);
    }
  };

  render() {
    return <></>;
  }
}
