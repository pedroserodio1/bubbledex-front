import { useState } from 'react'
import Dex from './components/dex/dex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dex/>
    </>
  )
}

export default App
