import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import ImagePickert from 'react-native-image-picker'

import api from '../services/api'
import styles from './Styles'


export default class New extends Component {


  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hastags: '',
    preveiw: null
  }


  static navigationOptions = {
    headerTitle: 'Nova publicação'
  }


  handleSelectImage = () => {
    ImagePickert.showImagePicker({
      title: "Image para o post"
    }, upload =>{
      if (upload.error){
        console.log("Erro ao obter imagem")
      }else if (upload.didCancel){
        console.log("Usuairo cancelou a Imagem")
      } else {
        const preveiw = {
          uri: `data:image/jpeg;base64,${upload.data}`
        }

        this.setState({preveiw})
      }

    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text >Welcome to React New!</Text>
        <TouchableOpacity
          onPress={this.handleSelectImage}
          style={styles.selectButton}
        >
          <Text style={styles.selectButtonText}>Selecionar Image</Text>
        </TouchableOpacity>

        {this.state.preveiw && <Image style={styles.preview} source={this.state.preveiw}/>}

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

        <TouchableOpacity
          onPress={() => { }}
          style={styles.shareButton}
        >
          <Text style={styles.selectButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
