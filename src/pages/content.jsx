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
import ProductAttribute from './product/setAttr/productAttribute';
import ProductGallery from './product/gallery/productGallery';
import AddDiscount from './discount/addDiscount';
import AddRoles from './roles/addRoles';
import AddUsers from './users/addUsers';
import { useHasPermission } from '../hook/permissionsHook';
import PermComponent from '../components/PermComponent';
import AddDelivery from './delivery/addDelivery';
import AddCard from './card/addCard';

const Content = () => {

    const {showSidebar} = useContext(AdminContext)

    const hasCategoryPermission = useHasPermission("read_categories")
    const hasDiscountPermission = useHasPermission("read_discounts")
    const hasUserPermission = useHasPermission("read_users")
    const hasRolePermission = useHasPermission("read_roles")
    const hasDeliveyPermission = useHasPermission("read_deliveries")
    const hasCartPermission = useHasPermission("read_carts")
 
    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null }`}>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          {hasCategoryPermission && (
          <Route path='/categories' element={<Category/>}>
            <Route path=':categoryId' element={<CategoryChildren/>}/>
          </Route>
          )}
          <Route path='/categories/:categoryId/attributes' element={<PermComponent component={<CaregoryAttribute/>} pTitle="read_category_attrs"/>}/>
          <Route path='/products' element={<PermComponent component={<Product/>} pTitle="read_products"/>}/>
          <Route path='/products/add-product' element={<PermComponent component={<AddProduct/>} pTitle="create_product"/>}/>
          <Route path='/products/add-attr' element={<PermComponent component={<ProductAttribute/>} pTitle="create_product_attr"/>}/>
          <Route path='/products/gallery' element={<PermComponent component={<ProductGallery/>} pTitle="create_product_image"/>}/>
          <Route path='/colors' element={<PermComponent component={<Colors/>} pTitle="read_colors"/>}/>
          <Route path='/guaranties' element={<PermComponent component={<Guaranties/>} pTitle="read_guaranties"/>}/>
          <Route path='/brands' element={<PermComponent component={<Brands/>} pTitle="read_brands"/>}/>
          {hasDiscountPermission && (
          <Route path='/discount' element={<Discount/>}>
              <Route path='add-discount-code' element={<AddDiscount/>}/>
          </Route>
          )}
          {hasCartPermission && (
              <Route path='/card' element={<Card/>}>
                <Route path='add-cart' element={<PermComponent component={<AddCard/>} pTitle="create_cart"/>}/>
              </Route>
          )}

          <Route path='/orders' element={<Orders/>}/>

          {hasDeliveyPermission && (
          <Route path='/delivery' element={<Delivery/>}>
              <Route path='add-delivery' element={<PermComponent component={<AddDelivery/>} pTitle="create_delivery"/>}/>
          </Route>
          )}  
          {hasUserPermission && (
          <Route path='/users' element={<Users/>}>
              <Route path='add-user' element={<AddUsers/>}/>
          </Route>
          )}
          {hasRolePermission && (
          <Route path='/roles' element={<Roles/>}>
            <Route path='add-role' element={<AddRoles/>}/>
          </Route>
          )}
          <Route path='/permissions' element={<PermComponent component={<Permissions/>} pTitle="read_permissions"/>}/>
          
          <Route path='/comments' element={<Comments/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/logout' element={<Logout/>}/>

          <Route path='*' element={<Dashboard/>}/>  
        </Routes>   
        </section>
    );
}

export default Content;
