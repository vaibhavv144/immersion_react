import React from 'react'
import Car, {Bmw} from './components/Car'
import Event from './components/Event'
import Naam from './components/Naam'

const App = () => {
  return (
    <div>
      {/* <Car/> */}
      {/* <Bmw>
      {props.name}
      </Bmw> */}
      {/* <Bmw name="x1"/> 
      <Event/> */}

      <Naam 
      naam="Vbhv"
      age="21"
      />
      
    </div>
    
  )
}

export default App