import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import io from 'socket.io-client'

import camera from '../assets/camera.png'
import more from '../assets/more.png'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import send from '../assets/send.png'

import api from '../services/api'
import styles from './Styles'


export default class Feed extends Component {
  state = {
    feed: []
  }


  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('New')}
        style={{ marginRight: 20 }}>
        <Image source={camera} />
      </TouchableOpacity>
    )
  })


  handleLike = id => {
    api.post(`/posts/${id}/likes`)
  }

  registerToSocket = () => {
    const socket = io('http://172.16.0.30:3333')


    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ... this.state.feed] })
    })

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
      })
    })
  }

  async componentDidMount() {
    this.registerToSocket()
    const response = await api.get('posts');
    this.setState({ feed: response.data })
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (

            <View style={styles.feedItem}>
              <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{item.author}</Text>
                  <Text style={styles.place}>{item.place}</Text>
                </View>

                <Image source={more} />
              </View>

              <Image source={{ uri: `http://172.16.0.30:3333/files/${item.image}` }} style={styles.feedImage} />

              <View style={styles.feedItemFooter}>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.action} onPress={() => this.handleLike(item._id)}>
                    <Image source={like} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} onPress={() => { }}>
                    <Image source={comment} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} onPress={() => { }}>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.likes}>{item.likes} curtidas</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.hashtags}>{item.hastags}</Text>
            </View>
          )}
        />
      </View>
    )
  }


}
