import React from 'react';
import ProductTable from './productTable';
import AddProduct from './addProduct';
import ProductAttribute from './productAttribute';

const Product = () => {
    return (
        <div id="manage_product_section" className="manage_product_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت محصولات</h4>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    <AddProduct/>
                </div>
            </div>
            <ProductTable/>
            <ProductAttribute/>
        </div>
    );
}

export default Product;
