import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import TopHeader from './components/Header/TopHeader/TopHeader';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <Router>
      <TopHeader></TopHeader>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
