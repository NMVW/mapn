import React from 'react';
import { View } from 'react-native';

import List from './shared/list';

export default class Pins extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <List sections={this.props.pins} />
      </View>
    );
  }
}
