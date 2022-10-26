import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const goToPokemon = () => {
    console.log("Vamos al pokemon: " + pokemon.img);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={style.bgStyles}>
            <Text style={style.number}>#{pokemon.id}</Text>
            <Text style={style.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.img }} style={style.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 10,
  },
  bgStyles: {
    backgroundColor: "#4682B4",
  },
  image: {
    position: "absolute",
    bottom: 12,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 5
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 10
  }
});
