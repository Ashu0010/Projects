import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { Component } from 'react'

export default class Alert extends Component {
  render() {

    // const { route : { params : { Walls }} } = this.props

    return (
      // <View style={styles.main}>
      //   {/* <Text>{this.props.Featured.title}</Text> */}
      //   <FlatList
      //     showsVerticalScrollIndicator={false}
      //     data={Walls}
      //     renderItem={({ item }) => {
      //       return (
      //        <FlatList 
      //        numColumns={3}
      //        data={item?.gallery}
      //        renderItem={({item})=>{
      //         return(
      //           // activeOpacity={0} delayPressIn={100}
      //            <TouchableOpacity >
      //           <View style={styles.container}>
      //             <Image
      //               source={{ uri: item.coverImage }}
      //               style={styles.images}
      //             />
      //             <Text style={styles.textStyle}>{item.id}</Text>
      //           </View>
      //         </TouchableOpacity>
      //         )
      //        }}
      //        />
      //       )
      //     }}
      //   />
      // </View>
      null
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