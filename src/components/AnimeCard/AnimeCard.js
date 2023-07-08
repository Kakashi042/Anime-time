import React from 'react'
import './AnimeCard.scss'

const AnimeCard = (props) => {
  const {data} = props
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.images.jpg.image_url} alt={data.title} />
          <div className='card-bottom'>
            <div className='card-info'>
              <h4>{data.title}</h4>
              <p>{data.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard