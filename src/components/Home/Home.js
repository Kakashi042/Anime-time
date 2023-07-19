import React, { useEffect } from 'react'
import './Home.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncAnime, fetchAsyncAnimeDetail } from '../../redux/slice'
import AnimeListing from '../AnimeListing/AnimeListing'

const Home = (mal_id) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAsyncAnime());
  },[dispatch])

  return (
    <div className='home'>
    <AnimeListing />
    </div>
  )
}

export default Home