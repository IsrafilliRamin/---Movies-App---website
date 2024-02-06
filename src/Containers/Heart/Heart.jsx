import React from 'react'
import './fayl.scss'
import { useSelector } from 'react-redux'
import Section from '../../Components/Section/Section'
import { Link } from 'react-router-dom'
import { StarOutlined, HeartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux/es/exports';
import {setDeletHeart,decrementH} from '../../stores/counter'
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
const API_IMG = "https://image.tmdb.org/t/p/w500"


const Heart = () => {






  const dispatch = useDispatch()
    var WatchL = useSelector(state => state.MoviesData.favoritemovies)
   
    if (!WatchL) {
        WatchL = []
    }

 
  
    const DeletList = ()=>{
        dispatch(decrementH())
        notification.open({
            message: 'Warning',
            description:
              'Your Favoritlist is Deleted',
            icon: (
              <SmileOutlined
                style={{
                  color: '#0963a3',
                }}
              />
            ),
            })
          }


    return (
        <>

            <Section />
            {WatchL.length > 0 ?  <div className="containeryy">
                {WatchL.map((item, id) => (
                    <div key={id} className='cardsContainera' id={item.id}>
                        <Link to={'/details/' + item?.id}> <img className='img' src={API_IMG + item?.poster_path} alt="img" /></Link>
                        <div className="starContainer">
                            <StarOutlined className='star' />
                            <div className='count'>{parseInt(item?.vote_average)}</div>
                        </div>

                        <div className='heartContainer'  >
                            <HeartOutlined className='heart'id={item.id} onClick={() => 
                           {DeletList()
                           dispatch(setDeletHeart(item.id))} }  /></div>

                        <div className='containerTitle'>
                            <p className='titlep'>{item?.title.slice(0, 31)}</p>
                            
                        </div>
                    </div>

                ))}


            </div>
   : <h1 className='h1'>Your favoritlist is empty</h1>  } 
           
        </>

    )
}

export default Heart
