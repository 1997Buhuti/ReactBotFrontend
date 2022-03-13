import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Shop from "./shop/Shop";
import Login from "./pages/Login";
import './index.css';
import Landing from "./pages/Landing";

//Redux
import {Provider} from "react-redux";
import Reducer from "./redux/reducers"
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

//import * as serviceWorker from "./serviceWorker";
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <React.StrictMode>
      <Provider
      store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}
      >
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/about" element={<About/>} />
              <Route path="/userGuide" element={<Landing/>} />
              <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
