import React, { useContext } from 'react';
import Category from './category/category';
import Dashboard from './dashboard/dashboard';
import { AdminContext } from '../context/adminLayoutContext';
import Product from './product/product';
import { Route, Routes } from 'react-router-dom';
import Colors from './colors/colors';
import Guaranties from './guaranties/guaranties';
import Brands from './brands/brands';
import Discount from './discount/discount';
import Card from './card/card';
import Orders from './orders/orders';
import Delivery from './delivery/delivery';
import Users from './users/users';
import Roles from './roles/roles';
import Permissions from './permissions/permissions';
import Comments from './comments/comments';
import Questions from './questions/questions';
import Logout from './auth/logout';
import CategoryChildren from './category/categoryChildren';
import CaregoryAttribute from './category/attr/caregoryAttribute';
import AddProduct from './product/addProduct';

const Content = () => {

    const {showSidebar} = useContext(AdminContext)

    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null }`}>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/categories' element={<Category/>}>
            <Route path=':categoryId' element={<CategoryChildren/>}/>
          </Route>
          <Route path='/categories/:categoryId/attributes' element={<CaregoryAttribute/>}/> 
          <Route path='/products' element={<Product/>}/>
          <Route path='/products/add-product' element={<AddProduct/>}/>
          <Route path='/colors' element={<Colors/>}/>
          <Route path='/guaranties' element={<Guaranties/>}/>
          <Route path='/brands' element={<Brands/>}/>
          <Route path='/discount' element={<Discount/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/roles' element={<Roles/>}/>
          <Route path='/permissions' element={<Permissions/>}/>
          <Route path='/comments' element={<Comments/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/logout' element={<Logout/>}/>

          <Route path='*' element={<Dashboard/>}/>  
        </Routes>   
        </section>
    );
}

export default Content;
