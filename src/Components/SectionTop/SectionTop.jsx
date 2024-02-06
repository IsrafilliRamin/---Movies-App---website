import React from 'react'
import './fayl.scss'
import { Input } from 'antd';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import {setMoviesData} from '../../stores/counter'



const { Search } = Input;




const SectionTop = () => {
  const movies = useSelector(state=>state.MoviesData.value)  
  const dispatch = useDispatch()

 
  const onSearch = async(value) => { 
    const url = `https://api.themoviedb.org/3/search/movie?api_key=07989e510be31f37e529531744bfc3ec&query=${value}`
    const res = await fetch(url)
    const data = await res.json()

    if(data.results===undefined || data.results === ''){
      dispatch(setMoviesData(movies))
    }
    else{ dispatch(setMoviesData(data.results))}
   
   }
  return (
    <div className='topContainer'>
      <h1 className='toph'>MovieDB</h1>
      <p className='topp'>List of movies and TV Shows, I, Pramod Poudel have watched till date. <br /> Explore what I have watched and also feel free to make a suggestion. 😉</p>
     
      <Search className='search' placeholder=" search movie" onSearch={onSearch} enterButton   />
      
      <h2 className='h2'>All(120)</h2>
      
     {/*  <Link  to='/details'>
        {query?.map(item=>(
           <div className='cardsContainer'>
           <img className='img' src={API_IMG + item.poster_path} alt="img" />
           <div className="starContainer">
               <StarOutlined className='star' />
               <div className='count'>{item.vote_average}</div>
           </div>
           <div className='heartContainer'>
               <HeartOutlined className='heart' /></div>
           <div className='containerTitle'>
               <p className='titlep'>{item.title.slice(0,31)}</p>
               <TagFilled className='tags' />
           </div>
       </div>
        ))}
           
        </Link>
 */}
    </div>

  )
}

export default SectionTop
