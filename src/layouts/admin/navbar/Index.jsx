import React from 'react';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

const Index = () => {
    return (
    <nav className="navbar fixed-top navbar-dark top_navbar py-2 ps-5">
        <div className="container-fluid h-100 pe-0">

            <RightContent/>
            <LeftContent/>

        </div>
    </nav>
    );
}

export default Index;
