import React from 'react';
import DiscountTable from './discountTable';
import { Outlet } from 'react-router-dom';

const Discount = () => {
    return (
        <div id="manage_discount_section" className="manage_discount_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت کد های تخفیف</h4>
            <DiscountTable/>
        </div>
    );
}

export default Discount;
