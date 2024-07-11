import React from 'react'

function Event() {

    function handleClick(){
        console.log('Button Clicked')
    }

  return (
    <div>
        {/* <button onClick={handleClick}>click bttn</button> */}
        {/* //if you want to pass value */}
        <button onClick={()=>handleClick()} >click bttn</button>

    </div>
  )
}

export default Event