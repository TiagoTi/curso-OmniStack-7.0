import React from 'react'
import {createAppContainer, createStackNavigator} from 'react-navigation'

import {Image} from 'react-native'

import logo from './assets/logo.png'


import Feed from './pages/Feed'
import New  from './pages/New'

export default createAppContainer(
    createStackNavigator({
        Feed, New
    },{
        initialRouteName: 'New',
        defaultNavigationOptions: {
            headerTitle: <Image source={logo}  style={{marginHorizontal: 20}}/>,
            headerBackTitle: null,
            headerTintColor: '#000'
        },
        mode: 'modal'
    })
)