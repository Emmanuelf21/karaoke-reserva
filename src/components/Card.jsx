import './css/card.css'

const Card = ({infos}) => {
  return (
    <div className='card'>
        {infos.icone}
        <h2>{infos.titulo}</h2>
        <p>{infos.descricao}</p>
        <div className='lista'>
          <ul>
              {
                infos.sobre.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
          </ul>
        </div>
    </div>
  )
}

export default Card