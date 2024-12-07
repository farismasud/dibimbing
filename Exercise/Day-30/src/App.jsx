import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  const handeAdd = parameter => {
    const calculate = count + parameter

    setCount(calculate)
  }

  return (
    <>
      <h1>{count}</h1>
      <Sidebar handleAdd={handeAdd} />
    </>
  )
}

export default App
