import React, { useEffect, useState } from 'react'
import './fayl.scss'
import { StarOutlined, HeartOutlined, TagFilled, HeartFilled, TagOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {setWatchlist , increment , setFavoritList,incrementH} from '../../stores/counter'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
const API_IMG = "https://image.tmdb.org/t/p/w500"





const MovieCards = ({ title, poster_path, vote_average,id }) => {
    const WatchL = useSelector(state => state.MoviesData.watchlist)
    const WatchH = useSelector(state => state.MoviesData.favoritemovies)
    
    let storedMovieH = WatchH.find(o=>o.id === id)
    const watchlistDisabledH = storedMovieH ? true : false

    let storedMovie = WatchL.find(o=>o.id === id)
    const watchlistDisabled = storedMovie ? true : false
       
        
    const [detal,SetDetal] = useState([])
    const detailApi = async (id)=>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20325b57b63187bb9a782879cbcc0ac5&language=en-US`);
        const detaDat = await res.json()
        SetDetal(detaDat)
    }
       useEffect(()=>{
        detailApi(id)
       },[id])

    const dispatch = useDispatch()
       
   const AddList = ()=>{
    dispatch(increment())
    dispatch(setWatchlist(detal))
    notification.open({
        message: 'Success',
        description:
          'Your watchlist is Add',
        icon: (
          <SmileOutlined
            style={{
              color: '#0963a3',
            }}
          />
        ),
        })
   
      }
   
   const AddListHeart = ()=>{
    dispatch(incrementH())
    dispatch(setFavoritList(detal))

    notification.open({
        message: 'Success',
        description:
          'Your Favoritlist is Add',
        icon: (
          <SmileOutlined
            style={{
              color: '#0963a3',
            }}
          />
        )
        })
      }
    
    
    
    return (
        
            <div className='cardsContainer'>
                <Link   to={'/details/'+id}>
                <img className='img' src={API_IMG + poster_path} alt="img" />
                </Link>
                <div className="starContainer">
                    <StarOutlined className='star' />
                    <div className='count'>{vote_average}</div>
                </div>
              
                <div className='heartContainer'  >
                <button className='btnn2' disabled={watchlistDisabledH} onClick={()=>AddListHeart()}> {watchlistDisabledH ? <  HeartFilled className='heart' /> : <HeartOutlined className='heart' /> }   
                 </button>     </div>
                
                <div className='containerTitle'  >
                    <p className='titlep'>{title.slice(0,31)}</p>
                   <button className='btnn' disabled={watchlistDisabled} onClick={()=>AddList()}> {watchlistDisabled ? <TagFilled  className='tags'/> : <TagOutlined className='tags' />}      </button>   
                </div>
               
            </div>
       
           




    )
}

export default MovieCards
