import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './components/signup'
import Login from './components/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
     <Signup/>
    </Router>
  </React.StrictMode>
);


