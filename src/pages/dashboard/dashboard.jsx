import React, { useEffect } from 'react';
import { setDashboardChart } from '../../utils/dashboardChart';
import Card from './card';
import ProductTitle from './productTitle';

const Dashboard = () => {

    useEffect(()=>{
        const labels = ['فروردین' , 'اردیبهشت', 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' ,
        'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفند'];
    
        const datapoints = [0, 20, 20, 60, 60, 120, 140, 120, 125, 105, 110, 150];

        setDashboardChart(labels,datapoints)
    },[])

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
                <div className="col-12 col-lg-6">
                    <p className="text-center mt-3 text-white">محصولات رو به اتمام</p>
                    <ProductTitle/>
                </div>

                <div className="col-12 col-lg-6">
                    <canvas id="mychart" height="185"></canvas>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
