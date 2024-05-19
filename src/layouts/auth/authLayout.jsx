import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../../pages/auth/login';
import { useIsLogin } from '../../hook/authHook';

const AuthLayout = () => {

    const [loading, isLogin] =useIsLogin()

    return (
    <div className="limiter">
        {loading ? (
          <h1 className="text-center waiting_center text-light">لطفا صبر کنید...</h1>
        ) : !isLogin ? (
          <div className="container-login100">
            <Routes>
              <Route path="/auth/login" element={<Login />} />
            </Routes>
          </div>
        ) : (
          <Navigate to={"/"} />
        )}
      </div>
    );
}

export default AuthLayout;
