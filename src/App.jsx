import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRouter from './Router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <AppRouter />
   
  )
}

export default App
