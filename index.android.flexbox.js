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
  View,
  Button,
  Alert
} from 'react-native';

export default class PlatziMusic extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.green]} />
        <View style={[styles.box, styles.blue]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    flexDirection: 'row',
    //justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
  },
  box: {
    width: 150,
    height: 200,
    backgroundColor: 'black'
  },
  red: {
    //alignSelf: 'flex-end',
    //flex: 2,
    backgroundColor: 'red'
  },
  green: {
    //alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: 'green'
  },
  blue: {
    //flex: 1,
    backgroundColor: 'blue'
  },
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
