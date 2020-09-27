import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter } from 'react-router-dom'
import LoginProvider from "../src/components/LoginProvider"
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);