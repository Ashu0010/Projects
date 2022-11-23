import { Text, View, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';
import React, { Component } from 'react';

export default class PopularCollection extends Component {

  onPressImage = item => {
    const {navigation} = this.props;
    navigation.navigate('Walls', { Wallpaper : item});
  };

  render() {
    
    return (
      <View>
        {/* <Text>{this.props.Featured.title}</Text> */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.PopularCollection}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity activeOpacity={0} delayPressIn={100} onPress={() => { this.onPressImage(item); }}>
                <View style={styles.container}>
                  <Image
                    source={{ uri: item.coverImage }}
                    style={styles.images}
                  />
                  <Text style={styles.textStyle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 173,
    width: 115,
    marginLeft: 1,
  },
  textStyle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(255,255,255)',
  },
  images: {
    height: 168,
    width: 113,
    borderRadius: 10,
    borderColor:'rgb(255,255,255)',
    borderWidth:3
  },
});
