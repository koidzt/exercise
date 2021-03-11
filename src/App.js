import './App.css';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const fetchData = async (ind) => {
  const res = await axios.get('https://60474f19b801a40017ccbe13.mockapi.io/chart');
  const allData = res.data;
  const oddData = allData.filter((item) => new Date(item.createdAt).getDate() % 2 === 1);
  const evenData = allData.filter((item) => new Date(item.createdAt).getDate() % 2 !== 1);

  const dataList = [allData, oddData, evenData];
  return dataList[ind];
};

const CreateDataBar = (data) => {
  const dataBar = {
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
  return dataBar;
};

function App() {
  const [dataBar, setDataBar] = useState({});
  const [selectValue, setSelectValue] = useState(0);

  const selectOption = [
    { value: 0, label: 'All Date' },
    { value: 1, label: 'Odd Date' },
    { value: 2, label: 'Even Date' },
  ];

  const fetchDataBar = async () => {
    try {
      const data = await fetchData(selectValue);
      const barData = CreateDataBar(data);
      setDataBar(barData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataBar();
  }, [selectValue]);

  return (
    <div className="container">
      <Select defaultValue={selectOption[0]} onChange={(e) => setSelectValue(e.value)} options={selectOption} />
      <Bar data={dataBar} />
    </div>
  );
}

export default App;
