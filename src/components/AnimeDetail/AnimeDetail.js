import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncAnimeDetail, getAnimeDetail } from '../../redux/slice';

const AnimeDetail = () => {
  const {mal_id} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAnimeDetail)
  console.log(data.title);

  useEffect(()=>{
    dispatch(fetchAsyncAnimeDetail(mal_id))
  },[dispatch, mal_id])
  return (
    <div>AnimeDetail</div>
  )
}

export default AnimeDetail