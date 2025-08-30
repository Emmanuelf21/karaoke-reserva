import React from 'react'
import './css/card.css'

const Card = ({infos}) => {
  return (
    <div className='card'>
        {infos.icone}
        <h2>{infos.titulo}</h2>
        <p>{infos.descricao}</p>
        <ul>
            {
              infos.sobre.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Card