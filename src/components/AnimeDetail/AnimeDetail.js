import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncAnimeDetail, getAnimeDetail } from '../../redux/slice';
import './AnimeDetail.scss'

const AnimeDetail = () => {
  const {mal_id} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAnimeDetail)
  console.log(data);

  useEffect(()=>{
    dispatch(fetchAsyncAnimeDetail(mal_id))
  },[dispatch, mal_id])
  return (
    <div className='detail'>
      <div className='detail-img'>
        <img src={data.images.jpg.image_url}/>
      </div>
      <div className='detail-info'>
        <div className='detail-title'>
          {data.title}
        </div>
        <div className='detail-title'>
          {data.studios[0].name}
        </div>
      </div>

    </div>
  )
}

export default AnimeDetail