import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull, } from 'lodash'
import { FAVOURITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavouriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVOURITE_STORAGE)
        return JSON.parse(response || '[]')
    } catch (error) {
        throw error
    }
}

export async function addPokemonFavouriteApi(id) {
    try {
       const favourites = await getPokemonsFavouriteApi()
       favourites.push(id)
       await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites))
    } catch (error) {
        throw error
    }
}


export async function isPokemonFavouriteApi(id){
    try {
        const response = await getPokemonsFavouriteApi()
        return includes(response, id)
    } catch (error) {
        throw error
    }
}


export async function removePokemonFavouriteApi(id) {
    try {
        const favourites = await getPokemonsFavouriteApi()
        const newFavourites = pull(favourites, id)
        await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(newFavourites))
    } catch (error) {
        throw error
    }
}