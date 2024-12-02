// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
        datasets: [
            {
                label: 'Revenue',
                data: [ 1500, 2000, 1800, 2200, 2500, 3000 ],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderWidth: 2,
                tension: 0.4, // Line curvature
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart Example',
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
