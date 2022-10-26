import { View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemons, getPokemonDetails } from '../api/pokemon'
import PokemonList from '../components/PokemonList'


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    (async() => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemons()
      const pokemonsArray = []
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetails(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0],
          img: pokemonDetails.sprites.other["official-artwork"].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}