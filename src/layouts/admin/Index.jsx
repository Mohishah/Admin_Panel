import React, { useEffect, useState } from 'react';
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index"
import AdminContextContainer from '../../context/adminLayoutContext';
import Content from '../../pages/content';
import { Navigate } from 'react-router-dom';
import { useIsLogin } from '../../hook/authHook';
// import {toggleSidebar} from "../../utils/initialDoms";

const Index =() => {

  // switch sidebar other ways
  // useEffect(()=>{
  //   require('../../assets/Js/toggleSidebar')
  //   <toggleSidebar/>
  // },[])

  const [loading, isLogin] =useIsLogin()

  return (
    <AdminContextContainer>
      {
        loading ? (
          <h1 className='text-center waiting_center text-light'>لطفا صبر کنید ...</h1>
        ) : isLogin ? (
          <div>
            <Content/>
            <Navbar/>
            <Sidebar/> 
          </div>
        ) : (
          <Navigate to={'/auth/login'}/>
        )
      }
    
    </AdminContextContainer>
  )
}

export default Index;