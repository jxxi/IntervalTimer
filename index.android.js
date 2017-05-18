/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class IntervalTimer extends Component {
  render() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.headerGreen}>
          Welcome to IntervalTimer!
        </Text>
        <Text style={styles.instructions}>
          To get started, add an interval below
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  headerBlue: {
  	fontSize: 25,
	//color: '#0D3695',
	color: '#133887',
	textAlign: 'center',
  },
  headerGreen: {
  	fontSize: 25,
  	textAlign: 'center',
  	color: '#00982E',
  },
});

AppRegistry.registerComponent('IntervalTimer', () => IntervalTimer);
