/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { RealmProvider } from 'react-native-realm';
import Aplications from './src/index';

export default class Example extends Component {
  render() {
    return (
        <Aplications />
    );
  }
}