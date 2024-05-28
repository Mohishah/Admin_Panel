import Chart from "chart.js/auto";

export const setDashboardChart = (labels,datapoints)=>{
    
   const data = {
       labels: labels,
       datasets: [
           {
               label: 'فروش ماه',
               data: datapoints,
               borderColor: "#3E8989",
               fill: true,
               cubicInterpolationMode: 'monotone',
               tension: 0.4,
           }
       ]
   };

   const config = {
       type: 'line',
       data: data,
       options: {
           responsive: true,
           plugins: {
               title: {
                   display: true,
                   text: 'نمودار فروش یک سال گذشته',
                   color: "white",
                   font: {
                        size: 14,
                        family: 'Almarai',
                        weight: 'normal',
                    },  
               },
           },
           interaction: {
               intersect: false,
           },
           scales: {
               x: {
                   display: true,
                   title: {
                       display: true,
                       text: 'زمان',
                       color:'white',
                       font: {
                        size: 14,
                        family: 'Almarai',
                        weight: 'normal',
                        },
                   },
               },
               y: {
                   display: true,
                   title: {
                       display: true,
                       text: ' میلیون تومان',
                       color: "white",
                       font: {
                        size: 14,
                        family: 'Almarai',
                        weight: 'normal',
                        },

                   },
                   
               }
           }
       },
   };
   

   var chart2 = Chart.getChart("mychart");
   if (chart2 != undefined) {
    chart2.destroy();
   }
    const ctx = document.getElementById('mychart').getContext('2d');
    new Chart(ctx , config);

}
