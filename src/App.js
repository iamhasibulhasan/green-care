import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer/Footer/Footer';
import Header from './components/Header/Header/Header';
import TopHeader from './components/Header/TopHeader/TopHeader';
import Doctors from './components/Pages/Doctors/Doctors';
import Home from './components/Pages/Home/Home/Home';
import Services from './components/Pages/Services/Services';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Login from './components/Pages/Auth/Login/Login';
import Register from './components/Pages/Auth/Register/Register';
import SingleService from './components/Pages/SingleService/SingleService';


function App() {
  return (
    <Router>
      <TopHeader></TopHeader>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/doctors'>
          <Doctors></Doctors>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/about-us'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='/contact-us'>
          <ContactUs></ContactUs>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/service/:id'>
          <SingleService></SingleService>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
