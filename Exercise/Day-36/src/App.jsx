import { useEffect } from 'react'
import usePokemon from './hook/usePokemon'
import currentDate from './helpers/utils'


function App() {
  const { pokemon, getPokemon } = usePokemon()

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <div>
      <p>{currentDate()}</p>
        {pokemon.map((pokemon) => {
          return <p key={pokemon.id}>
            <p>-{pokemon.name}</p>
            <p>-{pokemon.url}</p>
          </p>
        })}
      </div>
    </>
  )
}
export default App