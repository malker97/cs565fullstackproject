import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, StoreProvider, action } from "easy-peasy";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={createStore({
      loggedIn: false,
      login: action((state, newstatus) => {
        state.loggedIn = newstatus;
      }),
      userid: '',
      setid: action((state, newstatus) => {
        state.userid = newstatus;
      }),
      newuser: false,
      setnewuser: action((state, newstatus) => {
        state.newuser = newstatus;
      }),
    })}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
