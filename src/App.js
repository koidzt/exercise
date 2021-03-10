import './App.css';
import axios from 'axios';
import { useTable } from 'react-table';
import React, { useEffect, useState } from 'react';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://5f5849b01a07d600167e7a15.mockapi.io/api/v1/callback/get-all-callbacks').then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);
  const columns = React.useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Created At',
      accessor: 'createdAt',
    },
    {
      Header: 'Phone',
      accessor: 'phone_number',
    },
    {
      Header: 'Language',
      accessor: 'language',
    },
  ]);
  return <div className="App">{data && <Table columns={columns} data={data} />}</div>;
}

export default App;
