import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Map from './components/map';
import Pins from './components/pins';

const initData = {
  pins: [
    {title: 'NoBo', data: ['Dummy Pin 1']},
    {title: 'SoBo', data: ['Dummy Pin 2', 'Dummy Pin 3', 'Dummy Pin 4']},
    {title: 'CU', data: ['Dummy Pin 5']}
  ],
  markers: [
    {
      title: 'Pizza Hut', description: 'Fine dining',
      latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    }
  ]
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map style={styles.map} markers={initData.markers} />
        <Pins style={styles.pins} pins={initData.pins} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pins: {
    flex: 1,
    // width: 100,
    // height: 100,
    // flex: 1,
    // paddingTop: 22,
    flexDirection: 'column',
    alignSelf: 'flex-end'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
