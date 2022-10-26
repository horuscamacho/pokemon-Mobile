import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourites from "../screens/Favourites";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
