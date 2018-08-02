import React, {Component} from 'react';
import {View, Image,Button,Text , StyleSheet} from 'react-native';
import axios from 'axios'

import MapView , {Marker}from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const LATITUDE = -6.302403;
const LONGITUDE = 106.652248;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.015;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCy55tluaNAxGtS865GiS-pvteVhQPQ5R4'

class Home extends Component {
  constructor(){
    super();
    this.state = {coordinates:[
      {latitude: -6.302403, longitude: 106.652248},
      {latitude: -6.299461, longitude: 106.663339},],}
  }
  render(){
    return(
        <MapView
          initialRegion={{
            latitude: LATITUDE, longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}>
          <MapView.Marker
            coordinate={this.state.coordinates[0]}/>
          <MapView.Marker
            coordinate={this.state.coordinates[1]}/>
          <MapViewDirections
            origin={this.state.coordinates[0]}
            destination={this.state.coordinates[1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"/>
        </MapView>
      
    )
  }
}
export default Home