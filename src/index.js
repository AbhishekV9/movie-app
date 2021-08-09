import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers'


const store=createStore(movies); //creating store(redux),we need to pass an argument in createStore i.e reducers
console.log('store',store)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

