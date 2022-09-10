import React from 'react'
import './fayl.scss'
import imgMain from '../Header/img/logo.png'
import { HeartOutlined, MenuOutlined, TagOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import $ from 'jquery';
import { Badge } from 'antd';
import {useSelector} from 'react-redux'
import { useState } from 'react'
function blinkText() {
  $(".imgMain").fadeOut(1000);
  $(".imgMain").fadeIn(1000);
}
setInterval(blinkText, 1000);


const Header = () => {
  const valueRed = useSelector(state=>state.MoviesData.counterR)
  const valueHea = useSelector(state=>state.MoviesData.counterHeart)

  const [show,setShow] = useState(false);
  console.log(show)
  
  const burgerFunc = ()=>{
    var v = document.querySelector(".headerRight")
    if(!show){
      v.style.left = "60%"
    }else{
      v.style.left = "100%";
    }
   
    setShow(!show)
    console.log(v)
  }


  return (
    <div className='header'>
     
     <Link to='/'><img className='imgMain' src={imgMain} alt="imgDB" /></Link> 
      <div className="headerRight">
        <NavLink activeclassname='active' className='headerP'  to='/'><p >Latest</p></NavLink>
        <NavLink activeclassname='active' className='headerP'  to='nowplaying'><p >Now Playing</p></NavLink>
        <NavLink  activeclassname='active' to='popular'><p className='headerP'>Popular</p></NavLink>
        <NavLink  activeclassname='active' to='topRated'> <p className='headerP'>Top Rated</p></NavLink>
        <NavLink  activeclassname='active' to='upcoming'><p className='headerP3'>Upcoming</p></NavLink>
        {/*  <img className='imgRight' src={right} alt="" /> */}
        <Link to={'/heart/'} > <Badge count={valueHea}><HeartOutlined className='heart'   /></Badge>   </Link>
        <Link to={'/whatchlist/'} > <Badge count={valueRed}> <TagOutlined className="watchlist" /> </Badge>    </Link>
      </div>
      <MenuOutlined className='BurgerMen' onClick={()=>burgerFunc()} />
    </div>
   
  )
  
}

export default Header