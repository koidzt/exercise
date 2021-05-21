import React from 'react';
import QRCode from 'react-qr-code';

function Home() {
  const objData = { farmer_name: 'สมชาย เกษตรมงคล', farm_name: 'ฟาร์มบางแคร์', receive_date: '12/05/2021 12:44' };
  const strData = JSON.stringify(objData);
  console.log(strData);

  const data = JSON.parse(strData);
  console.log(data);

  return (
    <div>
      <p>main menu</p>
      <div className="QR-Code">
        <QRCode value={strData} />
      </div>
      <br />
      <div className="text-start">
        <p>Farmer Name : {data.farmer_name}</p>
        <p>Orchard Name : {data.farm_name}</p>
        <p>Receive Date : {data.receive_date}</p>
      </div>
    </div>
  );
}

export default Home;
