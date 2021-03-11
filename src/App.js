import './App.css';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

function App() {
  const [data, setData] = useState({});
  const [dataBar, setDataBar] = useState({});

  useEffect(() => {
    axios.get('https://60474f19b801a40017ccbe13.mockapi.io/chart').then((res) => {
      const allData = res.data;
      const oddData = allData.filter((item) => new Date(item.createdAt).getDate() % 2 === 1);
      const evenData = allData.filter((item) => new Date(item.createdAt).getDate() % 2 !== 1);
      console.log('allData =>', allData, 'oddDate =>', oddData, 'evenDate =>', evenData);

      const filterData = (data) => {
        const value = {
          labels: data.map((item) => item.group),
          datasets: [
            {
              label: 'Bar1 Chart',
              data: data.map((item) => item.price),
              backgroundColor: 'rgba(255,0,0,0.2)',
              borderColor: 'rgba(255,0,0,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,0,0,0.4)',
              hoverBorderColor: 'rgba(255,0,0,1)',
            },
          ],
        };
        return value;
      };

      const select = [
        { value: filterData(allData), label: 'All Date' },
        { value: filterData(oddData), label: 'Odd Date' },
        { value: filterData(evenData), label: 'Even Date' },
      ];

      console.log(select);
      setData(select);
    });
  }, []);

  const handleChangeSelect = (select) => {
    console.log(select);
    setDataBar(select.value);
  };

  return (
    <div className="container">
      <Select onChange={handleChangeSelect} options={data} />
      <Bar data={dataBar} />
    </div>
  );
}

export default App;
