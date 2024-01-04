import react from 'react'
import Bg from './components/bg-changer'

function App() {
  let colors = ["Orange", "Black", "Cyan", "Maroon", "Pink", "Purple", "Coral", "Lime", "Yellow"]
  return (
    < Bg channel={colors}/>
  )
}

export default App
