import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditPage from '../Components/EditPage'
import { RequiredAuth } from '../HOD/RequiredAuth'
import HomePage from './HomePage'
import Login from './Login'
import Sidebar from './Sidebar'
import Signup from './Signup'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<RequiredAuth><Flex direction={"row"}><Sidebar/><HomePage/></Flex></RequiredAuth> } > </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/task/:id' element={<RequiredAuth><Flex direction={"row"}><Sidebar/><EditPage/></Flex></RequiredAuth>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes