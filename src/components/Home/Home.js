import React, { useEffect } from 'react'
import './Home.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncAnime } from '../../redux/slice'
import AnimeListing from '../AnimeListing/AnimeListing'

const Home = () => {
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