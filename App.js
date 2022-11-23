// import { Text, View, SafeAreaView} from 'react-native'
// import React, { Component } from 'react'
// import TopTabNavigate from './src/navigation/TopTabNavigate'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex:1, paddingTop:30}}>
//         <TopTabNavigate />
//       </View>
//     )
//   }
// }

import React from 'react';
import store from './src/redux/store/store';
import { Provider } from 'react-redux';
import DrawerNavigate from './src/navigation/DrawerNavigate';
import { View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    // <View style={{flex:1, backgroundColor:'black'}}>
      <Provider store={store}>
        <DrawerNavigate />
      </Provider>
    // </View>
  );
}
