import React from 'react'

type Greetprops={
    name:string
    mssgCount:number
    isLoggedin:boolean
}

const Greet = (props:Greetprops) => {
  return (
    <div>
        {
            props.isLoggedin ? <h2>{props.name},{props.mssgCount}</h2> : 'Guest'
        }
        
    </div>
  )
}

export default Greet;
