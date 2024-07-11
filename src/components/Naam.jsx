import React, { useState } from 'react'



//variable is changed only on rerendaring thats why we use hooks like useState and useState (dynamic changes are not possible in functional cmpnt)
//useState is a function returned with any array with 2 element(1st element is a variable and second element is function jiski hlp s 1st wla variable chg hoga)

function Naam({naam,age}) {

    const [nam,setNam]=useState(naam);
    function handleLogout(){
        setNam('annonymous')
    }
        //Patching imp
  return (
    <>
     <div>Naam:{nam}</div>
     <div>age:{age}</div>
     <button onClick={()=>handleLogout()}>Logout</button>
    
    </>
   
  )
}

export default Naam