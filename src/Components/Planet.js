import React from 'react'

export default function  ({planet}) {
  return (
    <div className="card">
        <h3>{planet.name}</h3>
        <p>Population - {planet.population} </p>
        <p>Terrians - {planet.terrain} </p>
    </div>
  )
}
