import Pokemon from "../models/pokemon.js "


export class PokemonService {

  static async getAllPokemons(pokemon) {
    try{
      const newPokemon = await Pokemon.create(pokemon)
      if(newPokemon){
        throw new Error("Pokemon not created");
      }
      return {message: null,data:newPokemon}
    }catch(e){
      return {message: e.message,data:null}
    }
  }

}

