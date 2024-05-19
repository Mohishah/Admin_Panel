import React, { useContext } from 'react';
import { AdminContext } from '../../../context/adminLayoutContext';
import Avatar from './avatar';
import SidebarGroupTitle from './sidebarGroupTitle';
import SidebarItem from './sidebarItem';

const Index = () => {

    const {showSidebar} = useContext(AdminContext)

    return (
    <section id="sidebar_section">
        <div className={`mini_sidebar collapsedd h-100 ${showSidebar ? "expanded" : null }`}>
            <div className="p-0 m-0">
                <Avatar name="محمد فراهانی" imagePath="/assets/images/hoosh1.jpeg"/>
                <SidebarItem targetPath="/" icon="fas fa-tachometer-alt" title="داشبورد"/>
                {/* <!-- =================================== --> */}
                <SidebarGroupTitle title="فروشگاه"/>
                <SidebarItem targetPath="/categories" icon="fas fa-stream" title="مدیریت گروه محصول"/>
                <SidebarItem targetPath="/products" icon="fas fa-cube" title="مدیریت محصول"/>
                <SidebarItem targetPath="/brands" icon="fas fa-copyright" title="مدیریت برندها"/>
                <SidebarItem targetPath="/guaranties" icon="fab fa-pagelines" title="مدیریت گارانتی ها"/>
                <SidebarItem targetPath="/colors" icon="fas fa-palette" title="مدیریت رنگ ها"/>
                <SidebarItem targetPath="/discount" icon="fas fa-percentage" title="مدیریت تخفیف ها"/>
                {/* <!-- =================================== --> */}
                <SidebarGroupTitle title="سفارشات و سبد"/>
                <SidebarItem targetPath="/card" icon="fas fa-shopping-basket" title="مدیریت سبد ها"/>
                <SidebarItem targetPath="/orders" icon="fas fa-luggage-cart" title="مدیریت سفارشات"/>
                <SidebarItem targetPath="/delivery" icon="fas fa-truck-loading" title="مدیریت نحوه ارسال"/>
                {/* <!-- =================================== --> */}
                <SidebarGroupTitle title="کاربران و همکاران"/>
                <SidebarItem targetPath="/users" icon="fas fa-users" title="مشاهده کاربران"/>
                <SidebarItem targetPath="/roles" icon="fas fa-user-tag " title="نقش ها"/>
                <SidebarItem targetPath="/permissions" icon="fas fa-shield-alt" title="مجوز ها"/>
                {/* <!-- =================================== --> */}
                <SidebarGroupTitle title="ارتباطات"/>
                <SidebarItem targetPath="/questions" icon="fas fa-question-circle " title="سوال ها"/>
                <SidebarItem targetPath="/comments" icon="fas fa-comment" title="نظرات"/>
            </div>
        </div>
    </section>
    );
}

export default Index;
