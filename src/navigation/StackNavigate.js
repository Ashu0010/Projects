import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigate from './TopTabNavigate';

import Featured from '../component/Featured';
import PopularCollection from '../component/PopularCollection';
import Popular from '../component/Popular';
import Walls from '../component/Walls';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default class StackNavigate extends Component {
    render() {
        return (


            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={TopTabNavigate} />
                <Stack.Screen name='Featured' component={Featured} />
                <Stack.Screen name='PopularCollection' component={PopularCollection} />
                <Stack.Screen name='Popular' component={Popular} />
                <Stack.Screen name='Walls' component={Walls} />
            </Stack.Navigator>




            // <NavigationContainer>
            //  <Stack.Navigator>  {/* screenOptions={{ headerShown: false }} */}
            //     <Stack.Screen name='TabHome' component={Home}/>
            //     {/* <Stack.Screen name='Featured' component={Featured} />
            //     <Stack.Screen name='PopularCollection' component={PopularCollection} />
            //     <Stack.Screen name='Popular' component={Popular} />
            //     <Stack.Screen name='Walls' component={Walls} /> */}
            // </Stack.Navigator>
            // </NavigationContainer>

        );
    }
}