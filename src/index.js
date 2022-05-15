import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "antd/dist/antd.css";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import "./index.css";
import Landing from "./pages/Landing";

//Redux
import { Provider } from "react-redux";
import Reducer from "./redux/reducers";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import Chatbot2 from "./Chatobot/ChatBot2";
import Dashboard from "./Dashboard/Dashboard";
import KnowledgeBase from "./Dashboard/DashBoardOptions/KnowledgeBase";
import Home from "./Dashboard/DashBoardOptions/Home";
import SignUp from "./pages/SignUp";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

// const routes = [
//   {
//     path: "/",
//     component: App,
//   },
//   {
//     path: "/users",
//     component: Users,
//   },
//   {
//     path: "/",
//     component: Home,
//   },
// ];
ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="userGuide" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="chatbot" element={<Chatbot2 />} />
          <Route path="dashboard/*" element={<Dashboard />}>
            <Route path="dashboard" index element={<Home />} />
            <Route path="knowledgebase" element={<KnowledgeBase />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
