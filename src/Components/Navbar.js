import React from 'react'

export default function Navbar({setPage}) {
  return (
    <div>
     <button onClick={()=> setPage("planets")}>Planets</button>
     <button onClick={()=> setPage("peoples")}>Peoples</button>
     
    </div>
  )
}
