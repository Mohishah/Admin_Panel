import React from 'react';
import ProductTable from './productTable';


const Product = () => {
    return (
        <div id="manage_product_section" className="manage_product_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت محصولات</h4>
            <ProductTable/>
        </div>
    );
}

export default Product;
