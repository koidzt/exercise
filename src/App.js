import './App.css';
import AssetProductCard from './components/AssetProductCard/AssetProductCard';
// import AssetProductCardHr from './components/AssetProductCardHr/AssetProductCardHr';

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}
      >
        <AssetProductCard />
        {/* <AssetProductCardHr /> */}
      </header>
    </div>
  );
}

export default App;
