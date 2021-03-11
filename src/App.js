import './App.css';
import { Doughnut, Pie, Bar, Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [dataBar, setDataBar] = useState({});
  const [dataLine, setDataLine] = useState({});
  useEffect(() => {
    axios.get('https://60474f19b801a40017ccbe13.mockapi.io/chart').then((res) => {
      const rawData = res.data;
      const oddDate = rawData.filter((item) => new Date(item.createdAt).getDate() % 2 === 1);
      const evenDate = rawData.filter((item) => new Date(item.createdAt).getDate() % 2 !== 1);
      console.log('rawData =>', rawData, 'oddDate =>', oddDate, 'evenDate =>', evenDate);

      const chartData = {
        labels: rawData.map((item) => item.group),
        datasets: [
          {
            data: rawData.map((item) => item.price),
            backgroundColor: rawData.map((item) => item.group),
            hoverBackgroundColor: rawData.map((item) => item.group),
            // backgroundColor: ['#4A3933', '#F0A500', '#E45826', '#E6D5B8'],
            // hoverBackgroundColor: ['#4A3933', '#F0A500', '#E45826', '#E6D5B8'],
          },
        ],
      };
      setData(chartData);

      const price = rawData.map((item) => item.price);
      const barData = {
        labels: rawData.map((item) => item.group),
        datasets: [
          {
            label: 'Bar1 Chart',
            data: rawData.map((item) => item.price),
            backgroundColor: 'rgba(255,0,0,0.2)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,0,0,0.4)',
            hoverBorderColor: 'rgba(255,0,0,1)',
          },
          // {
          //   label: 'Bar2 Chart',
          //   data: [...price].sort((a, b) => a - b),
          //   backgroundColor: 'rgba(0,255,0,0.2)',
          //   borderColor: 'rgba(0,255,0,1)',
          //   borderWidth: 1,
          //   hoverBackgroundColor: 'rgba(0,255,0,0.4)',
          //   hoverBorderColor: 'rgba(0,255,0,1)',
          // },
          // {
          //   label: 'Bar3 Chart',
          //   data: price.sort((a, b) => a - b).reverse(),
          //   backgroundColor: 'rgba(0,0,255,0.2)',
          //   borderColor: 'rgba(0,0,255,1)',
          //   borderWidth: 1,
          //   hoverBackgroundColor: 'rgba(0,0,255,0.4)',
          //   hoverBorderColor: 'rgba(0,0,255,1)',
          // },
          // {
          //   label: 'Bar4 Chart',
          //   data: rawData.map((item) => item.price).reverse(),
          //   backgroundColor: 'rgba(235,225,0,0.2)',
          //   borderColor: 'rgba(235,225,0,1)',
          //   borderWidth: 1,
          //   hoverBackgroundColor: 'rgba(235,225,0,0.4)',
          //   hoverBorderColor: 'rgba(235,225,0,1)',
          // },
        ],
      };
      setDataBar(barData);

      const lineChart = {
        labels: rawData.map((item) => item.group),
        datasets: [
          {
            label: 'Line Chart',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: rawData.map((item) => item.price),
          },
        ],
      };
      setDataLine(lineChart);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Doughnut data={data} />
        <Pie data={data} />
        <Bar data={dataBar} />
        <Line data={dataLine} />
      </div>
    </div>
  );
}

export default App;
