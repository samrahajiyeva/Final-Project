import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import 'apexcharts/dist/apexcharts.css';
import './PieChart.scss'

const PieChart = () => {
    useEffect(() => {
        const sparklineData = [10, 20, 30, 40, 50, 40, 30, 20, 10];

        const randomizeArray = (array) => {
            const newArray = array.slice();
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        // Chart 1
        const options1 = {
            series: [{
                data: randomizeArray(sparklineData),
            }],
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'straight',
            },
            fill: {
                opacity: 0.3,
            },
            yaxis: {
                min: 0,
            },
            colors: ['#DCE6EC'],
            title: {
                text: '$424,652',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                },
            },
            subtitle: {
                text: 'Sales',
                offsetX: 0,
                style: {
                    fontSize: '14px',
                },
            },
        };

        const chart1 = new ApexCharts(document.querySelector("#chart-spark1"), options1);
        chart1.render();

        // Chart 2
        const options2 = {
            series: [{
                data: randomizeArray(sparklineData),
            }],
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'straight',
            },
            fill: {
                opacity: 0.3,
            },
            yaxis: {
                min: 0,
            },
            colors: ['#DCE6EC'],
            title: {
                text: '$235,312',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                },
            },
            subtitle: {
                text: 'Expenses',
                offsetX: 0,
                style: {
                    fontSize: '14px',
                },
            },
        };

        const chart2 = new ApexCharts(document.querySelector("#chart-spark2"), options2);
        chart2.render();

        // Chart 3
        const options3 = {
            series: [{
                data: randomizeArray(sparklineData),
            }],
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'straight',
            },
            fill: {
                opacity: 0.3,
            },
            xaxis: {
                crosshairs: {
                    width: 1,
                },
            },
            yaxis: {
                min: 0,
            },
            title: {
                text: '$135,965',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                },
            },
            subtitle: {
                text: 'Profits',
                offsetX: 0,
                style: {
                    fontSize: '14px',
                },
            },
        };

        const chart3 = new ApexCharts(document.querySelector("#chart-spark3"), options3);
        chart3.render();

        // Chart 4
        const options4 = {
            series: [{
                name: 'Income',
                data: [350, 275, 400, 300, 350, 300, 450],
            }, {
                name: 'Expenses',
                data: [200, 175, 240, 220, 250, 200, 300],
            }],
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)',
                },
            },
            fill: {
                opacity: 1,
            },
            legend: {
                position: 'top',
            },
        };

        const chart4 = new ApexCharts(document.querySelector("#chart-1"), options4);
        chart4.render();

        // Chart 5
        const options5 = {
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            }],
            chart: {
                type: 'line',
                height: 350,
            },
            stroke: {
                width: [0, 4, 4],
                curve: 'smooth',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
            legend: {
                position: 'top',
            },
            colors: ['#6ab04c', '#2980b9', '#f9ce1d'],
        };

        const chart5 = new ApexCharts(document.querySelector("#chart-2"), options5);
        chart5.render();

        // Chart 6
        const options6 = {
            series: [{
                name: 'Desktops',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            }],
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: 7,
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00',
                    '2018-09-19T01:30:00',
                    '2018-09-19T02:30:00',
                    '2018-09-19T03:30:00',
                    '2018-09-19T04:30:00',
                    '2018-09-19T05:30:00',
                    '2018-09-19T06:30:00',
                    '2018-09-19T07:30:00',
                    '2018-09-19T08:30:00',
                ],
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left',
                style: {
                    fontSize: '20px',
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100],
                },
            },
            markers: {
                size: 4,
                colors: ['#FFA41B'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 7,
                },
            },
            yaxis: {
                min: -10,
                max: 150,
                title: {
                    text: 'Number of Sales',
                },
            },
        };

        const chart6 = new ApexCharts(document.querySelector("#chart-3"), options6);
        chart6.render();
    }, []);

    return (
        <div className='piecharts'>
            <div className="sparklines">
                <div id="chart-spark1"></div>
                <div id="chart-spark2"></div>
                <div id="chart-spark3"></div>
            </div>
            <div id="chart-1"></div>
            <div id="chart-2"></div>
            <div id="chart-3"></div>
        </div>
    );
};

export default PieChart;
