import React, { useEffect } from 'react';
import { setDashboardChart } from "../../utils/dashboardChart";

const SaleChart = () => {
    useEffect(() => {
        const labels = [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ];
        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
        setDashboardChart(labels, datapoints);
        return ()=>{
        }
      }, []); 
    return (
        <div className="col-12 col-lg-6">
          <canvas id="mychart" height="195"></canvas> 
        </div>
    );
}

export default SaleChart;