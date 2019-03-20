console.log(new Date().toLocaleString());

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();
const appRoot = document.getElementById('app');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, appRoot);
