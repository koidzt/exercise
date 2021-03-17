import { useEffect, useState } from 'react';
import './App.css';
import { APIMockMapping } from './services/APIServices/APIMockMapping';
import { nanoid } from 'nanoid';
import NormalCard from './assets/components/NormalCard';
import NewCard from './assets/components/NewCard';

function App() {
  const [dataLists, setDataLists] = useState([]);
  const [isAddCard, setIsAddCard] = useState(false);

  const fetchData = async () => {
    try {
      const result = await APIMockMapping();
      setDataLists(result?.data);
      console.log(result);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleAddCard = () => {
    setIsAddCard(!isAddCard);
  };

  return (
    <div className="App">
      <div>Test</div>
      {isAddCard ? (
        <NewCard dataLists={dataLists} setDataLists={setDataLists} toggleAddCard={toggleAddCard} />
      ) : (
        <button onClick={toggleAddCard}>Add Card</button>
      )}
      <div
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {dataLists.map((dataList) => (
          <NormalCard key={nanoid()} name={dataList.name} phone={dataList.phone} profile={dataList.profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
