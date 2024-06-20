import React from 'react';
import CardTable from './cardTable';

const Card = () => {
    return (
        <div id="manage_cart_section" className="manage_cart_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت سبد خرید</h4>
            <CardTable/>
        </div>
    );
}

export default Card;
