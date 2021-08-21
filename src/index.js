//import { createContext } from 'react';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
//import {react } from '@babel/types';



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


 //commenting all this blow because it is availaible in react-redux package

// export const storeContext=createContext();
// console.log('storeContext',storeContext);

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return ( <storeContext.Provider value={store}>
//      {this.props.children} 
//      {/* renders whatever children are in between provider tag   */}
//     </storeContext.Provider>
//     );
//   }
// }


// export function connect(callback){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       //whatever the component wich we are connecting to the store shoul automatically rerender whenever the state changes so we have to subscribe this component to the store
//       constructor(props){
//         super(props);
//         this.unsubscribe=this.props.store.subscribe( ()=> this.forceUpdate()); //subscribe fn returns another fn that we can use to unsuscibe for preventing memory leaks
//       }

//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const {store}=this.props;
//         const state=store.getState();
//         const dataToBePassedAsProps=callback(state) //calling the callback that we are getting as argument,so from that callback we will get the list of properties that we want from state that we want to pass from here to that component as props
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//     };
//   }
    
//     //created wrapper beacuse we need to subscribe and there we need store
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return ( <storeContext.Consumer>
//           {(store)=> <ConnectedComponent store={store} />} 
//           {/* here we are getting store from storeContext.consumer and then we want to render connectedComponent */}
//         </storeContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };

// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      {/* <App store={store}/>  removed this because we are using now context*/}
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

