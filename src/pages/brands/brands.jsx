import React from 'react';
import BrandsTable from './brandsTable';

const Brands = () => {
    return (
        <div id="manage_brand_section" className="manage_brand_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت برند ها</h4>
            <BrandsTable/>
        </div>
    );
}

export default Brands;
