/* 集成高德地图 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';
import { requestLocationPermission } from './amap/utils'
import styles from './amap/styles'
import { MapView } from 'react-native-amap3d'

export default class extends Component {
  state = {
      showsCompass: true,
      showsScale: true,
      showsZoomControls: true,
      showsLocationButton: true,
  }

  componentDidMount() {
    requestLocationPermission()
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.controls}>
          <View style={styles.control}>
            <Text>指南针</Text>
            <Switch
              style={styles.switch}
              onValueChange={showsCompass => this.setState({ showsCompass })}
              value={this.state.showsCompass}
            />
          </View>
          <View style={styles.control}>
            <Text>比例尺</Text>
            <Switch
              style={styles.switch}
              onValueChange={showsScale => this.setState({ showsScale })}
              value={this.state.showsScale}
            />
          </View>
          <View style={styles.control}>
            <Text>定位</Text>
            <Switch
              style={styles.switch}
              onValueChange={showsLocationButton => this.setState({ showsLocationButton })}
              value={this.state.showsLocationButton}
            />
          </View>
          <View style={styles.control}>
            <Text>缩放</Text>
            <Switch
              style={styles.switch}
              onValueChange={showsZoomControls => this.setState({ showsZoomControls })}
              value={this.state.showsZoomControls}
            />
          </View>
        </View>
        <MapView
          locationEnabled={this.state.showsLocationButton}
          showsCompass={this.state.showsCompass}
          showsScale={this.state.showsScale}
          showsLocationButton={this.state.showsLocationButton}
          showsZoomControls={this.state.showsZoomControls}
          style={styles.map}
        />
      </View>
    )
  }
}
