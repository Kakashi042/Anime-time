import React from 'react'
import { useSelector } from 'react-redux'
import { getAnime } from '../../redux/slice'
import AnimeCard from '../AnimeCard/AnimeCard';
import './AnimeListing.scss'

const AnimeListing = () => {
  const animes = useSelector(getAnime);
  let renderAnime = '';

  // animes.map((data)=>{
  //   console.log(data.images.webp.image_url)
  // })

  renderAnime = animes ? (
  animes.map((data,index)=><AnimeCard data={data} key={index}/>)
  ):(
  <h3>Error occurred while fetching data</h3>
  );
  return (
    <div>
      <div className='anime-list'>
      <div className='anime-container'>{renderAnime}</div>
      </div>
    </div>
  )
}

export default AnimeListing