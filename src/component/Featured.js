import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import PopularCollection from '../component/PopularCollection'

export default class Featured extends Component {

  onPressImage = item => {
    const {navigation} = this.props;
    navigation.navigate('Walls', { Wallpaper : item});
  };

  render() {
    return (
      <View >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.Featured}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => { this.onPressImage(item); }}>
                <View style={styles.container}>
                  <Image
                    source={{ uri: item.coverImage }}
                    style={styles.images}
                  />
                  <Text style={styles.textStyle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 105,
    width: 149,
    marginLeft: 4,
    borderRadius: 8,
  },
  textStyle: {
    position: 'absolute',
    bottom: 7,
    left: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(255,255,255)'
  },
  images: {
    height: 100,
    width: 150,
    borderRadius: 10,
  },

})