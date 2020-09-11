import React from 'react';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home/home'
import Home2 from './home/home2'
import './App.css';

function App() {
  return (

    <Router>

      <Route path="/" exact component={Home}></Route>







    </Router>

  );
}

export default App;
