import React from 'react'

//default export
function Car() {
  return (
    <div>
        <div>Car</div>
    </div>

    
  )
}


//named export
export const Bmw = (props) => {
  return (
    <div >bmw:{props.name}</div>
  )
}



export default Car