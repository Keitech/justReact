import React from 'react'
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
} from "chart.js";

import { 
    ChartHeader, 
    PriceContainer, 
    PriceChange,
    ChartTitle,
    CurrentPrice
} from './LineChartElements';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1){
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071BD', 
                borderColor: '#0071BD'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    },
                },
            ]
        }
    }

    return (
        <>
            <ChartHeader>
                <ChartTitle level={2}>{coinName} Price Chart</ChartTitle> 
                <PriceContainer>
                    <PriceChange level={5}>{coinHistory?.data?.change}%</PriceChange>
                    <CurrentPrice level={5}>Current {coinName} Price: $ {currentPrice}</CurrentPrice>
                </PriceContainer>
            </ChartHeader>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart
