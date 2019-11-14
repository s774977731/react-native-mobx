/**
 * @format
 */
 import React, { Component } from 'react';
 import {
   View,
   Text,
   AppRegistry
 } from 'react-native';
 import { Provider } from 'mobx-react';
import MobxApp from './app/MobxApp';
// import AmapApp from './app/AmapApp';
import {name as appName} from './app.json';
import * as AppState from './mobx/store';


class App extends Component {
  render() {
    return (
      <Provider store={AppState}>
        <MobxApp />
      </Provider>
    );
  }
}


AppRegistry.registerComponent(appName, () => App);
