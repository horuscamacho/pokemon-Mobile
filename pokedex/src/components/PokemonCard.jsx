import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import {capitalize} from 'lodash'
import { useNavigation } from '@react-navigation/native'
import getColorPokemonBy from "../utils/getColorByPokemonTag";


export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation()

  const pokemonColor = getColorPokemonBy(pokemon.type)

  const bgStyles = { backgroundColor: pokemonColor, ...style.bgStyles}
  const goToPokemon = () => {
    navigation.navigate('Pokemon', {id: pokemon.id})
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyles}>
            <Text style={style.number}>#{`${pokemon.id}`.padStart(3,0)}</Text>
            <Text style={style.name}>{capitalize(pokemon.name)}</Text>
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
    flex: 1,
    borderRadius: 15,
    padding: 10
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
