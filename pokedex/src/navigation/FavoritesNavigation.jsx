import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favourites from '../screens/Favourites'
const Stack = createNativeStackNavigator()

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favourite' component={Favourites} options={{title:""}} />
    </Stack.Navigator>
  )
}