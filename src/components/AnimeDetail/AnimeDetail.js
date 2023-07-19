import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncAnimeDetail, getAnime, getAnimeDetail } from '../../redux/slice';
import './AnimeDetail.scss'
import AnimeDetailPage from '../AnimeDetailPage/AnimeDetailPage';

const AnimeDetail = () => {
  const {mal_id} = useParams();
  console.log(mal_id);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchAsyncAnimeDetail(mal_id))
  },[dispatch, mal_id])

  const data = useSelector(getAnimeDetail);
  // console.log('data length',data.length);

  let boo = true;

  if(JSON.stringify(data)=='{}'){
    boo=false;
    console.log('data is false')
  }

  console.log('boo',boo)

  // const data2 = useSelector(getAnime);
  // console.log(data2);

  
  // renderData = !animeInfo ? (
  //   <img src={animeInfo.images.webp.image_url} alt={animeInfo.title}/>
  //   ):(
  //   <h3>Loading</h3>
  //   );

  return (
    <>
    {boo &&
      <div className='detail'>
        <div className='detail-img'>
          <img  src={data.images.jpg.image_url} />
        </div>
        <div className='detail-info'>
          <h3>{data.title}</h3> 
          <p>{data.synopsis}</p>
        </div> 
      </div>
    }
    </>
    // <AnimeDetailPage data={data} />
  )
}

export default AnimeDetail