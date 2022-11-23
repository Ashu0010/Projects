import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { Component } from 'react'


export default class Walls extends Component {
  render() {

    // const { route : { params : {Wallpaper}} } = this.props
    const walls = this.props.route.params.Wallpaper
    console.log('dxtdgchgvh======',walls)

    return (
      <View style={styles.main}>
        {/* <Text>{this.props.Featured.title}</Text> */}
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Image
              source={require('../utils/assets/icons/icons8-back-32.png')}
              style={styles.logo}
              resizeMode='contain' />
        </TouchableOpacity>
        <Text>
            
        </Text>
        </View> 
             <FlatList 
             numColumns={3}
             data={walls?.gallery}
             renderItem={({item})=>{
              return(
                // activeOpacity={0} delayPressIn={100}
                 <TouchableOpacity >
                <View style={styles.container}>
                  <Image
                    source={{ uri: item.coverImage }}
                    style={styles.images}
                  />
                  <Text style={styles.textStyle}>{item.id}</Text>
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
  main:{
    width:'100%',
    flex:1,
  },
  container: {
    height: 230,
    width: 129,
    borderRadius: 10,
    marginBottom: 3,
  },
  textStyle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgb(255,255,255)',
  },
  images: {
    height: 230,
    width: 126,
    borderRadius: 10,

  },
})