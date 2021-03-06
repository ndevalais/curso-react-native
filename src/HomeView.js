import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons'

import ArtistList from './artistList'
import { getArtists } from './apis-client'

export default class HomeView extends Component {
  state = {
    artists: []
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists
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
