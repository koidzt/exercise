import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/pages/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <body className="App-body">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </body>
      <footer className="App-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
