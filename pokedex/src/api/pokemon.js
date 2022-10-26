import { API_HOST } from '../utils/constants'

export async function getPokemons(){
    try {
        const url = `${API_HOST}/pokemon?limit=100offset=0`;
        const response = await fetch(url);
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