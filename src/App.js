import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/aboutUs" component={AboutUs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
