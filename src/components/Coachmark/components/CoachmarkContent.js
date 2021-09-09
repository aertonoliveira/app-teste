import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class CoachmarkContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.messageText}>{this.props.message}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginHorizontal: 16,
    backgroundColor: '#000',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  message: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 1,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.15,
    color: '#fff',
  },
  button: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#183b6a',
    fontWeight: 'bold',
  },
});
