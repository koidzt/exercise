import './App.css';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://60474f19b801a40017ccbe13.mockapi.io/chart').then((res) => {
      const rawData = res.data;
      const oddDate = rawData.filter((item) => new Date(item.createdAt).getDate() % 2 === 1);
      const evenDate = rawData.filter((item) => new Date(item.createdAt).getDate() % 2 !== 1);
      console.log('rawData =>', rawData, 'oddDate =>', oddDate, 'evenDate =>', evenDate);

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
        ],
      };

      setData(barData);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Bar data={data} />
      </div>
    </div>
  );
}

export default App;
