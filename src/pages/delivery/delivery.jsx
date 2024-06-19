import React from 'react';
import DeliveryTable from './deliveryTable';

const Delivery = () => {
    return (
        <div id="manage_deliveries_section" className="manage_deliveries_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت نحوه ارسال</h4>
            <DeliveryTable/>
        </div>
    );
}

export default Delivery;
