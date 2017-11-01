import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './app/store/configureStore'
import {Router, Route, browserHistory} from 'react-router'
import Routes from './routes'

// import 'todomvc-app-css/index.css';

const store = configureStore();

render(
  <Routes/>, document.getElementById('root')
);
