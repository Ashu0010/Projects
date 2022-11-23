import 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import CustomDrawer from '../component/CustomDrawer'
import TopTabNavigate from './TopTabNavigate'
import StackNavigate from './StackNavigate'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator();

export default DrawerNavigate = () => {
    return (

        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} drawerStyle={{ backgroundColor: '#000000', width: 265, }} >
            {/* options={{ headerShown: false }}  */}
                <Drawer.Screen name="WallPaper" children={(props) => <StackNavigate {...props} />} />
            </Drawer.Navigator>
        </NavigationContainer>

    )
}