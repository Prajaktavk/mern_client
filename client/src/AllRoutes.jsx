import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'

import Home2 from './Pages/Home/Home2'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Otpverify from './Otpverify'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Home2' element = {<Home2/>}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
            <Route path='/Otpverify'element={<Otpverify/>}/>
        </Routes>
    )
}

export default AllRoutes