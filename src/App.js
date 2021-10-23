import LandingPage from './components/Landingpage/LandingPage.js';
import SignUp from './components/SignUp/SignUp.js';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/NavBar/NavBar';
import Calendar from './components/Calendar/Calendar';
import Login from './components/Login/Login'
import React from "react"
import { Container, NavItem } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>   
          <Route path="/Home" exact> 
            <LandingPage />
          </Route>
          <Route path="/Calendar" exact> 
            <Calendar />
          </Route>
          <Route path="/ContactUs" exact>
            <ContactUs />
          </Route>
          <Route path="/SignUp" exact>
            <SignUp />
          </Route>
          <Route path="/Login" exact>
            <Login />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
