import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../utils/alert';
import { logoutService } from '../../services/auth';

const Logout = () => {

    const [loading,setLoading] = useState(true)

    const handleLogout = async ()=> {
        try {
            const res = await logoutService();
            setLoading(false)
            if (res.status == 200){
                localStorage.removeItem("loginToken");
            }else{
                Alert('متاسفم !' ,res.data.message, 'error');
            }
        } catch (error) {
            setLoading(false);
            Alert('متاسفم !' ,'مشکل از سمت سرور', 'error');
        }
    }

    useEffect(()=>{
        handleLogout()
    },[])

    return (
        <>
            {
                loading ? (
                    <h1 className='text-center waiting_center text-light'>لطفا صبر کنید ...</h1>
                ) : (
                    <Navigate to={"/auth/login"}/>
                )
            }
        </>
    );
}

export default Logout;
