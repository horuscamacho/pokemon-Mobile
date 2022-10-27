import { POKEMON_TYPE_COLORS } from "./constants";

const getColorPokemonBy = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]
export default getColorPokemonBy