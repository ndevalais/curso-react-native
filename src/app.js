import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons'

import ArtistList from './artistList'
import { getArtists } from './apis-client'

export default class PlatziMusic extends Component {
  state = {
    artists: []
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists
    //console.warn('artists', artists)
    /*const artist = {
      image: 'https://lastfm-img2.akamaized.net/i/u/300x300/31a51f6e3ec647c8997150ec837891c7.png',
      name: 'David Bowie',
      likes: 200,
      comments: 140
    }
    const artists = Array(4).fill(artist)*/

    return (
      
      <View style={styles.container}>
        <ArtistList artists={artists} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
