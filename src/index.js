import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';


var logger=({dispatch,getState})=>(next)=>(action)=>{
  console.log('logger');
  if(typeof action !== 'function'){
    console.log("ACTION_TYPE=",action.type);
  }
  next(action);
}

// var thunk=({dispatch,getState})=>(next)=>(action)=>{   commenting this because we qhave a package called thunk
//     if(typeof action==='function'){
//       action(dispatch);
//       return;
//     }
//     next(action);
//   }


const store=createStore(rootReducer,applyMiddleware(logger,thunk));
 console.log('store',store)
 console.log('Before state',store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

