import logo from './logo.svg';
import './App.css';
import AssetProductCard from './components/AssetProductCard';

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}
      >
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
        <div className="my-2">
          <AssetProductCard />
        </div>
      </header>
    </div>
  );
}

export default App;
