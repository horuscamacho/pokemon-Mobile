import { View, Text, Button } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavouriteApi } from "../api/favourite";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsAPI } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favourites() {
  const [pokemons, setpokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavouriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsAPI(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              img: pokemonDetails.sprites.other["official-artwork"]
                .front_default,
            });
          }
          setpokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? (
    <NoLogged />
  ) : (
    <PokemonList pokemons={pokemons} />
  );
}
