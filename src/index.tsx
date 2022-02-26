import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Approute from './route/Approute';
import { Provider } from 'react-redux';
import {store} from "../src/store/store"

import { saveState } from './store/localStorage';
  
store.subscribe(() => {
  saveState({
    basket: store.getState().basket,
  });
});
  

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Approute />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
