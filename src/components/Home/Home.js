import React, { useEffect } from 'react'
import './Home.scss'
import {options} from '../../common/AnimeAPI'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addAnime } from '../../redux/slice'
import AnimeListing from '../AnimeListing/AnimeListing'

const Home = () => {
  const dispatch = useDispatch();
  const fetchData = async()=>{
    try{
    const response = await axios.get(options.url);
    // console.log(response.data.data)
    dispatch(addAnime(response.data.data))
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='home'>
    <AnimeListing />
    </div>
  )
}

export default Home