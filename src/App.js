import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer/Footer/Footer';
import Header from './components/Header/Header/Header';
import TopHeader from './components/Header/TopHeader/TopHeader';
import Home from './components/Pages/Home/Home/Home';


function App() {
  return (
    <Router>
      <TopHeader></TopHeader>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
