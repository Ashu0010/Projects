import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import TabAlert from '../component/TabAlert';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default class TopTabNavigate extends Component {
  render() {
    return (
      // <Tab.Navigator screenOptions={{ headerShown: false }}>
      //     <Tab.Screen name="Home" component={Featured}
      //         options={{
      //             tabBarLabel: 'Home',
      //             tabBarIcon: () =>
      //                 <Image
      //                     source={require('../utils/assets/icons/icons8-home-page-50.png')}
      //                     style={styles.icon}
      //                     resizeMode='contain' />
      //         }} /
      // </Tab.Navigator>


      <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 14, color: 'rgb(255,255,255)', fontWeight: '700' }, tabBarStyle: { backgroundColor: 'rgb(0,0,0)' }, }}>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="CATEGORIES" listeners={{ tabPress: () => alert('Go To Home Tab ') }} component={TabAlert}/>
        <Tab.Screen name="PREMIUM" listeners={{ tabPress: () => alert('Go To0 Home Tab ') }} component={TabAlert} />
      </Tab.Navigator>


    );
  }
}

// const styles = StyleSheet.create({
//   icon: {
//     height: 21,
//   },
// });
