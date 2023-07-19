import React from 'react'

const AnimeDetailPage = (props) => {
    const {data} = props;
  return (
    <div className='detail'>
      <div className='detail-img'>
        <img src={data.images.webp.image_url} />
      </div>
      <div className='detail-info'>
        <div className='detail-title'>
          {data.title}
        </div>
        {/* {data.studios.map((name)=>{
          <div className='detail-title'>
          {name}
        </div>
        })} */}
      </div>

    </div>
  )
}

export default AnimeDetailPage