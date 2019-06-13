import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import api from '../services/api'
import styles from './Styles'


export default class New extends Component {


  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hastags: ''
  }


  static navigationOptions = {
    headerTitle: 'Nova publicação'
  }


  render() {
    return (
      <View style={styles.container}>
        <Text >Welcome to React New!</Text>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.selectButton}
        >
          <Text style={styles.selectButtonText}>Selecionar Image</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Onde o post fui criado"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={place => this.setState({ place })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicone uma descrição para o post"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe tags para o post"
          placeholderTextColor="#999"
          value={this.state.hastags}
          onChangeText={hastags => this.setState({ hastags })}
        />
      </View>
    )
  }
}
