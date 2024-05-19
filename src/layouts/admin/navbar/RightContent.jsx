import React, { useContext } from 'react';
import { AdminContext } from '../../../context/adminLayoutContext';

const RightContent = () => {

    const {setShowSidebar} = useContext(AdminContext)

    return (
        <div className="right_content h-100  ">
            <a className="navbar-brand h-100 me-2" href="/">
                <img src="/assets/images/logo.svg 1lin .png" className="h-100"/>
            </a>
            <div className="form-check form-switch ms-5 d-none d-md-block">
                <input id="handle_toggle_sidemenu" className="form-check-input pointer" type="checkbox"
                onChange={(e)=>setShowSidebar(e.target.checked)}/>
            </div>
        </div>
    );
}

export default RightContent;
