import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Approute from './route/Approute';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Approute />
  </BrowserRouter>,
  document.getElementById('root')
);
