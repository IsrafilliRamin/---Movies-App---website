import React, { useEffect } from 'react'
import './fayl.scss'
import MovieCards from '../../Components/MovieCards/MovieCards';
import {getData} from "../../Utils/Utils";
import SectionTop from '../../Components/SectionTop/SectionTop';
import Section from '../../Components/Section/Section';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import {setMoviesData} from '../../stores/counter'
const TopRated = () => {
  const movies = useSelector(state=>state.MoviesData.value)
  const dispatch = useDispatch()
  

    useEffect(()=>{
      const fetchData = async ()=>{
        const res  = await getData("top_rated")
        dispatch(setMoviesData(res))
      }
      fetchData()
    },[dispatch])
  return (
    <>
    <Section/>
     <SectionTop/>
    <div className="container">
      {movies?.map(movieReq=>(
    <MovieCards key={movieReq.id} {...movieReq}  />
    ))}
    </div>
    </>
  )
}

export default TopRated