import React from 'react';
import OrdersTable from './ordersTable';


const Orders = () => {
    return (
        <div id="manage_orders_section" className="manage_orders_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت سفارشات</h4>
            <OrdersTable/>
        </div>
    );
}

export default Orders;
