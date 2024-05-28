import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrevPageButton = () => {
    const navigate = useNavigate()
    return (
        <button className="btn btn-sm btn-danger me-2" onClick={()=>navigate(-1)}>بازگشت</button>
    );
}

export default PrevPageButton;
