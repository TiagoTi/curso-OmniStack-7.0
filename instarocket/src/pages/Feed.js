import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import camera from '../assets/camera.png'


export default class Feed extends Component {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity onPress={()=>{}} style={{marginRight: 20}}>
        <Image source={camera} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
        <View >
        <Text >Welcome to React Feed!!</Text>
      </View>
    )
  }
}
