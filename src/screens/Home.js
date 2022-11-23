import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { Component } from 'react';
import Featured from '../component/Featured';
import Popular from '../component/Popular';
import PopularCollection from '../component/PopularCollection';
import { jsonData } from '../redux/action/jsonAction';
import { connect } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
  componentDidMount() {
    const { jsonData } = this.props;
    jsonData();
    // arr = [0, 1, 2]
  }

  // getHeaderComponent = () => {
  //   return (
  //     <View>
  //       <Text>Featured</Text>
  //       <Featured Featured ={ this.props.stateData?.DATA?.data && this.props.stateData?.DATA?.data} />
  //     </View>
  //   );
  // };

  // getHeaderSecondComponent = () => {
  //   return (
  //     <View>
  //       <Text>Popular Collections</Text>
  //       <PopularCollection PopularCollection={this.props.stateData?.DATA?.data && this.props.stateData?.DATA?.data} />
  //     </View>
  //   )
  // }
  //  <FlatList
  //               numColumns={3}
  //               ListFooterComponent={() => <View style={{ height: 100 }}></View>}
  //               ListHeaderComponent={this.getHeaderSecondComponent}
  //               showsVerticalScrollIndicator={false}
  //               data={stateData.DATA?.data[2]?.gallery}
  //               // ListFooterComponentStyle={{height:2000}}
  //               renderItem={({ item, index }) => {
  //                 return (
  //                   // index === 0 &&
  //                   <View>

  //                     <TouchableOpacity activeOpacity={0} delayPressIn={100}>
  //                       <View style={styles.main}>
  //                         <Image
  //                           source={{ uri: item.coverImage }}
  //                           style={styles.images}
  //                         />
  //                         <Text style={styles.textStyle}>{item.id}</Text>
  //                       </View>
  //                     </TouchableOpacity>
  //                   </View>
  //                   // index === 1 

  //                 );
  //               }}
  //             /> 


  render() {
    const { stateData } = this.props;
    // console.log('stateData?.DATA?.data======', stateData?.DATA?.data.gallery );
    // console.log("------------------>",stateData?.DATA);
    return (

      <SafeAreaView style={styles.container}>

        <ScrollView>
          <View style={{ margin: 3 }}>

            <Text style = {styles.text}>Featured</Text>

            <Featured Featured = {stateData?.DATA?.data && stateData?.DATA?.data} navigation = {this.props.navigation}/>


            <Text style ={styles.text}>Popular Collections</Text>

            <PopularCollection PopularCollection = {stateData?.DATA?.data && stateData?.DATA?.data} navigation = {this.props.navigation}/>

            <Text style = {styles.text}>Popular</Text>

            <Popular Popular = { stateData?.DATA?.data && stateData?.DATA?.data} navigation = {this.props.navigation}/>


          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const mapStateToProps = state => {
  return {
    stateData: state.jsonReducer,
  };
};

const mapDispatchToProps = {
  jsonData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
  },
  text:{
    color:'rgb(255,255,255)',
    fontSize:18,
    fontWeight:'600',
    marginVertical:10,
    marginTop:22
  },
  // main: {
  //   height: 230,
  //   width: 130,
  //   borderRadius: 10,
  //   marginBottom: 10,
  //   justifyContent: 'center',
  // },
  // textStyle: {
  //   position: 'absolute',
  //   bottom: 10,
  //   left: 10,
  //   fontSize: 16,
  //   fontWeight: '600',
  //   color: 'red',
  // },
  // images: {
  //   height: 230,
  //   width: 124,
  //   borderRadius: 10,
  // },
});
