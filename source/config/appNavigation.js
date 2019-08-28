/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Image, View } from 'react-native'
import styled from 'styled-components'

import logo from '../../assets/images/netflix-logo-6.png'
import screens, { FEED, MOVIEDETAIL } from '../screens'

const Logo = styled(Image)`
  height: 25px;
  width: 120px;
  flex: 1;
  margin: 10px auto;
`

const HeaderLeft = styled(View)``
const HeaderRight = styled(View)``

const navigationOptions = {
  headerTitle: <Logo source={logo} resizeMode="contain" />,
  headerTintColor: '#fff',
  headerMode: 'none',
  headerStyle: {
    backgroundColor: 'black'
  },
  headerRight: (<HeaderRight />)
}

const AppNavigator = createStackNavigator({
  [FEED]: {
    screen: screens[FEED],
    navigationOptions: {
      ...navigationOptions,
      headerLeft: (<HeaderLeft />)
    }
  },
  [MOVIEDETAIL]: {
    screen: screens[MOVIEDETAIL],
    navigationOptions
  }
})
export default createAppContainer(AppNavigator)
