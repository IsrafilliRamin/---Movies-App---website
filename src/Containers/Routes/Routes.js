import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Details from '../Details/Details'
import Heart from '../Heart/Heart'
import Main from '../Main/Main'
import NowPlaying from '../NowPlaying/NowPlaying'
import Popular from '../Popular/Popular'
import TopRated from '../TopRated/TopRated'
import Upcoming from '../Upcoming/Upcoming'
import WhatcList from '../WhatchList/WhatcList'




const MainRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/nowplaying' element={<NowPlaying />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/topRated' element={<TopRated />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/heart' element={<Heart />} />
        <Route path='/whatchlist' element={<WhatcList />} />
        <Route path='/details/:name' element={<Details />} />
      </Routes>
    
  )
}

export default MainRoutes