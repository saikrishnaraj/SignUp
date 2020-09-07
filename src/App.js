import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from "./components/navbar.component";
import Signup from "./components/signup.component";

function App() {
  return (  
    <Router>
      <div className="container">
        <Navbar/>
        <Route exact path='/' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
