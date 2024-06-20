import React from 'react';
import Card from './card';
import ProductTitle from './productTitle';
import SaleChart from './SaleChart';

const Dashboard = () => {

    return (
        <div id="dashboard_section" className="dashboard_section main_section pt-5">

            <div className="row">
                <Card 
                currentValue={7}
                title="سبد خرید امروز"
                desc="سبدهای خرید مانده امروز"
                icon="fas fa-shopping-basket"
                lastweekValue={13}
                lastmonthValue={18}
                />
                <Card 
                currentValue={5}
                title="سفارشات مانده امروز"
                desc="سفارشات معلق و فاقد پرداختی"
                icon="fas fa-dolly"
                lastweekValue={9}
                lastmonthValue={16}
                />
                <Card 
                currentValue={45}
                title="سفارشات امروز"
                desc="سفارشات کامل و دارای پرداختی"
                icon="fas fa-luggage-cart"
                lastweekValue={263}
                lastmonthValue={1038}
                />
                <Card 
                currentValue={"1,500,000"}
                title="درآمد امروز"
                desc="جمع مبلغ پرداختی"
                icon="fas fa-money-check-alt"
                lastweekValue={"6,380,000"}
                lastmonthValue={"22,480,000"}
                />
            </div>

            <div className="row">
                <ProductTitle/>
                <SaleChart/>
            </div>

        </div>
    );
}

export default Dashboard;
