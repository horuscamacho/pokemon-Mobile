import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favourites from '../screens/Favourites'
import Pokemon from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favourite' component={Favourites} options={{title:""}} />
        <Stack.Screen name='Pokemon' component={Pokemon} options={{title: "", headerTransparent : true}}  />
        {/* Aquí básicamente se soluciona el problema de cuando entrabamos desde la pantalla de favoritos a la pantalla del pokemon
        al regresar nos mandaba a la pantalla de pokedex, sin embargo al agregar la pantalla aquí tiene una procedencia que le dice
        vienes de tal lado retorna a ese lugar en caso de regresar */}
    </Stack.Navigator>
  )
}