import { useState } from 'react'

import getPokemonList from '../apis/fetchPokemon'

const usePokemon = () => { 
    const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    try {
      const res = await getPokemonList();
      setPokemon(res)
    } catch (error) {
      console.log(error)
    }
  }

  return {pokemon, getPokemon}
}

export default usePokemon