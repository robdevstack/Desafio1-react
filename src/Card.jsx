import React from 'react'

const Card = (props) => {
  return (
    <div className='container-card'>
    <div className="card">
        <img src={props.imagen} />
        <h2>{props.nombre}</h2>
        <p><span className="badge bg-primary">{props.tipo} </span></p>
    </div>
    </div>
  )
}

export default Card