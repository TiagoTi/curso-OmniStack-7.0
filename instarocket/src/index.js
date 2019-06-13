import React from 'react'
import {YellowBox} from 'react-native'

import Routes from './routes'


YellowBox.ignoreWarnings([
  'WebSocket'
])
export default function App(){
  return <Routes />
}
