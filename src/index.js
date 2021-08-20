import { createContext } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import { react } from '@babel/types';


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

export const storeContext=createContext();
console.log('storeContext',storeContext);

class Provider extends React.Component{
  render(){
    const {store}=this.props;
    return <storeContext.Provider value={store}>
     {this.props.children} 
     {/* renders whatever children are in between provider tag   */}
    </storeContext.Provider>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      {/* <App store={store}/>  removed this because we are using now context*/}
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

