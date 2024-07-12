import { useState } from 'react'
import Card from './component/BasketballPlayerCard'
function App() {
  return (
    <Card name={'Caitlin Clark'}
          image={'https://assets.vogue.com/photos/660eff9c6bf3eb28e98a5cab/master/w_1920,c_limit/GettyImages-2131558483.jpg'}
          position={'Point guard'}
          stats={{pointsPerGame: 16.7, 
                  assistsPerGame: 7.6,
                  reboundsPerGame: 5.9}}
      />
  )
}

export default App
