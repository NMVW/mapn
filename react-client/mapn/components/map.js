import React from 'react';

import MapView from 'react-native-maps';

export default class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        style={this.props.style}
        provider={"google"}
        showsUserLocation={true}
        showsMyLocationButton={true}
        // followsUserLocation={true}
        // showsScale={true}
        // loadingEnabled={true}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
      >
        {
          this.props.markers.map(marker => (
            <MapView.Marker
              draggable
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              pinColor={"orange"}
              calloutAnchor={{x: 1, y: 0}}
            />
          ))
        }
      </MapView>
    );
  }
}
