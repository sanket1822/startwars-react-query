import React from 'react'

export default function  ({person}) {
  return (
    <div className="card">
        <h3>{person.name}</h3>
        <p>Population - {person.gender} </p>
        <p>Terrians - {person.birth_year} </p>
    </div>
  )
}
