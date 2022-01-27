import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Provider is A COMPONENT FROM REACT REDUX, WE WRAP IT AROUND EVERYTHING IN THAT APP IN OTHER
//FOR THEM TO GET ACCESS TO THE REDUX STORE
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';


//we want to make sure to wrap our app in this persist gate because what we want to do is have our application
//always have access to the persistence flow itself.
//What this will do is it will allow the persist gate to actually one receive the store but also fire
//off actions that will rehydrate the state whenever our application refreshes.
//So he'll see when we go back to our application that you'll see that this is actually still there from

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
