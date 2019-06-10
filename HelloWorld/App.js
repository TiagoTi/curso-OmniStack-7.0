import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class HelloWorldApp extends Component {


  render() {
    let pictureURI = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }
    return (
      <View style={ styles.container }>
        <Text style={ styles.textDefault }>Hello, world!</Text>
        <Image source={ pictureURI } style={ styles.picture } />
      </View>
    );
  }


}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textDefault:{
    backgroundColor: '#777777',
    color: '#000000'
  },
  picture: {
    width: 250,
    height: 150
  }
})