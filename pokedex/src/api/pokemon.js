import { API_HOST } from '../utils/constants'

export async function getPokemons(endpointURL){
    try {
        const url = `${API_HOST}/pokemon?limit=20offset=0`;
        const response = await fetch(endpointURL || url);
        const result = await response.json()
        return result
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetails(url){
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonDetailsAPI(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response  = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}