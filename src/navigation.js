import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import KidScreen from './screens/kids.screen'
import ListScreen from './screens/listTemplate.screen'
import HomeScreen from './screens/home.screen'

export default function Navigator() {
  const Stack = createStackNavigator()

  function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'papayawhip' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Kids" component={KidScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}
