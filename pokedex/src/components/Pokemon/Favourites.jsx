import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favourites(props) {
  const { id } = props
  const addFavourite = () => {
    console.log("Añadir a favoritos props: ", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavourite}
      style={{ marginRight: 20 }}
    />
  );
}
