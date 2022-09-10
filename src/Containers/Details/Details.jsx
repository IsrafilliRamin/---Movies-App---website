import { HeartFilled, StarOutlined, TagOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './fayl.scss'
import backGround from '../../Components/Section/img/Background.png'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom'
import MovieCards from '../../Components/MovieCards/MovieCards'
import {setWatchlist , increment , setFavoritList,incrementH} from '../../stores/counter'
import { SmileOutlined,HeartOutlined, TagFilled } from '@ant-design/icons';
import { notification } from 'antd';
const API_IMG = "https://image.tmdb.org/t/p/w500"



const Details = () => {
   const [ disab , setDisab] = useState(false)
   const [ disab2 , setDisab2] = useState(false)
    const params = useParams()
    const [detal,SetDetal] = useState([])
    var movies = useSelector(state=>state.MoviesData.value) 
    var movisCat = movies.slice(0,4) 
    console.log(detal);
   
    const detailApi = async (par)=>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${par}?api_key=07989e510be31f37e529531744bfc3ec&language=en-US`)
        const detaDat = await res.json()
        SetDetal(detaDat)  
    }
   
       useEffect(()=>{
        detailApi(params.name)
       },[params.name])


       const dispatch = useDispatch()
       
       const AddList = ()=>{
        setDisab2(true)
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
        
        setDisab(true)
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
         console.log(API_IMG+detal.backdrop_path,"img");
          let backdrop = `https://image.tmdb.org/t/p/original/${detal.backdrop_path}`;
          console.log(backdrop,"poster");
          
    return (
        <div className='sectionn'>
        <img className='backimgg' src={backGround} alt="background.img" />
       
        <div className='detailsContainer'>
            <div className="topImg">
              <img className='backdrop' src={backdrop} alt="" />
            </div>
            <div className="title">
                <p>{detal?.tagline}</p>
                <h2>{detal?.title}</h2>
            </div>
            <div className="bottomContainer">
                <div className='leftImg'>
                    <img className='postpath'  src={API_IMG+detal?.poster_path} alt="" />
                </div>

                <div className="right">
                    <h3>Part of the journey is the end.</h3>
                    <p>{detal?.overview}</p>
                    <div className="starContainer">
                        <StarOutlined className='star' />
                        <div className='count'>{detal?.vote_average}</div>
                    </div>
                    <div className='heartStart'>
                    <div className='heartContainerr'  >
                <button className='btnn' disabled={disab}   onClick={()=>AddListHeart()}>{disab ? <  HeartFilled className='heart22' /> : <HeartOutlined className='heart' /> } </button>     </div>
                
                <div className='containerTitlee'  >

                   <button  className='btnn' disabled={disab2} onClick={()=>AddList()}>{disab2 ? <TagFilled  className='tags'/> : <TagOutlined className='tags22' />}</button>   
                </div>
                </div>
                    <p>Type</p>
                    <h4>Movie</h4>
                    <p>Relase Date:</p>
                    <h4>{detal?.release_date}</h4>
                    <p>Run time</p>
                    <h4>181 min</h4>
                    <p>Genres</p>
                    <h4>Adventure, Sciense Fiction, Action</h4>
                </div>
            </div>

           
        </div>
        <h1 className='recomend'>Recommended Movies</h1>
      
     <div className="containerd">
      
     {movisCat?.map(movieReq=>(
        
   <MovieCards key={movieReq.id} {...movieReq}  />
   
   ))}
   
   </div> 
    </div>
        
    )
}

export default Details