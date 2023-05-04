import { useState } from 'react'
import Dashboard from './pages/dashboard'

function App() {
  const [sound, setSound] = useState(false)
  return (
    <>
      <Dashboard sound={sound} setSound={setSound} />
    </>
  )
}

export default App
