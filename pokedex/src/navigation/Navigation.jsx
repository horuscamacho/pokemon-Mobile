import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";


const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favourites"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: () => renderFavorito(),
         
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "Pokebola",
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="AccountNavigation"   //AQUI CAMBIE ESTO OJO
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: () => renderUsuario(),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokebola.png")}
      style={{ width: 75, height: 75, top: -17 }}
    />
  );
}

function renderFavorito() {
  return (
    <Image
      source={require("../assets/favorito.png")}
      style={{ width: 30, height: 30 }}
    />
  );
}

function renderUsuario() {
  return (
    <Image
      source={require("../assets/hombre.png")}
      style={{ width: 30, height: 30 }}
    />
  );
}
