/* 集成mbox */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { observer,inject } from 'mobx-react';

@inject("store")
@observer
export default class extends Component {

  constructor(porps) {
      super(porps);
      this.count = this.props.store.count;
  }

  componentDidMount() {
      console.log(this.count.counter);
      setInterval(() => {
          this.count.add();
      }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 100}}>{this.count.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
