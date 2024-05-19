import React from 'react';
import CategoryTable from './categoryTable';
import CaregoryAttribute from './caregoryAttribute';

const Category = () => {
    return (
        <div id="manage_product_category" className="manage_product_category main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت دسته بندی محصولات</h4>
            <CategoryTable/>
            <CaregoryAttribute/>
        </div>
    );
}

export default Category;
