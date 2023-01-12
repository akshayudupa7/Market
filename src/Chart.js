import React from 'react'
import './App.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
  );


const data = {
    datasets: [{
        data: [20, 10],
        backgroundColor:[
            'lightblue',
            'yellowgreen',
        
          ]
    },
  ],
  labels: [
      ' Mutual Funds',
      "ETF's"
  ], 
};

export const Chart = () => {
  return (
   <Doughnut data={data}/>
  )
}
export default Chart