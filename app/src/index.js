import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import reducer from './redux/reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
